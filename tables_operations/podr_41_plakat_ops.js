var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrPlakat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_41_плакат');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPlakatFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_41_плакат");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPlakatColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from подр_41_плакат");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPlakatPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_41_плакат where format = '${values['format']}'
            and color = '${values['color']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrPlakat : getPodrPlakat,
    getPodrPlakatFormat : getPodrPlakatFormat,
    getPodrPlakatColor : getPodrPlakatColor,
    getPodrPlakatPrice : getPodrPlakatPrice
}