const express = require('express');
const multer  = require('multer');

const app = express();
app.set('port', process.env.PORT || 3001);

// setup multer for files upload
const storage = multer.diskStorage(
  {
    destination: (req, file, cb) => {
      let path;

      if (file.mimetype.match(/^image/)) {
        path = './client/public/static/img';
      } else {
        path = './client/src/data';
      }

      cb(null, path);
    },
    filename: (req, file, cb) => cb(null, file.originalname)
  }
);
const upload = multer({ storage } );

app.use(express.json());

// route for file upload
app.post('/api/uploadfile', upload.single('myFile'), (req, res) => {
  console.info('req: ', req?.file);
  return res.sendStatus(200);
});

app.listen(app.get('port'), () => {
  console.info(`Find the server at: http://localhost:${app.get('port')}/`);
});
