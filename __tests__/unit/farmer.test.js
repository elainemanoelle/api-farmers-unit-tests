const request = require("supertest");

const app = require("../../src/app");

describe("Farmer", () => {

  it("should can't access the farmers route without any parameter", async () => {
    const response = await request(app).get('/farmers');

    expect(response.status).toBe(404);
  });

  it("should can access the farmers route", async () => {
    const param = 'silva'

    const response = await request(app).get(`/farmers/${param}`);
     
    expect(response.status).toBe(200);
  });

  it("should receive a empty array if no record match with the parameter passed", async () => {
    const param = 'elaine'

    const response = await request(app)
    .get(`/farmers/${param}`);

    expect([]);

  });

  it("shouldn't receive a empty array if any record match with the parameter passed", async () => {
    const param = 'silva'

    const response = await request(app).get(`/farmers/${param}`);
     
    expect(response.body).not.toBe([]);
  });

});
