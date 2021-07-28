const express = require ('express');
const router = express.Router();

const verIndex = (req, res) => {
        res.render('admin');
    }

router.get('/', verIndex);
 module.exports = router;