import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
});

app.post('/submit', async (c) => {
  const data = await c.req.json()
  console.log(data);
  return c.json({ message: 'Data received', data })
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
