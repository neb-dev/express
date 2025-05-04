import request from 'supertest'
import { app } from '../index'

describe('GET /', () => {
  it('should return a list of attendees', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json'),
    )
    expect(response.body).toHaveProperty('attendees')
    expect(response.body.attendees).toBeInstanceOf(Array)
  })
})
