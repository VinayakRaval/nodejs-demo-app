const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Health API
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "Elevate Labs Information Portal"
    });
});

module.exports = app;