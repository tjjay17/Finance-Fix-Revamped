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
    
}

exports.get_access_token = async (req,res) =>{
    const LINK_TOKEN = req.body.link_token;
    try{
        const tokenResponse = await client.exchangePublicToken(LINK_TOKEN);
        const ACCESS_TOKEN = tokenResponse.access_token;
        const ITEM_ID = tokenResponse.item_id;
        db.pool.query()
    }catch(e){
        res.send({error:e});
    }
}