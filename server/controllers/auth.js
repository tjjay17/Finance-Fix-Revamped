const bcrypt = require('bcrypt');
const db = require('../DBconfig');
const constants = require('../Constants');

exports.register = (req,res) =>{
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    let password = req.body.password;

    // res.send(first,last,email,password);
    //****Note to self ****
    //This is where I shall setup a database and setup a way to hash passwords

    bcrypt.hash(password,15)
        .then(hash =>{
            db.pool.connect()
                .then(client =>{
                    let query = 'INSERT INTO Users (fName, lName, Email,Password) Values($1,$2,$3,$4)';
                    client.query(query,[first,last,email,hash])
                        .then(result => {
                            client.release();
                            res.send(result);
                        })
                        .catch(e =>{
                            client.release();
                            res.send(e);
                        });
                });
        })
        .catch(e => {
            console.log(e);
            res.send(e);
        });
}

exports.login = (req,res) =>{
    let email = req.body.email;
    let password = req.body.password;
    res.send({email:email,password:password});
    //database work goes in here.
}