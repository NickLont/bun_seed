import dotenv from 'dotenv'
import * as mongoose from 'mongoose'

dotenv.config({
  path: '../.env'
})
await mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.DB_URL}:27017/${process.env.MONGO_INITDB_DATABASE}?authSource=admin`)
  .then(
    () => { console.log('Database connected succesfully') }
  )
  .catch(
    e => {
      console.log('Error connecting to db: ', e)
    }
  )

const server = Bun.serve({
  // Optional port number - the default value is 3000
  port: process.env.PORT ?? 3000,
  // In development mode, Bun will surface errors in-browser with a built-in error page
  // By default, development mode is enabled unless NODE_ENV is production
  fetch (req: Request): Response | Promise<Response> {
    const url = new URL(req.url)
    if (url.pathname === '/') return new Response('Home page!')
    if (url.pathname === '/blog') return new Response('Blog!')

    return new Response('Fall back')
    // throw new Error('woops!')
  }
  // Enable TLS by passing in a value for key and cert; both are required to enable TLS
  // tls: {
  //     key: Bun.file("./key.pem"),
  //     cert: Bun.file("./cert.pem"),
  // }
  // hostname: "mydomain.com"
})

console.log(`Listening to PORT: ${server.port}`)
