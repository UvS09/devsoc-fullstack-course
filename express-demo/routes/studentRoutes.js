const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get all students')
})

router.post('/', (req, res) => {
  res.send('Add a new student')
})

router.delete('/:id', (req, res) => {
  res.send(`Delete student with ID ${req.params.id}`)
})

module.exports = router