const request = require('supertest');
const app = require('../src/index');

describe('GET /api/allMovie', () => {
  it('should return 200 OK with JSON array of movies', async () => {
    const response = await request(app).get('/api/allMovie');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should return 200 OK with JSON array of 50 movies', async () => {
    const response = await request(app).get('/api/allMovie?limit=100');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toHaveLength(100);
  });

});
