# Express Image Upload API with Neon PostgreSQL

This project is an Image Upload API built using Express.js and Neon PostgreSQL as the database. It allows users to upload images, store their metadata (filename and description), and perform CRUD (Create, Read, Update, Delete) operations on the stored images.

## Features

- **Image Upload**: Upload images and store their metadata (filename, description) in the Neon PostgreSQL database.
- **CRUD Operations**: 
  - **Create**: Upload and save new images.
  - **Read**: Retrieve a list of all images or a single image by its ID.
  - **Update**: Modify the description of an existing image.
  - **Delete**: Remove images and their files from the server and database.

## Prerequisites

- [Node.js](https://nodejs.org/) v14.x or later
- [Neon PostgreSQL Database](https://neon.tech/)
- [Postman](https://www.postman.com/) or [cURL](https://curl.se/) for testing API endpoints (optional)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <repository_name>
