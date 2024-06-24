const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET Request to /products'
  })
})

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST Request to /products'
  })
})

router.get('/:proudctId', (req, res, next) => {
  const id = req.params.proudctId
  if(id ==='special') {
    res.status(200).json({
      message: 'You discoverd the special id',
      id: id
    })
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    })
  }
})

router.patch('/:proudctId', (req, res, next) => {
  res.status(201).json({
    message: 'product was patched',
    id: req.params.proudctId
  })
})
router.delete('/:proudctId', (req, res, next) => {
  res.status(201).json({
    message: 'product was deleted',
    id: req.params.proudctId
  })
})
module.exports = router
