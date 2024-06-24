const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message:'fetch orders'
  })
})

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message:'order details',
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message:'create order'
  })
})

router.patch('/:orderId', (req, res, next) => {
  res.status(201).json({
    message:'order updated',
    id: req.params.orderId
  })
})

router.delete('/:orderId', (req, res, next) => {
  res.status(201).json({
    message:'order deleted',
    id: req.params.orderId
  })
})

module.exports = router
