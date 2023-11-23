import { Server } from "http"
import app from "./app"
const PORT = 3000

let server: Server;

async function bootstrap () {
    try {
        
        server = app.listen(PORT)
        console.log(`Application listening on port ${PORT}`)
    } catch (error) {
        console.error(error)
    }
}

bootstrap()