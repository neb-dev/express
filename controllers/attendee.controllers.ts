import { Request, Response } from 'express'

export const getAttendees = async (req: Request, res: Response) => {
  res.status(200).json({
    attendees: [
      'Conjurus Rex',
      'Uthur Lightbringer',
      'Grom Hellscream',
      'Gar Doomforge',
      'Illidan Stormrage',
      'Kael Thas Sunstrider',
    ],
  })
}

export const createAttendee = async (req: Request, res: Response) => {
  const { name } = req.body
  res.status(201).json({
    message: `Attendee ${name} created successfully`,
  })
}
