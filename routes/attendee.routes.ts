import {
  createAttendee,
  getAttendees,
} from '../controllers/attendee.controllers'
import { Router } from 'express'

const attendeeRouter = Router()

attendeeRouter.get('/', getAttendees)
// attendeeRouter.get('/attendee/:id', getAttendee)
// attendeeRouter.put('/attendee/:id', updateAttendee),
// attendeeRouter.delete('/attendee/:id', deleteAttendee),
attendeeRouter.get('/create-attendee', (req, res) => {
  res.status(200).send(`
    <h1>Create Attendee</h1>
    <form action="/attendees" method="POST">
      <input type="text" name="name" placeholder="Name" required />
      <input type="submit" value="Create Attendee" />
    </form>`)
})
attendeeRouter.post('/attendee', createAttendee)

export default attendeeRouter
