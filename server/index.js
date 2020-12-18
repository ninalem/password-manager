import express from 'express'
import { getConnection } from './db/mongo-client.js'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

getConnection()
  .then(async () => {
    app.listen(port, () =>
      console.log(`passManager app listening at http://localhost:${port}`)
    )
  })
  .catch((error) => console.error(error))
