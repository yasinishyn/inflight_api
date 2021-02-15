import Router from 'koa-router';
import flights from '../controllers/flights.controller';

const router = new Router({
  prefix: '/flights',
});

router.get(
  '/',
  flights.all,
);

router.post(
  '/',
  flights.create,
);

router.put(
  '/:id',
  flights.update,
);

router.del(
  '/:id',
  flights.del,
);

// for require auto in index.js
module.exports = router;
