import http from 'http'
import { nodeIndexRoutes } from './node_index_routes'

const app = http.createServer(nodeIndexRoutes)

app.listen(3000, () => {
  console.log('Node.js server is running on port 3000')
})
