var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrRezka() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_53_резка');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrRezkaFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_53_резка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrRezkaWeight() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct weight from подр_53_резка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrRezkaPages() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct pages from подр_53_резка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrRezkaPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_53_резка where format = '${values['format']}'
            and weight = '${values['weight']}' and pages = '${values['pages']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrRezka : getPodrRezka,
    getPodrRezkaFormat : getPodrRezkaFormat,
    getPodrRezkaWeight : getPodrRezkaWeight,
    getPodrRezkaPages : getPodrRezkaPages,
    getPodrRezkaPrice : getPodrRezkaPrice
}