const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");

const app = require("../app");

test("Health API should return healthy status", async () => {

    const server = http.createServer(app);

    await new Promise(resolve => {
        server.listen(0, resolve);
    });

    const port = server.address().port;

    const response = await fetch(
        `http://localhost:${port}/api/health`
    );

    const data = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.status, "healthy");

    await new Promise(resolve => {
        server.close(resolve);
    });
});