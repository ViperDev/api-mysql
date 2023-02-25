import app from './app.js'
import { PORT } from './config.js' //Archivo de configuración

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
