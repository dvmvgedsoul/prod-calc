var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshBrochure() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_14_брошюра');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshBrochurePages() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct pages from внешн_14_брошюра");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshBrochurePrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_14_брошюра where pages = '${values['pages']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshBrochure : getVneshBrochure,
    getVneshBrochurePages : getVneshBrochurePages,
    getVneshBrochurePrice : getVneshBrochurePrice
}