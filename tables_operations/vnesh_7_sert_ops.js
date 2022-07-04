var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshSert() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_7_сертификат');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshSertTotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('select full_price as price from внешн_7_сертификат');
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshSert : getVneshSert,
    getVneshSertTotalPrice : getVneshSertTotalPrice
}