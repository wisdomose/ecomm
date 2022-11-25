import { app } from "../createServer";
import request from "supertest";

describe("Test the health route", () => {
  test("It should response the GET method", () => {
    return request(app).get("/health").expect(200);
  });
});
