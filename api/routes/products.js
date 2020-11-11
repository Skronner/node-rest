const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
    //console.log('Received GET requests to /products.');
});

router.get('/:productId',(req, res, next)=>{
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
    console.log('Received GET requests to /products.');
});

router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
    console.log('Received POST requests to /products.');
});

router.patch('/:productId',(req, res, next)=>{
    const id = req.params.productId;    
        res.status(200).json({
            message: 'Updated product!',
            id: id    
    });    
    console.log('Received PATCH requests to /products.');
});

router.delete('/:productId',(req, res, next)=>{
    const id = req.params.productId;    
        res.status(200).json({
            message: 'Deleted product!',
            id: id    
    });    
    console.log('Received DELETE requests to /products.');
});

module.exports = router;