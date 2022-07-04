var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrZachet() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_46_зачкнижка');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrZachetFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_46_зачкнижка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrZachetMaxQty() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct quantity from подр_46_зачкнижка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrZachetPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_46_зачкнижка where format = '${values['format']}'
            and quantity = '${values['quantity']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrZachet : getPodrZachet,
    getPodrZachetFormat : getPodrZachetFormat,
    getPodrZachetMaxQty : getPodrZachetMaxQty,
    getPodrZachetPrice : getPodrZachetPrice
}