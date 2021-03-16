const express= require('express')
const app =express()
const port = 5000

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))



app.get('',(req ,res) => {
    res.sendFile(__dirname + '/view/card.html')
})


app.listen(port,() => console.info('Listening on port  ${port}'))