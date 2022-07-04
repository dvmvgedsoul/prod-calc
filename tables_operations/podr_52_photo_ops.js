var config = require('../dbconfig');
const sql = require('mssql');

sql.on("error", error => {
    console.log(error.message);
})

async function getPodrPhoto() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from подр_52_фотопечать');
        sql.close();
        return result.recordsets;        
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPhotoFormat() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct format from подр_52_фотопечать");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPhotoType() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query("select distinct type from подр_52_фотопечать");
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}

async function getPodrPhotoPrice(values) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query(`select price from подр_52_фотопечать where format = '${values['format']}'
            and type = '${values['type']}' `);
        sql.close();
        return result.recordsets;
    } catch (error) {
        console.log(error.message);
        sql.close();
    }
}


module.exports = {
    getPodrPhoto : getPodrPhoto,
    getPodrPhotoFormat : getPodrPhotoFormat,
    getPodrPhotoType : getPodrPhotoType,
    getPodrPhotoPrice : getPodrPhotoPrice
}