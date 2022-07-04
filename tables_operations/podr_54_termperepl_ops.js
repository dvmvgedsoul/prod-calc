var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrTermperepl() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_54_термопереплет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTermpereplFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_54_термопереплет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTermpereplPages() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct pages from подр_54_термопереплет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTermpereplPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_54_термопереплет where format = '${values['format']}'
            and pages = '${values['pages']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrTermperepl : getPodrTermperepl,
    getPodrTermpereplFormat : getPodrTermpereplFormat,
    getPodrTermpereplPages : getPodrTermpereplPages,
    getPodrTermpereplPrice : getPodrTermpereplPrice
}