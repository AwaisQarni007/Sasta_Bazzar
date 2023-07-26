const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: '../../../public/images/Cloths' });

// Route to handle file uploads
app.post('/images', upload.single('file'), (req, res) => {
  // At this point, the file has been uploaded and saved to the 'src/images' folder.
  // You can access the file details using 'req.file'.

  // Respond with a success message or the file details.
  res.json({ success: true, message: 'File uploaded successfully.' });
});

const PORT = 3001; // You can change the port if needed
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
