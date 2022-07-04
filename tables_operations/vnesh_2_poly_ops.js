var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshPoly2() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_2_полиграф');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPoly2Pages() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct pages from внешн_2_полиграф');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


async function getVneshPoly2TotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_2_полиграф where pages = '${values['pages']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshPoly2 : getVneshPoly2,
    getVneshPoly2Pages : getVneshPoly2Pages,
    getVneshPoly2TotalPrice : getVneshPoly2TotalPrice
}