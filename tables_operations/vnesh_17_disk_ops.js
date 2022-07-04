var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshDisk() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_17_запись_на_диск');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshDiskPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_17_запись_на_диск`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshDisk : getVneshDisk,
    getVneshDiskPrice : getVneshDiskPrice
}