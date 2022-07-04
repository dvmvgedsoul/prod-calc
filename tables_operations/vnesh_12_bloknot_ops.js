var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshBloknot() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_12_блокнот');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshBloknotFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from внешн_12_блокнот");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshBloknotPaper() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct clear_paper from внешн_12_блокнот");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshBloknotSide() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct short_side from внешн_12_блокнот");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshBloknotPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_12_блокнот where format = '${values['format']}'
            and clear_paper = '${values['clear_paper']}' and short_side = '${values['short_side']}'  `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshBloknot : getVneshBloknot,
    getVneshBloknotFormat : getVneshBloknotFormat,
    getVneshBloknotPaper : getVneshBloknotPaper,
    getVneshBloknotSide : getVneshBloknotSide,
    getVneshBloknotPrice : getVneshBloknotPrice
}