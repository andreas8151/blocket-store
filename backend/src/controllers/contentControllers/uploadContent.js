const pool = require("../../server");

function uploadContent(req, res) {
  const { filename } = req.file;
  const { description } = req.body;
  const user_id = req.userId;

  pool.query(
    "INSERT INTO content (filename, description, user_id) VALUES (?, ?, ?)",
    [filename, description, user_id],
    (err, result) => {
      if (err) {
        console.log(
          "🚀 ~ file: uploadContent.js:34 ~ upload.single ~ err:",
          err
        );
        return res
          .status(500)
          .json({ error: "Failed to save content to database" });
      }
      res.status(201).json({ message: "upload success" });
    }
  );
}

module.exports = { uploadContent };
