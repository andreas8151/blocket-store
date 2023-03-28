const pool = require("../../server");
function addFriend(req, res) {
  const { friend } = req.body;
  const userId = req.userId;

  if (!friend) {
    res.status(400).send("Friend parameter is required.");
    return;
  }

  const friendSql = "SELECT id FROM users WHERE username = ?";

  pool.execute(friendSql, [friend], (err, friendResult) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    }
    if (friendResult.length === 0) {
      res.status(400).send("user not found");
      return;
    }

    const friendId = friendResult[0].id;

    if (userId === friendId) {
      res.status(400).send("Cannot add self as friend");
      return;
    }

    const existingFriendSql =
      "SELECT * FROM friends WHERE user_id = ? AND friend_id = ?";
    pool.execute(
      existingFriendSql,
      [userId, friendId],
      (err, existingFriendResult) => {
        if (err) {
          res.status(500).json({ error: "Error in server: " + err });
        }
        if (existingFriendResult.length > 0) {
          return res.status(400).send("Friendship already exists");
        }

        const sql = "INSERT INTO friends (user_id, friend_id) VALUES (?, ?)";

        pool.execute(sql, [userId, friendId], (err, result) => {
          if (err) {
            res.status(500).json({ error: "Error in server: " + err });
            return;
          }
          if (result.affectedRows > 0) {
            res.status(201).send("Friend Added");
          }
        });
      }
    );
  });
}

module.exports = { addFriend };
