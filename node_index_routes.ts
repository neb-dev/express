import { IncomingMessage, ServerResponse } from 'http'

export const nodeIndexRoutes = (req: IncomingMessage, res: ServerResponse) => {
  const path = req.url || '/'
  if (path === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    return res.end(`
      <html>
        <body>
          <div>
            <h2>Send a word!</h2>
          </div>
          <div>
            <form action="/word" method="POST">
              <input type="text" name="word" placeholder="Enter a word" />
              <input type="submit" value="Send" />              
            </form>
          </div>
        </body>
      </html>
    `)
  }
  if (path === '/word' && req.method === 'POST') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      const word = new URLSearchParams(body).get('word')
      res.writeHead(200, { 'content-type': 'text/html' })
      return res.end(`
        <html>
          <body>
            <div>
              <h2>Received word: ${word}</h2>
            </div>
            <div>
              <a href="/">Go back</a>
            </div>
          </body>
        </html>
      `)
    })
  }
}
