const express = require("express");
const User = require("./model");
const router = express.Router();

router.post("/adduser", async (req, res) => {
  const { username, email } = req.body;
  if (!username || !email || username.trim() === "" || email.trim() === "")
    return res.json({ error: "Both Email and Username are required" });

  const UserWithSameEmail = await User.findOne({ email });
  console.log({ UserWithSameEmail });
  if (UserWithSameEmail)
    return res.json({ error: "User with this Email already Exists" });

  const newUser = new User({ username, email });
  return newUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});
module.exports = router;
