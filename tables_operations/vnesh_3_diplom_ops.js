var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshDiplom() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_3_облдиплома');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshDiplomColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct color from внешн_3_облдиплома');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshDiplomTotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_3_облдиплома where color = '${values['color']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshDiplom : getVneshDiplom,
    getVneshDiplomColor : getVneshDiplomColor,
    getVneshDiplomTotalPrice : getVneshDiplomTotalPrice
}