const express = require("express");
const app = express();

const port = 5000;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { createMessage, getMessage } = require("./user");

app.get("/getmess", async (req, res) => {
  const list = await getMessage();
  res.json(list);
});

app.post("/addmessage", async (req, res) => {
  const result = req.body;
  await createMessage(result);
  res.json({
    message: "Message added successfully",
  });
});

app.listen(port, () => {
  console.log(`server is listening on port no ${port}`);
});
