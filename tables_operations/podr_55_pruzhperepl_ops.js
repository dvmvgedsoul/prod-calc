var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrPruzhperepl() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_55_пруж_переплет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPruzhpereplFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_55_пруж_переплет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPruzhpereplPages() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct pages from подр_55_пруж_переплет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPruzhpereplPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_55_пруж_переплет where format = '${values['format']}'
            and pages = '${values['pages']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrPruzhperepl : getPodrPruzhperepl,
    getPodrPruzhpereplFormat : getPodrPruzhpereplFormat,
    getPodrPruzhpereplPages : getPodrPruzhpereplPages,
    getPodrPruzhpereplPrice : getPodrPruzhpereplPrice
}