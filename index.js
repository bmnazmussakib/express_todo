const app = require("./app")
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const port = process.env.RUNNING_PORT || 3000



app.listen(port, () => {
    console.log('Server is running on port ' + port)
})