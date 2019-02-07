// const request = require("supertest");

// const db = require("../data/dbConfig.js");

// const server = require("../api/server.js");

// afterEach(async () => {
//   await db("books").truncate();
// });

// describe("server.js", async () => {
//   describe("GET /books endpoint", async () => {
//     it("should respond with status code 200", async () => {
//       const response = await request(server).get("/books");
//       expect(response.status).toBe(200);
//     });

//     it("should respond with JSON object", async () => {
//       const response = await request(server).get("/books");
//       expect(response.type).toBe("application/json");
//     });

//     it("should respond with an array", async () => {
//       const response = await request(server).get("/books");
//       expect(Array.isArray(response.body)).toBe(true);
//     });
//   });

//   describe("POST /books endpoint", () => {
//     it("should post to server & respond with 201 status code", async () => {
//       const body = {
//         title: "Damnation (Karhozat)",
//         author: "Maggy Earle",
//         publisher: "Ingunna Bartram",
//         license: "S0421XA",
//         subject: "Drama|Film-Noir",
//         image: "http://dummyimage.com/121x198.bmp/ff4444/ffffff",
//         link: "http://yahoo.co.jp/venenatis/tristique/fusce/congue.json"
//       };

//       let response = await request(server)
//         .post("/books")
//         .send(body);
//       expect(response.body).toEqual([1]);
//       expect(response.status).toBe(201);
//     });

//     it("should fail & respond with 422 status code", async () => {
//       const body = {
//         title: "Damnation (Karhozat)",
//         author: "Maggy Earle",
//         publisher: "Ingunna Bartram",
//         license: "S0421XA",
//         subject: "Drama|Film-Noir"
//       };

//       let response = await request(server)
//         .post("/books")
//         .send(body);

//       expect(response.status).toBe(422);
//     });

//     it("should respond with JSON object", async () => {
//       let response = await request(server)
//         .post("/books")
//         .send({
//           title: "Damnation (Karhozat)",
//           author: "Maggy Earle",
//           publisher: "Ingunna Bartram",
//           license: "S0421XA",
//           subject: "Drama|Film-Noir",
//           image: "http://dummyimage.com/121x198.bmp/ff4444/ffffff",
//           link: "http://yahoo.co.jp/venenatis/tristique/fusce/congue.json"
//         });
//       expect(response.type).toBe("application/json");
//     });
//   });

//   describe("DELETE /books/:id endpoint", async () => {
//     it("should respond with status code 200", async () => {
//       const response = await request(server).get("/books/:id");
//       expect(response.status).toBe(200);
//     });

//     it("should respond with JSON object", async () => {
//       const response = await request(server).get("/books/:id");
//       expect(response.type).toBe("application/json");
//     });

//     it("should respond with count", async () => {
//       const response = await request(server).get("/books/:id");
//       expect(response.body).toEqual(1);
//     });
//   });
// });
