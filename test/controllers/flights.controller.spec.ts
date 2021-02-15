import supertest from 'supertest';

import Flight from '../../app/models/flight.model';
import app from '../../app/index';
import { flightFactory, flightData } from '../factories/flights.factory';

const { expect } = require('chai');

const request = supertest.agent(app.listen());

describe('Flights Controllers', () => {
  /**
  * CREATE
  */
  describe('POST /flights', () => {
    describe('Valid Params', () => {
      it('should return 200', async () => {
        const data = await flightData();
        const res = await request.post('/flights').send({ flightParams: data });
        const flight = await Flight.findOne({ _id: res.body.data._id });

        expect(res.statusCode).to.equal(200);
        expect(flight).not.to.equal(null);
      });
    });
  });

  /**
  * READ
  */
  describe('GET index /flights', () => {
    it('should return 200', (done) => {
      request
        .get('/flights')
        .expect(200, done);
    });
  });

  /**
  * UPDATE
  */
  describe('PUT /flights/<id>', () => {
    let flight1;
    beforeEach(async () => {
        flight1 = await flightFactory();
    });

    describe('Valid Params', () => {
      it('should return 200', async() => {
        const res = await request.put(`/flights/${flight1._id}`)
          .send({ flightParams: { flightCode: 'XXX' } });
        expect(res.statusCode).to.equal(200);
        expect(res.body.data.flightCode).to.equal('XXX');
      });
    });
  });

  /**
  * DELETE
  */
  describe('DELETE /flights', () => {
    let flight1;
    beforeEach(async () => {
      flight1 = await flightFactory();
    });

    describe('Valid request', () => {
      it('should return 200', async () => {
        const res1 = await request.delete(`/flights/${flight1._id}`);
        const res2 = await request.get(`/flights/${res1.body.data._id}`);
        expect(res2.statusCode).to.equal(404);
      });
    });

    describe('404 Not Found', () => {
      it('should return 404', async() => {
        const res1 = await request.delete(`/flights/${flight1._id}`);
        const res2 = await request.get(`/flights/${res1.body.data._id}`);
        expect(res2.statusCode).to.equal(404);
      });
    });
  });
});
