var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrStud() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_47_студбилет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrStudFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_47_студбилет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrStudMaxQty() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct quantity from подр_47_студбилет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrStudPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_47_студбилет where format = '${values['format']}'
            and quantity = '${values['quantity']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrStud : getPodrStud,
    getPodrStudFormat : getPodrStudFormat,
    getPodrStudMaxQty : getPodrStudMaxQty,
    getPodrStudPrice : getPodrStudPrice
}