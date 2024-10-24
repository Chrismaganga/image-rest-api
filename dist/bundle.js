/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@neondatabase/serverless":
/*!*******************************************!*\
  !*** external "@neondatabase/serverless" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@neondatabase/serverless");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

// require("dotenv").config();
// const express = require("express");
// const { neon } = require("@neondatabase/serverless");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const sql = neon(process.env.DATABASE_URL);

// // Setup Multer for file storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = "uploads/";
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir); // Create uploads directory if it doesn't exist
//     }
//     cb(null, uploadDir); // Save files to uploads folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
//   }
// });

// const upload = multer({ storage });

// // Middleware for parsing JSON bodies
// app.use(express.json());

// // Create (Upload Image)
// app.post("/upload-image", upload.single("image"), async (req, res) => {
//   try {
//     const { filename } = req.file;
//     const { description } = req.body;
//     // Insert image metadata into the database
//     const result = await sql`
//       INSERT INTO images (filename, description)
//       VALUES (${filename}, ${description})
//       RETURNING id, filename, description, created_at
//     `;
//     res.status(201).json({ message: "Image uploaded", image: result[0] });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error uploading image");
//   }
// });

// // Read (Get All Images)
// app.get("/images", async (req, res) => {
//   try {
//     const result = await sql`SELECT * FROM images ORDER BY created_at DESC`;
//     res.status(200).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching images");
//   }
// });

// // Read (Get Single Image by ID)
// app.get("/images/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await sql`SELECT * FROM images WHERE id = ${id}`;
//     if (result.length === 0) {
//       return res.status(404).json({ message: "Image not found" });
//     }
//     res.status(200).json(result[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching image");
//   }
// });

// // Update (Edit Image Description)
// app.put("/images/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const result = await sql`
//       UPDATE images
//       SET description = ${description}
//       WHERE id = ${id}
//       RETURNING id, filename, description, created_at
//     `;
//     if (result.length === 0) {
//       return res.status(404).json({ message: "Image not found" });
//     }
//     res.status(200).json({ message: "Image updated", image: result[0] });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating image");
//   }
// });

// // Delete (Remove Image)
// app.delete("/images/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await sql`
//       DELETE FROM images WHERE id = ${id}
//       RETURNING filename
//     `;
//     if (result.length === 0) {
//       return res.status(404).json({ message: "Image not found" });
//     }

//     // Remove the file from the uploads directory
//     const filePath = path.join(__dirname, "uploads", result[0].filename);
//     fs.unlink(filePath, (err) => {
//       if (err) {
//         console.error("Error deleting file:", err);
//       }
//     });

//     res.status(200).json({ message: "Image deleted" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error deleting image");
//   }
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

(__webpack_require__(/*! dotenv */ "dotenv").config)();
var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! @neondatabase/serverless */ "@neondatabase/serverless"),
  neon = _require.neon;
var multer = __webpack_require__(/*! multer */ "multer");
var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");
var app = express();
var sql = neon(process.env.DATABASE_URL);

// Custom CORS middleware to add CORS headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allow specific headers
  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Handle preflight requests
  }
  next();
});

// Setup Multer for file storage
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Create uploads directory if it doesn't exist
    }
    cb(null, uploadDir); // Save files to uploads folder
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  }
});
var upload = multer({
  storage: storage
});

// Middleware for parsing JSON bodies
app.use(express.json());

// Create (Upload Image)
app.post("/upload-image", upload.single("image"), /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {
    var filename, description, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          filename = req.file.filename;
          description = req.body.description; // Insert image metadata into the database
          _context.next = 5;
          return sql(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      INSERT INTO images (filename, description)\n      VALUES (", ", ", ")\n      RETURNING id, filename, description, created_at\n    "])), filename, description);
        case 5:
          result = _context.sent;
          res.status(201).json({
            message: "Image uploaded",
            image: result[0]
          });
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          res.status(500).send("Error uploading image");
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// Read (Get All Images)
app.get("/images", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return sql(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["SELECT * FROM images ORDER BY created_at DESC"])));
        case 3:
          result = _context2.sent;
          res.status(200).json(result);
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).send("Error fetching images");
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Read (Get Single Image by ID)
app.get("/images/:id", /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {
    var id, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return sql(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["SELECT * FROM images WHERE id = ", ""])), id);
        case 4:
          result = _context3.sent;
          if (!(result.length === 0)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Image not found"
          }));
        case 7:
          res.status(200).json(result[0]);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.status(500).send("Error fetching image");
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

