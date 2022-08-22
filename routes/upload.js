const express = require('express');
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const User = require('../models/user_info');
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    console.log(file);
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'));
    }
    cb(undefined, true);
  },
});

router.post('/image/:id', upload.single('image'), async (req, res) => {
  console.log('entered upload route');
  try {
    const imgPath = await User.update(
      { aadharPic: req.file.originalname },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ path: req.file.path, success: true });
  } catch (error) {
    res.status(401).json('Image upload error');
  }
});

module.exports = router;

// const buffer = await sharp(req.file.buffer)
//   .resize({ width: 250, height: 250 })
//   .png()
//   .toBuffer();
