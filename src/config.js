import { config } from 'dotenv'

config()

//
// Asignar variables de entorno a constantes
//

// Por defecto usa el puerto 3000
export const PORT = process.env.PORT || 3000

// Database config
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DATABASE = process.env.DB_DATABASE
