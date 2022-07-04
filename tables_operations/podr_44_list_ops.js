var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrList() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_44_листовка');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrListFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_44_листовка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrListColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from подр_44_листовка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getPodrListWeight() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct weight from подр_44_листовка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrListPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_44_листовка where format = '${values['format']}'
            and weight = '${values['weight']}' and color = '${values['color']}'  `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrList : getPodrList,
    getPodrListFormat : getPodrListFormat,
    getPodrListColor : getPodrListColor,
    getPodrListWeight : getPodrListWeight,
    getPodrListPrice : getPodrListPrice
}