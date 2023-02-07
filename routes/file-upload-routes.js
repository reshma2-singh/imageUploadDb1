'use strict'
import express from 'express'
import upload from '../helpers/filehelper.js'
import { singleFileUpload, getallSingleFiles, deleteProduct, getProductById, updateProduct } from "../controllers/fileuploaderController.js"
const router = express.Router();
router.post('/singleFile',upload.single('file'),singleFileUpload)
router.get('/getallSingleFiles', getallSingleFiles)
router.route('/:id').delete(deleteProduct)
router.route('/:id').get(getProductById).put(updateProduct)

export default router