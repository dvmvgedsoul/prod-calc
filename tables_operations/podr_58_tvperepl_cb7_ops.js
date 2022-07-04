var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrTvpereplCB7() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_58_тв_переплет_книги_цб7');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTvpereplCB7Format() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_58_тв_переплет_книги_цб7");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTvpereplCB7Price(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_58_тв_переплет_книги_цб7 where format = '${values['format']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrTvpereplCB7 : getPodrTvpereplCB7,
    getPodrTvpereplCB7Format : getPodrTvpereplCB7Format,
    getPodrTvpereplCB7Price : getPodrTvpereplCB7Price
}