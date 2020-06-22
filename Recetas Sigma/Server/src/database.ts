import mysql from 'promise-mysql';
import keys from './keys';


const pool =mysql.createPool(keys.database); //realizar conexion con la BD


pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
    });

export default pool;

