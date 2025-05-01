import express from 'express'
import attendeeRouter from './routes/attendee.routes'
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(attendeeRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
