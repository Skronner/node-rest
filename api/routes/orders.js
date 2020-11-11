const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /orders'
    });
    //console.log('Received GET requests to /products.');
});

router.get('/:orderId',(req, res, next)=>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });    
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id: id
        });    
    }    
    console.log('Received GET requests to /orders.');
});

router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Handling POST requests to /orders'
    });
    console.log('Received POST requests to /orders.');
});

router.patch('/:orderId',(req, res, next)=>{
    const id = req.params.productId;    
        res.status(200).json({
            message: 'Updated order!',
            id: id    
    });    
    console.log('Received PATCH requests to /orders.');
});

router.delete('/:orderId',(req, res, next)=>{
    const id = req.params.productId;    
        res.status(200).json({
            message: 'Deleted order!',
            id: id    
    });    
    console.log('Received DELETE requests to /orders.');
});

module.exports = router;