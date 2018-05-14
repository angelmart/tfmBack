import { expect } from 'chai';
import request = require('supertest');

describe('Hotel Controller', () => {
  const port: string = '3000';
  const peticion = request.agent('http://localhost:' + port);

  it('GET /hoteles', (done) => {
    peticion.get('/hoteles')
      .end((err, res) => {
        expect('NH Madrid').to.equal(res.body[0].nombre);
        done();
      });
  });

  it('GET /hoteles/:id', (done) => {
    peticion.get('/hoteles/5ae0692ca0cfa91894ae5c58')
      .end((err, res) => {
        expect('NH Madrid').to.equal(res.body.nombre);
        done();
      });
  });
});
