const pool = require("../../server");

function getContent(req, res) {
  const user_id = req.userId;

  // Retrieve the images from the database table and filter by user ID
  pool.query(
    `SELECT filename, description FROM content WHERE user_id = ?`,
    [user_id],
    function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).send({
          message: "Unable to retrieve images.",
        });
      }

      return res.status(200).json(result);
    }
  );
}

module.exports = { getContent };
