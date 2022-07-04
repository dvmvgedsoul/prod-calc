var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrBloknot() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_45_блокнот');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBloknotFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_45_блокнот");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBloknotPaper() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct clear_paper from подр_45_блокнот");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getPodrBloknotSide() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct short_side from подр_45_блокнот");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrBloknotPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_45_блокнот where format = '${values['format']}'
            and clear_paper = '${values['clear_paper']}' and short_side = '${values['short_side']}'  `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrBloknot : getPodrBloknot,
    getPodrBloknotFormat : getPodrBloknotFormat,
    getPodrBloknotPaper : getPodrBloknotPaper,
    getPodrBloknotSide : getPodrBloknotSide,
    getPodrBloknotPrice : getPodrBloknotPrice
}