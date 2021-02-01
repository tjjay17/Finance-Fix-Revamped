const router = require ('express').Router();
const authController = require('./controllers/auth');

router.get('/', (req,res) => console.log('Test EndPoint'));
router.post('/register',authController.register);
router.post('/login', authController.login);

module.exports = router;