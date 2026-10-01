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

// Export app for testing
module.exports = app;

// Start server only when app.js is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Elevate Labs website running on port ${PORT}`);
    });
}