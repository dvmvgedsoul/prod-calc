var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshPoly1() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_1_полиграф');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPoly1TotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('select full_price as price from внешн_1_полиграф');
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshPoly1 : getVneshPoly1,
    getVneshPoly1TotalPrice : getVneshPoly1TotalPrice
}