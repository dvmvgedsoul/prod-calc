var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrTvperepl() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_56_тв_переплет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTvpereplFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_56_тв_переплет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTvpereplPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_56_тв_переплет where format = '${values['format']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrTvperepl : getPodrTvperepl,
    getPodrTvpereplFormat : getPodrTvpereplFormat,
    getPodrTvpereplPrice : getPodrTvpereplPrice
}