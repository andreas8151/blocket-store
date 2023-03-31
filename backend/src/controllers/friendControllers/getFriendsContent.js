const pool = require("../../server");

function getFriendsContent(req, res) {
  const user_id = req.userId;

  pool.query(
    `
      SELECT c.filename, c.description
      FROM content c
      INNER JOIN friends f ON c.user_id = f.friend_id
      WHERE f.user_id = ?
      `,
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

module.exports = { getFriendsContent };
