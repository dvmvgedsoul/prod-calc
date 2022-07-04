var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshTvperepl() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_4_тв_переплет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshTvpereplFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct format from внешн_4_тв_переплет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshTvpereplTotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_4_тв_переплет where format = '${values['format']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshTvperepl : getVneshTvperepl,
    getVneshTvpereplFormat : getVneshTvpereplFormat,
    getVneshTvpereplTotalPrice : getVneshTvpereplTotalPrice
}