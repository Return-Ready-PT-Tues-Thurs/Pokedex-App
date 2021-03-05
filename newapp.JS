const express = require('express')
	let mysql = require('mysql');
	// const app = express()
	const port = 3000





let con = mysql = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: " ",
    database:"pokedex"
})








con.connect(err => {
    if(err){
        throw err;
    }
    con.query("SELECT * FROM pokeman", (err, result, fields) => {
        if(err){
            throw err;
        }
        console.log(result)
        console.log(`INSERT INTO pokemon (ID, NAME, IMAGE) VALUES(${ID}, ${NAME}, ${IMAGE})`)
    })
});
