var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshPozdr() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_18_поздрав_адрес');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPozdrPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_18_поздрав_адрес`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshPozdr : getVneshPozdr,
    getVneshPozdrPrice : getVneshPozdrPrice
}