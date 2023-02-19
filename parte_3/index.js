const express = require('express')
const app = express()

app.use(express.json())

let notes = [
    {
        "id":1,
        "content": "Tengo que estudiar las clases",
        "date": "2023-01-01T18:39:23,091Z",
        "important": false
    },
    {
        "id":2,
        "content": "2do nose quje decias",
        "date": "2023-01-04T18:39:23,091Z",
        "important": true
    },
    {
        "id":3,
        "content": "Raposdia abomenia",
        "date": "2023-01-01T11:59:23,091Z",
        "important": false
    }
]

//const http = require('http')

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(notes))
// })

app.get('/', (request, response) => {
    response.send('<h1> Hello World </h1>')
})

app.get('/notes', (request, response) => {
    response.json(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = request.params.id
    console.log({id})
    const note = notes.filter(note => note.id.toString() === id.toString())
    console.log({note})

    if (note.length > 0) {
        response.send(note)
    } else {
        response.status(404).end()
    }
    
})

app.delete('/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id.toString() !== id.toString())
    response.status(204).end()
})

app.post('/notes', (request, response) =>{
    const note = request.body

    if (!note || !note.content){
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }
    
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== undefined ? note.important : false,
        date: new Date().toISOString() 
    }

    notes = [...notes, newNote]

    response.json(newNote)
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})
