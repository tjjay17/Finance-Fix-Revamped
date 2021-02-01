const bcrypt = require('bcrypt');

exports.register = (req,res) =>{
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    let password = req.body.password;

    res.send(first,last,email,password);
    //****Note to self ****
    //This is where I shall setup a database and setup a way to hash passwords

    // bcrypt.hash(password,15)
    //     .then(hash =>{
    //         //presumable store the hash.
    //         console.log(hash);
    //         res.send('success');
    //     })
    //     .catch(e => {
    //         console.log(e);
    //         res.send(500);
    //     });
}

exports.login = (req,res) =>{
    let email = req.body.email;
    let password = req.body.password;
    res.send({email:email,password:password});
    //database work goes in here.
}