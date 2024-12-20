//Importar las variables de entorno
import { config } from "dotenv"
config('../.env')

const MyConfig = {
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '12345',
        database: process.env.MYSQL_DB || 'itj_Escolares'
    }
}

export default MyConfig