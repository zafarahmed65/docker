import { describe, it, afterAll, expect } from 'vitest';
import request from 'supertest';
import app from '../../app.js';

let currentRecordId = 0;

describe('basic test for api endpoints', () => {
  it('POST / should create a record', async () => {
    const response = await request(app).post('/').send({
      title: 'title',
      author: 1,
      publication: 'test',
    });
    expect(response.statusCode).toBe(200);
    currentRecordId = response.body.id;
  });

  it('GET /:id should get a record by id', async () => {
    const response = await request(app).get(`/${currentRecordId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(currentRecordId);
  });

  it('GET /publication/:publication should get a record by publication', async () => {
    const response = await request(app).get(`/publication/test`);
    expect(response.statusCode).toBe(200);
    expect(response.body[0].publication).toBe('test');
  });

  it('GET / should get all record', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('PATCH /:id should update a record by id', async () => {
    const response = await request(app).patch(`/${currentRecordId}`).send({
      title: 'title2',
      author: 2,
      publication: 'test',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(currentRecordId);
  });

  it('DELETE /:id should delete record by id', async () => {
    const response = await request(app).delete(`/${currentRecordId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(currentRecordId);
  });

  afterAll(async () => {
    const response = await request(app).delete('/publication/test');
    expect(response.statusCode).toBe(200);
  });
});
