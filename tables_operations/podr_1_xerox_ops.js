var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPaperXerox() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_1_печатьxerox');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperXeroxFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_1_печатьxerox");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperXeroxColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from подр_1_печатьxerox");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperXeroxBW() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct bw_paper from подр_1_печатьxerox");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperXeroxWeight() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct weight from подр_1_печатьxerox");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperXeroxPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_1_печатьxerox where format = '${values['format']}'
            and color = '${values['color']}' and bw_paper = '${values['bw_paper']}'  and weight = '${values['weight']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPaperXerox : getPaperXerox,
    getPaperXeroxFormat : getPaperXeroxFormat,
    getPaperXeroxColor : getPaperXeroxColor,
    getPaperXeroxBW : getPaperXeroxBW,
    getPaperXeroxWeight : getPaperXeroxWeight,
    getPaperXeroxPrice : getPaperXeroxPrice
}