var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrTvpereplB7() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_57_тв_переплет_книги_б7');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTvpereplB7Format() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_57_тв_переплет_книги_б7");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTvpereplB7Price(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_57_тв_переплет_книги_б7 where format = '${values['format']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrTvpereplB7 : getPodrTvpereplB7,
    getPodrTvpereplB7Format : getPodrTvpereplB7Format,
    getPodrTvpereplB7Price : getPodrTvpereplB7Price
}