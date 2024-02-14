const express = require('express');
const cors = require('cors');
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1756215",
  key: "f2ed774ee6015e734829",
  secret: "fcb075e0aeb976d76f53",
  cluster: "eu",
  useTLS: true
});

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8081', 'http://localhost:8000']
}));

app.use(express.json());

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
});

console.log('Listening on port 8000');
app.listen(8000);
