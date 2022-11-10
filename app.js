const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

let users = [
    {
        fname: 'Alex', lname: 'Marin', age: 45
    },
    {
        fname: 'Leo', lname: 'Messi', age: 34
    }
]

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/user', (req, res) => {
    res.render('user', {
        name: 'Alex'
    })
})

app.get('/users', (req, res) => {
    res.render('users', {
        users: users
    })
})