var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPaperKonica() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_2_печатьkonica');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperKonicaFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_2_печатьkonica");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperKonicaColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from подр_2_печатьkonica");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperKonicaBW() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct bw_paper from подр_2_печатьkonica");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperKonicaWeight() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct weight from подр_2_печатьkonica");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPaperKonicaPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_2_печатьkonica where format = '${values['format']}'
            and color = '${values['color']}' and bw_paper = '${values['bw_paper']}'  and weight = '${values['weight']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPaperKonica : getPaperKonica,
    getPaperKonicaFormat : getPaperKonicaFormat,
    getPaperKonicaColor : getPaperKonicaColor,
    getPaperKonicaBW : getPaperKonicaBW,
    getPaperKonicaWeight : getPaperKonicaWeight,
    getPaperKonicaPrice : getPaperKonicaPrice
}