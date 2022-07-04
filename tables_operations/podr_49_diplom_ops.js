var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrDiplom() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_49_облдиплома');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrDiplomFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_49_облдиплома");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrDiplomEndpaper() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct endpaper from подр_49_облдиплома");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrDiplomPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_49_облдиплома where format = '${values['format']}'
            and endpaper = '${values['endpaper']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrDiplom : getPodrDiplom,
    getPodrDiplomFormat : getPodrDiplomFormat,
    getPodrDiplomEndpaper : getPodrDiplomEndpaper,
    getPodrDiplomPrice : getPodrDiplomPrice
}