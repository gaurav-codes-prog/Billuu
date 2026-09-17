import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = process.env.PORT || 3000
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.json())

const demoSchema = new mongoose.Schema({ name: String, email: String, restaurant: String, createdAt: { type: Date, default: Date.now } })
const DemoRequest = mongoose.models.DemoRequest || mongoose.model('DemoRequest', demoSchema)

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'Billuu API' }))
app.get('/api/features', (_req, res) => res.json({ features: ['Smart Billing', 'Kitchen Display', 'Inventory Control', 'Customer CRM', 'Live Analytics', 'BLU Rewards'] }))
app.post('/api/demo-requests', async (req, res) => {
  const { name, email, restaurant } = req.body || {}
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required.' })
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI)
    await DemoRequest.create({ name, email, restaurant })
  }
  res.status(201).json({ message: 'Demo request received.' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))
}

app.listen(port, () => console.log(`[v0] Billuu API running on port ${port}`))
