const express = require('express');
const router = express.Router();
const domain = require('./domain');

router.get('/', async (req, res) => {
    

    try {

        let data  = await domain.message(req.query)

        res.send({
            status : true,
            reason : "Successfully",
            code : 200,
            results : data
        })
        
    } catch (error) {
        
        res.send({
            status : false,
            reason : "Failed to load data",
            code : 400,
            results : null
        })
    }
})

module.exports = router