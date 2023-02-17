// requiring router from express
const router = require('express').Router();
const apiRoutes = require('./api');
// routing all routes throug /api
router.use('/api', apiRoutes);
// sends an error message if wrong route is typed in
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
// exporting the router
module.exports = router;