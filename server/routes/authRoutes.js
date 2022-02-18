const {Router} = require('express');
const {register_post, login_post, logout_get} = require('../controllers/authControllers.js');
const {jwtAuthentication, checkUser} = require('../middleware/authMiddleware.js');

const router = Router();

//main or home route
router.get('/', (req, res) => res.send("Hello from home"));

//register routes
router.get('/register', (req, res) => res.send("Hello from register"));
router.post('/register', register_post);

//login routes
router.get('/login', (req, res) => res.send("Hello from login"));
router.post('/login', login_post);

//logout route
router.get('/logout', logout_get, (req, res) => res.send("User logout successful!"));

module.exports = router;