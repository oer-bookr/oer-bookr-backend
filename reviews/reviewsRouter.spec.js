// const request = require("supertest");

// const db = require("../data/dbConfig.js");

// const server = require("../api/server.js");

// afterEach(async () => {
//   await db("reviews").truncate();
// });

// describe("server.js", async () => {
//   describe("GET /reviews endpoint", async () => {
//     it("should respond with status code 200", async () => {
//       const response = await request(server).get("/reviews");
//       expect(response.status).toBe(200);
//     });

//     it("should respond with JSON object", async () => {
//       const response = await request(server).get("/reviews");
//       expect(response.type).toBe("application/json");
//     });

//     it("should respond with an array", async () => {
//       const response = await request(server).get("/reviews");
//       expect(Array.isArray(response.body)).toBe(true);
//     });
//   });

//   describe("POST /reviews endpoint", () => {
//     it("should post to server & respond with 201 status code", async () => {
//       const body = {
//         book_id: 1,
//         reviewer: "Test Reviewer",
//         review: "Test Review",
//         rating: 5
//       };

//       let response = await request(server)
//         .post("/reviews")
//         .send(body);
//       expect(response.body).toEqual([1]);
//       expect(response.status).toBe(201);
//     });

//     it("should fail & respond with 422 status code", async () => {
//       const body = {
//         book_id: 1,
//         reviewer: "Test Reviewer"
//       };

//       let response = await request(server)
//         .post("/reviews")
//         .send(body);

//       expect(response.status).toBe(422);
//     });

//     it("should respond with JSON object", async () => {
//       let response = await request(server)
//         .post("/reviews")
//         .send({
//           book_id: 1,
//           reviewer: "Test Reviewer",
//           review: "Test Review",
//           rating: 5
//         });
//       expect(response.type).toBe("application/json");
//     });
//   });

//   describe("DELETE /reviews/:id endpoint", async () => {
//     it("should respond with status code 200", async () => {
//       const response = await request(server).get("/reviews/:id");
//       expect(response.status).toBe(200);
//     });

//     it("should respond with JSON object", async () => {
//       const response = await request(server).get("/reviews/:id");
//       expect(response.type).toBe("application/json");
//     });

//     it("should respond with count", async () => {
//       const response = await request(server).get("/reviews/:id");
//       expect(response.body).toEqual(1);
//     });
//   });
// });
