const express = require('express');
const router = express.Router();


const controller1 = require('../controllers/blogController');
const controller2 = require('../controllers/commentController');
const controller3 = require('../controllers/messageController')
const controller4 = require('../controllers/portfolioController')
const controller5 = require('../controllers/productController')





router.get('/endpoint1', controller1.create1);
router.get('/endpoint2', controller1.read1);
router.get('/endpoint3', controller1.delete1);
router.get('/endpoint4', controller1.update1);

router.get('/endpoint5', controller2.create2);
router.get('/endpoint6', controller2.read2);
router.get('/endpoint7', controller2.delete2);
router.get('/endpoint8', controller2.update2);

router.get('/endpoint9', controller3.create3);
router.get('/endpoint10', controller3.read3);
router.get('/endpoint11', controller3.delete3);
router.get('/endpoint12', controller3.update3);

router.get('/endpoint13', controller4.create4);
router.get('/endpoint14', controller4.read4);
router.get('/endpoint15', controller4.delete4);
router.get('/endpoint16', controller4.update4);

router.get('/endpoint17', controller5.create5);
router.get('/endpoint18', controller5.read5);
router.get('/endpoint19', controller5.delete5);
router.get('//endpoint20', controller5.update5);



module.exports = router;
