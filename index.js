const express = require ('express')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use('/',indexRouter)
app.use('/users',userRouter)


app.listen(PORT,()=>console.log('server listening'+PORT))