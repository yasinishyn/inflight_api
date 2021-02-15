import Flight from '../models/flight.model';

/**
 * path: /flights/
 *
 * method: GET
 *
 * Fetches all flights
 * Auth: Public
 *
 * @return {Object} ctx.body
 */
const all = async (ctx) => {
  const rows = await Flight.find({});
  ctx.body = { status: 'success', data: rows };
};

/**
 * path: /flights/
 *
 * method: POST
 *
 * Creates a new flight
 *
 * Auth: Protected
 * Role: any
 *
 * @param  {Object} ctx.request.body.flightParams allowed flight params
 *
 * @return {Object} ctx.body
 */
const create = async (ctx) => {
  const { flightParams } = ctx.request.body;

  const flight = new Flight(flightParams);
  const error = flight.validateSync();

  if (error) {
    ctx.body = { status: 400, data: { error } };
  } else {
    await flight.save();
    ctx.body = { status: 'success', data: flight };
  }
};

/**
 * path: /flights/:id
 *
 * method: PUT
 *
 * Updates existing flight
 *
 * Auth: Protected
 * Role: any
 *
 * @param  {String} ctx.params.id id string stored in DB
 *
 * @param  {Object} ctx.request.body.flightParams allowed flight params
 *
 * @return {Object} ctx.body
 */
const update = async (ctx) => {
  const { id } = ctx.params;
  const { flightParams } = ctx.request.body;

  try {
    await Flight.updateOne({ _id: id }, flightParams, { upsert: true, runValidators: true });
    const flight = await Flight.findOne({ _id: id });
    ctx.body = { status: 'success', data: flight };
  } catch (error) {
    ctx.body = { status: 400, data: error };
  }
};

/**
 * path: /flights/:id
 *
 * method: DELETE
 *
 * Deletes existing flight
 *
 * Auth: Protected
 * Role: any
 *
 * @param  {String} ctx.params.id id string stored in DB
 *
 * @return {Object} ctx.body
 */
const del = async (ctx) => {
  const { id } = ctx.params;

  const deleted = await Flight.deleteOne({ _id: id });

  if (deleted.deletedCount) {
    ctx.body = { status: 'success', data: { _id: id } };
  } else {
    ctx.body = { status: 404, data: { _id: id } };
  }
};

export default {
  all,
  create,
  update,
  del,
};
