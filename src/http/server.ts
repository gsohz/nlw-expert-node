import fastify from 'fastify'

const app = fastify()

app.post('/polls', () => {})

app.get('/polls/:id', () => {})

app.post('/polls/:id/votes', () => {})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server running')
})
