var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getVneshPhoto() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from внешн_11_фотопечать');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPhotoFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct format from внешн_11_фотопечать');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPhotoType() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select distinct type from внешн_11_фотопечать');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getVneshPhotoTotalPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select full_price as price from внешн_11_фотопечать where format = '${values['format']}'
            and type = '${values['type']}'`);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getVneshPhoto : getVneshPhoto,
    getVneshPhotoFormat : getVneshPhotoFormat,
    getVneshPhotoType : getVneshPhotoType,
    getVneshPhotoTotalPrice : getVneshPhotoTotalPrice
}