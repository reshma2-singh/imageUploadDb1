import './config.js'
import express from "express"
import { fileURLToPath, URL } from 'url'
import imageRouter from './routes/file-upload-routes.js';
import cors from 'cors'
import path, { dirname } from 'path';
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})
app.use(cors())
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use('/api', imageRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
export default app;