import express, { json, urlencoded } from 'express'
import { mongoConection } from './DataBase/dbConnetion.js'
import dotenv from 'dotenv'





// insure that the .env file is loaded before using any environment variables
// all the important data will be stored in the .env file
dotenv.config()
// create an instance of express
const app = express()
const port = 3000
// parse incoming JSON requests
app.use(json())
// parse incoming URL-encoded requests
app.use(urlencoded({ extended: true }))
// connect to the MongoDB database
mongoConection()





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))