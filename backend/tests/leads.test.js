
const request = require('supertest');
const app = require('../src/app');
describe('Ping', () => {
  it('responds to ping', async () => {
    const res = await request(app).get('/api/v1/ping');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
