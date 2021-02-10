const router = require ('express').Router();
const authController = require('./controllers/auth');
const plaidController = require('./controllers/plaid');

router.get('/', (req,res) => console.log('Test EndPoint'));
router.post('/register',authController.register);
router.post('/login', authController.login);
router.post('/verifytoken',authController.verifyToken);
router.post('/createlinktoken', plaidController.create_link_token);

module.exports = router;