var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshTvpereplCB7() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_6_тв_переплет_книги_цб7');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshTvpereplCB7Format() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct format from внешн_6_тв_переплет_книги_цб7');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshTvpereplCB7TotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_6_тв_переплет_книги_цб7 where format = '${values['format']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshTvpereplCB7 : getVneshTvpereplCB7,
    getVneshTvpereplCB7Format : getVneshTvpereplCB7Format,
    getVneshTvpereplCB7TotalPrice : getVneshTvpereplCB7TotalPrice
}