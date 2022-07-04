var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshPechat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_19_распечатка');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPechatColor() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct color from внешн_19_распечатка");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPechatPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_19_распечатка where color = '${values['color']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshPechat : getVneshPechat,
    getVneshPechatColor : getVneshPechatColor,
    getVneshPechatPrice : getVneshPechatPrice
}