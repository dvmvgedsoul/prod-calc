var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrKalendar() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_411_календарь');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrKalendarType() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct calendar_type from подр_411_календарь");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrKalendarPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_411_календарь where calendar_type = '${values['calendar_type']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrKalendar : getPodrKalendar,
    getPodrKalendarType : getPodrKalendarType,
    getPodrKalendarPrice : getPodrKalendarPrice
}