var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshTvpereplB7() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_5_тв_переплет_книги_б7');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshTvpereplB7Format() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct format from внешн_5_тв_переплет_книги_б7');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshTvpereplB7TotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_5_тв_переплет_книги_б7 where format = '${values['format']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshTvpereplB7 : getVneshTvpereplB7,
    getVneshTvpereplB7Format : getVneshTvpereplB7Format,
    getVneshTvpereplB7TotalPrice : getVneshTvpereplB7TotalPrice
}