const router = require ('express').Router();
const authController = require('./controllers/auth');

router.get('/', (req,res) => console.log('Test EndPoint'));
router.post('/register',authController.register);
router.post('/login', authController.login);
router.post('/verifytoken',authController.verifyToken);

module.exports = router;