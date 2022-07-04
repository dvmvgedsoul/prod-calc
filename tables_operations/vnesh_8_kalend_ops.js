var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshKalend() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_8_календарь');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshKalendType() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct type from внешн_8_календарь');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshKalendTotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_8_календарь where type = '${values['type']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshKalend : getVneshKalend,
    getVneshKalendType : getVneshKalendType,
    getVneshKalendTotalPrice : getVneshKalendTotalPrice
}