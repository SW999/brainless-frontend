const express = require("express");
const multer  = require('multer');

const app = express();
app.set("port", process.env.PORT || 3001);

// setup multer for file upload
const storage = multer.diskStorage(
    {
        destination: './client/src/data',
        filename: (req, file, cb ) => cb( null, file.originalname)
    }
);
const upload = multer({ storage } );

app.use(express.json());

// route for file upload
app.post("/api/uploadfile", upload.single('myFile'), (req, res) => res.sendStatus(200));

app.listen(app.get("port"), () => {
  console.info(`Find the server at: http://localhost:${app.get("port")}/`);
});
