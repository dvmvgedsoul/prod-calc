var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrPFB() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_51_подб_фальц_биг');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPFBOperation() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct operation from подр_51_подб_фальц_биг");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPFBPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_51_подб_фальц_биг where operation = '${values['operation']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrPFB : getPodrPFB,
    getPodrPFBOperation : getPodrPFBOperation,
    getPodrPFBPrice : getPodrPFBPrice
}