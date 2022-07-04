var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrTirazh() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_3_тираж');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTirazhFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_3_тираж");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTirazhColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from подр_3_тираж");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTirazhPrintRun() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct print_run from подр_3_тираж");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTirazhBW() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct bw_paper from подр_3_тираж");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTirazhWeight() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct weight from подр_3_тираж");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrTirazhPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_3_тираж where format = '${values['format']}'
            and color = '${values['color']}' and print_run = '${values['print_run']}' 
            and bw_paper = '${values['bw_paper']}'  and weight = '${values['weight']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrTirazh : getPodrTirazh,
    getPodrTirazhFormat : getPodrTirazhFormat,
    getPodrTirazhColor : getPodrTirazhColor,
    getPodrTirazhPrintRun : getPodrTirazhPrintRun,
    getPodrTirazhBW : getPodrTirazhBW,
    getPodrTirazhWeight : getPodrTirazhWeight,
    getPodrTirazhPrice : getPodrTirazhPrice
}