// Update (Edit Image Description)
app.put("/images/:id", /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(req, res) {
    var id, description, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          description = req.body.description;
          _context4.next = 5;
          return sql(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      UPDATE images\n      SET description = ", "\n      WHERE id = ", "\n      RETURNING id, filename, description, created_at\n    "])), description, id);
        case 5:
          result = _context4.sent;
          if (!(result.length === 0)) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Image not found"
          }));
        case 8:
          res.status(200).json({
            message: "Image updated",
            image: result[0]
          });
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.status(500).send("Error updating image");
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Delete (Remove Image)
app["delete"]("/images/:id", /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(req, res) {
    var id, result, filePath;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return sql(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      DELETE FROM images WHERE id = ", "\n      RETURNING filename\n    "])), id);
        case 4:
          result = _context5.sent;
          if (!(result.length === 0)) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Image not found"
          }));
        case 7:
          // Remove the file from the uploads directory
          filePath = path.join(__dirname, "uploads", result[0].filename);
          fs.unlink(filePath, function (err) {
            if (err) {
              console.error("Error deleting file:", err);
            }
          });
          res.status(200).json({
            message: "Image deleted"
          });
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.status(500).send("Error deleting image");
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

// Start the server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCL0MsT0FBTyxDQUFDa0QsR0FBRyx1Q0FBQUMsTUFBQSxDQUF1Q0osSUFBSSxDQUFFLENBQUM7QUFDM0QsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2ltYWdlLXJlc3QtYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIiIsIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vaW1hZ2UtcmVzdC1hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3NcIiIsIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2ltYWdlLXJlc3QtYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2ltYWdlLXJlc3QtYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwibXVsdGVyXCIiLCJ3ZWJwYWNrOi8vaW1hZ2UtcmVzdC1hcGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vaW1hZ2UtcmVzdC1hcGkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW1hZ2UtcmVzdC1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbWFnZS1yZXN0LWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLXJlc3QtYXBpLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcbi8vIGNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuLy8gY29uc3QgeyBuZW9uIH0gPSByZXF1aXJlKFwiQG5lb25kYXRhYmFzZS9zZXJ2ZXJsZXNzXCIpO1xyXG4vLyBjb25zdCBtdWx0ZXIgPSByZXF1aXJlKFwibXVsdGVyXCIpO1xyXG4vLyBjb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbi8vIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cclxuLy8gY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG4vLyBjb25zdCBzcWwgPSBuZW9uKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XHJcblxyXG4vLyAvLyBTZXR1cCBNdWx0ZXIgZm9yIGZpbGUgc3RvcmFnZVxyXG4vLyBjb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcclxuLy8gICBkZXN0aW5hdGlvbjogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuLy8gICAgIGNvbnN0IHVwbG9hZERpciA9IFwidXBsb2Fkcy9cIjtcclxuLy8gICAgIGlmICghZnMuZXhpc3RzU3luYyh1cGxvYWREaXIpKSB7XHJcbi8vICAgICAgIGZzLm1rZGlyU3luYyh1cGxvYWREaXIpOyAvLyBDcmVhdGUgdXBsb2FkcyBkaXJlY3RvcnkgaWYgaXQgZG9lc24ndCBleGlzdFxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2IobnVsbCwgdXBsb2FkRGlyKTsgLy8gU2F2ZSBmaWxlcyB0byB1cGxvYWRzIGZvbGRlclxyXG4vLyAgIH0sXHJcbi8vICAgZmlsZW5hbWU6IChyZXEsIGZpbGUsIGNiKSA9PiB7XHJcbi8vICAgICBjYihudWxsLCBEYXRlLm5vdygpICsgcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxuYW1lKSk7IC8vIEdlbmVyYXRlIHVuaXF1ZSBmaWxlbmFtZVxyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlIH0pO1xyXG5cclxuLy8gLy8gTWlkZGxld2FyZSBmb3IgcGFyc2luZyBKU09OIGJvZGllc1xyXG4vLyBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuXHJcbi8vIC8vIENyZWF0ZSAoVXBsb2FkIEltYWdlKVxyXG4vLyBhcHAucG9zdChcIi91cGxvYWQtaW1hZ2VcIiwgdXBsb2FkLnNpbmdsZShcImltYWdlXCIpLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgeyBmaWxlbmFtZSB9ID0gcmVxLmZpbGU7XHJcbi8vICAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSByZXEuYm9keTtcclxuLy8gICAgIC8vIEluc2VydCBpbWFnZSBtZXRhZGF0YSBpbnRvIHRoZSBkYXRhYmFzZVxyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxyXG4vLyAgICAgICBJTlNFUlQgSU5UTyBpbWFnZXMgKGZpbGVuYW1lLCBkZXNjcmlwdGlvbilcclxuLy8gICAgICAgVkFMVUVTICgke2ZpbGVuYW1lfSwgJHtkZXNjcmlwdGlvbn0pXHJcbi8vICAgICAgIFJFVFVSTklORyBpZCwgZmlsZW5hbWUsIGRlc2NyaXB0aW9uLCBjcmVhdGVkX2F0XHJcbi8vICAgICBgO1xyXG4vLyAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkltYWdlIHVwbG9hZGVkXCIsIGltYWdlOiByZXN1bHRbMF0gfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2VcIik7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbi8vIC8vIFJlYWQgKEdldCBBbGwgSW1hZ2VzKVxyXG4vLyBhcHAuZ2V0KFwiL2ltYWdlc1wiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFNFTEVDVCAqIEZST00gaW1hZ2VzIE9SREVSIEJZIGNyZWF0ZWRfYXQgREVTQ2A7XHJcbi8vICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgZmV0Y2hpbmcgaW1hZ2VzXCIpO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyAvLyBSZWFkIChHZXQgU2luZ2xlIEltYWdlIGJ5IElEKVxyXG4vLyBhcHAuZ2V0KFwiL2ltYWdlcy86aWRcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgU0VMRUNUICogRlJPTSBpbWFnZXMgV0hFUkUgaWQgPSAke2lkfWA7XHJcbi8vICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIkltYWdlIG5vdCBmb3VuZFwiIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0WzBdKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkVycm9yIGZldGNoaW5nIGltYWdlXCIpO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyAvLyBVcGRhdGUgKEVkaXQgSW1hZ2UgRGVzY3JpcHRpb24pXHJcbi8vIGFwcC5wdXQoXCIvaW1hZ2VzLzppZFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuLy8gICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHJlcS5ib2R5O1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxyXG4vLyAgICAgICBVUERBVEUgaW1hZ2VzXHJcbi8vICAgICAgIFNFVCBkZXNjcmlwdGlvbiA9ICR7ZGVzY3JpcHRpb259XHJcbi8vICAgICAgIFdIRVJFIGlkID0gJHtpZH1cclxuLy8gICAgICAgUkVUVVJOSU5HIGlkLCBmaWxlbmFtZSwgZGVzY3JpcHRpb24sIGNyZWF0ZWRfYXRcclxuLy8gICAgIGA7XHJcbi8vICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIkltYWdlIG5vdCBmb3VuZFwiIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkltYWdlIHVwZGF0ZWRcIiwgaW1hZ2U6IHJlc3VsdFswXSB9KTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkVycm9yIHVwZGF0aW5nIGltYWdlXCIpO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyAvLyBEZWxldGUgKFJlbW92ZSBJbWFnZSlcclxuLy8gYXBwLmRlbGV0ZShcIi9pbWFnZXMvOmlkXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsYFxyXG4vLyAgICAgICBERUxFVEUgRlJPTSBpbWFnZXMgV0hFUkUgaWQgPSAke2lkfVxyXG4vLyAgICAgICBSRVRVUk5JTkcgZmlsZW5hbWVcclxuLy8gICAgIGA7XHJcbi8vICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIkltYWdlIG5vdCBmb3VuZFwiIH0pO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIFJlbW92ZSB0aGUgZmlsZSBmcm9tIHRoZSB1cGxvYWRzIGRpcmVjdG9yeVxyXG4vLyAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcInVwbG9hZHNcIiwgcmVzdWx0WzBdLmZpbGVuYW1lKTtcclxuLy8gICAgIGZzLnVubGluayhmaWxlUGF0aCwgKGVycikgPT4ge1xyXG4vLyAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGZpbGU6XCIsIGVycik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJJbWFnZSBkZWxldGVkXCIgfSk7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvciBkZWxldGluZyBpbWFnZVwiKTtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG5cclxuLy8gLy8gU3RhcnQgdGhlIHNlcnZlclxyXG4vLyBjb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG4vLyBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhgU2VydmVyIHJ1bm5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuY29uc3QgeyBuZW9uIH0gPSByZXF1aXJlKFwiQG5lb25kYXRhYmFzZS9zZXJ2ZXJsZXNzXCIpO1xyXG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKFwibXVsdGVyXCIpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBzcWwgPSBuZW9uKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XHJcblxyXG4vLyBDdXN0b20gQ09SUyBtaWRkbGV3YXJlIHRvIGFkZCBDT1JTIGhlYWRlcnNcclxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTsgLy8gQWxsb3cgYW55IG9yaWdpblxyXG4gIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsIFwiR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OU1wiKTsgLy8gQWxsb3cgc3BlY2lmaWMgbWV0aG9kc1xyXG4gIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvblwiKTsgLy8gQWxsb3cgc3BlY2lmaWMgaGVhZGVyc1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIk9QVElPTlNcIikge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7IC8vIEhhbmRsZSBwcmVmbGlnaHQgcmVxdWVzdHNcclxuICB9XHJcbiAgbmV4dCgpO1xyXG59KTtcclxuXHJcbi8vIFNldHVwIE11bHRlciBmb3IgZmlsZSBzdG9yYWdlXHJcbmNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xyXG4gIGRlc3RpbmF0aW9uOiAocmVxLCBmaWxlLCBjYikgPT4ge1xyXG4gICAgY29uc3QgdXBsb2FkRGlyID0gXCJ1cGxvYWRzL1wiO1xyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHVwbG9hZERpcikpIHtcclxuICAgICAgZnMubWtkaXJTeW5jKHVwbG9hZERpcik7IC8vIENyZWF0ZSB1cGxvYWRzIGRpcmVjdG9yeSBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAgICB9XHJcbiAgICBjYihudWxsLCB1cGxvYWREaXIpOyAvLyBTYXZlIGZpbGVzIHRvIHVwbG9hZHMgZm9sZGVyXHJcbiAgfSxcclxuICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuICAgIGNiKG51bGwsIERhdGUubm93KCkgKyBwYXRoLmV4dG5hbWUoZmlsZS5vcmlnaW5hbG5hbWUpKTsgLy8gR2VuZXJhdGUgdW5pcXVlIGZpbGVuYW1lXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IHN0b3JhZ2UgfSk7XHJcblxyXG4vLyBNaWRkbGV3YXJlIGZvciBwYXJzaW5nIEpTT04gYm9kaWVzXHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5cclxuLy8gQ3JlYXRlIChVcGxvYWQgSW1hZ2UpXHJcbmFwcC5wb3N0KFwiL3VwbG9hZC1pbWFnZVwiLCB1cGxvYWQuc2luZ2xlKFwiaW1hZ2VcIiksIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGZpbGVuYW1lIH0gPSByZXEuZmlsZTtcclxuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHJlcS5ib2R5O1xyXG4gICAgLy8gSW5zZXJ0IGltYWdlIG1ldGFkYXRhIGludG8gdGhlIGRhdGFiYXNlXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgXHJcbiAgICAgIElOU0VSVCBJTlRPIGltYWdlcyAoZmlsZW5hbWUsIGRlc2NyaXB0aW9uKVxyXG4gICAgICBWQUxVRVMgKCR7ZmlsZW5hbWV9LCAke2Rlc2NyaXB0aW9ufSlcclxuICAgICAgUkVUVVJOSU5HIGlkLCBmaWxlbmFtZSwgZGVzY3JpcHRpb24sIGNyZWF0ZWRfYXRcclxuICAgIGA7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiSW1hZ2UgdXBsb2FkZWRcIiwgaW1hZ2U6IHJlc3VsdFswXSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkVycm9yIHVwbG9hZGluZyBpbWFnZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gUmVhZCAoR2V0IEFsbCBJbWFnZXMpXHJcbmFwcC5nZXQoXCIvaW1hZ2VzXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgU0VMRUNUICogRlJPTSBpbWFnZXMgT1JERVIgQlkgY3JlYXRlZF9hdCBERVNDYDtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvciBmZXRjaGluZyBpbWFnZXNcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIFJlYWQgKEdldCBTaW5nbGUgSW1hZ2UgYnkgSUQpXHJcbmFwcC5nZXQoXCIvaW1hZ2VzLzppZFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNxbGBTRUxFQ1QgKiBGUk9NIGltYWdlcyBXSEVSRSBpZCA9ICR7aWR9YDtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiSW1hZ2Ugbm90IGZvdW5kXCIgfSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRbMF0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgZmV0Y2hpbmcgaW1hZ2VcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIFVwZGF0ZSAoRWRpdCBJbWFnZSBEZXNjcmlwdGlvbilcclxuYXBwLnB1dChcIi9pbWFnZXMvOmlkXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgXHJcbiAgICAgIFVQREFURSBpbWFnZXNcclxuICAgICAgU0VUIGRlc2NyaXB0aW9uID0gJHtkZXNjcmlwdGlvbn1cclxuICAgICAgV0hFUkUgaWQgPSAke2lkfVxyXG4gICAgICBSRVRVUk5JTkcgaWQsIGZpbGVuYW1lLCBkZXNjcmlwdGlvbiwgY3JlYXRlZF9hdFxyXG4gICAgYDtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiSW1hZ2Ugbm90IGZvdW5kXCIgfSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW1hZ2UgdXBkYXRlZFwiLCBpbWFnZTogcmVzdWx0WzBdIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgdXBkYXRpbmcgaW1hZ2VcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIERlbGV0ZSAoUmVtb3ZlIEltYWdlKVxyXG5hcHAuZGVsZXRlKFwiL2ltYWdlcy86aWRcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWxgXHJcbiAgICAgIERFTEVURSBGUk9NIGltYWdlcyBXSEVSRSBpZCA9ICR7aWR9XHJcbiAgICAgIFJFVFVSTklORyBmaWxlbmFtZVxyXG4gICAgYDtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiSW1hZ2Ugbm90IGZvdW5kXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBmaWxlIGZyb20gdGhlIHVwbG9hZHMgZGlyZWN0b3J5XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwidXBsb2Fkc1wiLCByZXN1bHRbMF0uZmlsZW5hbWUpO1xyXG4gICAgZnMudW5saW5rKGZpbGVQYXRoLCAoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZmlsZTpcIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkltYWdlIGRlbGV0ZWRcIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkVycm9yIGRlbGV0aW5nIGltYWdlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBTdGFydCB0aGUgc2VydmVyXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiZXhwcmVzcyIsIl9yZXF1aXJlIiwibmVvbiIsIm11bHRlciIsInBhdGgiLCJmcyIsImFwcCIsInNxbCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwibWV0aG9kIiwic2VuZFN0YXR1cyIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwiZmlsZSIsImNiIiwidXBsb2FkRGlyIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsImZpbGVuYW1lIiwiRGF0ZSIsIm5vdyIsImV4dG5hbWUiLCJvcmlnaW5hbG5hbWUiLCJ1cGxvYWQiLCJqc29uIiwicG9zdCIsInNpbmdsZSIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImRlc2NyaXB0aW9uIiwicmVzdWx0Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwiYm9keSIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJzZW50Iiwic3RhdHVzIiwibWVzc2FnZSIsImltYWdlIiwidDAiLCJjb25zb2xlIiwiZXJyb3IiLCJzZW5kIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXQiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3RlbXBsYXRlT2JqZWN0MiIsIl94MyIsIl94NCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJpZCIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInBhcmFtcyIsIl90ZW1wbGF0ZU9iamVjdDMiLCJsZW5ndGgiLCJhYnJ1cHQiLCJfeDUiLCJfeDYiLCJwdXQiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3RlbXBsYXRlT2JqZWN0NCIsIl94NyIsIl94OCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJmaWxlUGF0aCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl90ZW1wbGF0ZU9iamVjdDUiLCJqb2luIiwiX19kaXJuYW1lIiwidW5saW5rIiwiZXJyIiwiX3g5IiwiX3gxMCIsInBvcnQiLCJQT1JUIiwibGlzdGVuIiwibG9nIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==