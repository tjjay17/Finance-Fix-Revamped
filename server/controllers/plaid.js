const plaid = require('plaid');
const constants = require('../Constants');
const db = require('../DBconfig');

const client = new plaid.Client({
    clientID: constants.PLAID_CLIENT,
    secret:constants.PLAID_SANDBOX,
    env:plaid.environments.sandbox
});

exports.create_link_token = async (req,res) =>{
    let email = req.body.email;
    try{
        const tokenResponse = await client.createLinkToken({
            user:{
                client_user_id:email
            },
            client_name:'Finance Fix',
            products:['transactions'],
            country_codes:['US','CA'],
            language:'en'
        });
        res.send({link_token:tokenResponse.link_token});
    }catch(e){
        res.send({error:e});
    }
}

exports.verifystatus = (req,res) =>{
    //this will check if the user already has an access token.
    //if they do, then we won't need to issue a plaid link as they are already connected.
    //otherwise, you issue plaid token => get access => so forth.
    let email = req.body.email;
    let query = 'SELECT * FROM plaid_tokens WHERE email = $1';
    db.pool.query(query,[email])
        .then(result =>{
            if(result.rows.length > 0){
                res.send({hasAccess:true})
            }else{
                res.send({hasAccess:false});
            }
        })
        .catch(e => res.send(e));
}

exports.get_access_token = async (req,res) =>{
    const LINK_TOKEN = req.body.link_token;
    const email = req.body.email;
    let query;
    try{
        const tokenResponse = await client.exchangePublicToken(LINK_TOKEN);
        query = 'INSERT INTO plaid_tokens (email,access_token) VALUES($1,$2)';
        db.pool.query(query, [email,tokenResponse.access_token])
            .then(res => res.sendStatus(200))
            .catch(e => res.send(e));
    }catch(e){
        res.send({error:e});
    }
}