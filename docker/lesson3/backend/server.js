const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = 5000;

// Logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// PostgreSQL Client
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Database connection error:", err));

app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    service: "backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/message", async (req, res) => {
  try {
    const result = await client.query(
      "SELECT message FROM messages LIMIT 1"
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});