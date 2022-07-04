var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshPotetr() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_16_потетр_шитье');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPotetrPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_16_потетр_шитье`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshPotetr : getVneshPotetr,
    getVneshPotetrPrice : getVneshPotetrPrice
}