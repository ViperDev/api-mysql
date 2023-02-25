import express from 'express'
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'

// Inicializa la aplicación
const app = express()

// Aceptar json en peticiones http
app.use(express.json())

// Rutas registradas
app.use('/api', indexRoutes)
app.use('/api', employeesRoutes)

// Control de rutas que no existen
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint Not Found' })
})

export default app
