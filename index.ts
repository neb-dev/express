import express from 'express'
import dotenv from 'dotenv'
import attendeeRouter from './routes/attendee.routes'

dotenv.config()
export const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(attendeeRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
