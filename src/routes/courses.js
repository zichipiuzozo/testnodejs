const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.get('/:id/edit', courseController.edit)
router.patch('/:id/restore', courseController.restore)
router.put('/:id', courseController.update)
router.delete('/:id', courseController.destroy)
router.get('/:slug', courseController.show)
router.post('/store', courseController.store)

module.exports = router
