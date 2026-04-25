const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
let users = [];
app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "user added successfully", data: user });
});

app.get("/api/users", (req, res) => {
  res.json({ message: "users retrieved successfully", data: users });
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.json(user);
});

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json({ message: "user updated", data: users });
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);

  res.json({
    message: "User deleted",
    data: users,
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});