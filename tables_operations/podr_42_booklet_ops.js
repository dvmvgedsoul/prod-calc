var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrBooklet() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_42_буклет');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBookletFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_42_буклет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBookletColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from подр_42_буклет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getPodrBookletWeight() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct weight from подр_42_буклет");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBookletPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_42_буклет where format = '${values['format']}'
            and weight = '${values['weight']}' and color = '${values['color']}'  `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrBooklet : getPodrBooklet,
    getPodrBookletFormat : getPodrBookletFormat,
    getPodrBookletColor : getPodrBookletColor,
    getPodrBookletWeight : getPodrBookletWeight,
    getPodrBookletPrice : getPodrBookletPrice
}