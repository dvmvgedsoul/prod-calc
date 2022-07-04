var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrBrochure() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_413_брошюры');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBrochureFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_413_брошюры");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBrochurePages() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct pages from подр_413_брошюры");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBrochurePrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_413_брошюры where format = '${values['format']}'
            and pages = '${values['pages']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrBrochure : getPodrBrochure,
    getPodrBrochureFormat : getPodrBrochureFormat,
    getPodrBrochurePages : getPodrBrochurePages,
    getPodrBrochurePrice : getPodrBrochurePrice
}