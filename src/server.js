require("dotenv").config();
const express = require("express");
const { neon } = require("@neondatabase/serverless");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const sql = neon(process.env.DATABASE_URL);

// Setup Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Create uploads directory if it doesn't exist
    }
    cb(null, uploadDir); // Save files to uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  }
});

const upload = multer({ storage });

// Middleware for parsing JSON bodies
app.use(express.json());

// Create (Upload Image)
app.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const { filename } = req.file;
    const { description } = req.body;
    // Insert image metadata into the database
    const result = await sql`
      INSERT INTO images (filename, description)
      VALUES (${filename}, ${description})
      RETURNING id, filename, description, created_at
    `;
    res.status(201).json({ message: "Image uploaded", image: result[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading image");
  }
});

// Read (Get All Images)
app.get("/images", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM images ORDER BY created_at DESC`;
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching images");
  }
});

// Read (Get Single Image by ID)
app.get("/images/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql`SELECT * FROM images WHERE id = ${id}`;
    if (result.length === 0) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching image");
  }
});

// Update (Edit Image Description)
app.put("/images/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const result = await sql`
      UPDATE images
      SET description = ${description}
      WHERE id = ${id}
      RETURNING id, filename, description, created_at
    `;
    if (result.length === 0) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json({ message: "Image updated", image: result[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating image");
  }
});

// Delete (Remove Image)
app.delete("/images/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql`
      DELETE FROM images WHERE id = ${id}
      RETURNING filename
    `;
    if (result.length === 0) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Remove the file from the uploads directory
    const filePath = path.join(__dirname, "uploads", result[0].filename);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });

    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting image");
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
