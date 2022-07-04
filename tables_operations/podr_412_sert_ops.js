var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrSert() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_412_сертификат');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrSertType() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct cert_type from подр_412_сертификат");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrSertPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_412_сертификат where cert_type = '${values['cert_type']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrSert : getPodrSert,
    getPodrSertType : getPodrSertType,
    getPodrSertPrice : getPodrSertPrice
}