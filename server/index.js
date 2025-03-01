require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors = require('cors')
const router = require('./rouds/index')
const errorHandler = require('./midlleware/ErrorHandlerMiddleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

//Обработка ошибки
app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync( )
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()