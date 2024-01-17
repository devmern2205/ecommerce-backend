const emailValidation = require('../helpers/emailValidation');
const emailVerficationTemplate = require('../helpers/emailVerificationTemplate');
const sendEmail = require('../helpers/sendEmail');
const UserList = require('../models/userSchema');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function registrationController(req,res){
    const { firstname, lastname, email, telephone, address1, city, postcode, division, district, password } = req.body

    if(!firstname || !lastname){
      return  res.send({error: 'Firstname & Lastname are required'})
    }
    if(!email){
        return res.send({error: 'Email is required'})
    }
    if(!emailValidation(email)){
        return res.json({error: 'Email is not valid'})
    }
    if(!telephone){
        return res.send({error: 'Telephone is required'})
    }
    
    const existingEmail = await UserList.findOne({email});
    if(existingEmail){
        return res.send({error: 'Email is already in used'})
    }
   
    bcrypt.hash(password, 10, function(err, hash) {
        const users = new UserList({
            firstname,
            lastname,
            email,
            telephone,
            address1,
            city,
            postcode,
            division,
            district,
            password:hash
        })
        users.save();
        var token = jwt.sign({ email }, process.env.TOKEN_SECRET);
        sendEmail(email, 'EMAIL VERIFICATION', emailVerficationTemplate(token))
        res.send(users);
    });
    
}
module.exports = registrationController;