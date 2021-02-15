import faker from 'faker';

import Flight from '../../app/models/flight.model';

/**
 * Generate an object which container attributes needed
 * to successfully create a flight instance.
 *
 * @param  {Object} props Properties to use for the flight.
 *
 * @return {Object}       An object to build the flight from.
 */
const flightData = async (props = {}) => {
  const defaultProps = {
    status: 'SCHEDULED',
    flightCode: faker.finance.currencyCode(),
    flightProvider: faker.company.companyName(),
    sourcePortName: faker.company.companyName(),
    sourcePortCode: faker.finance.currencyCode(),
    destinationPortName: faker.address.countryCode(),
    destinationPortCode: faker.finance.currencyCode(),
    scheduledArrival: faker.date.future(),
    scheduledDeparture: faker.date.future(),
    terminal: faker.finance.currencyCode(),
  };
  return Object.assign({}, defaultProps, props);
};

/**
 * Generates a flight instance from the properties provided.
 *
 * @param  {Object} props Properties to use for the flight.
 *
 * @return {Object}       A flight instance
 */
const flightFactory = async(props = {}) => Flight.create(await flightData(props));

export {
  flightFactory,
  flightData,
};
