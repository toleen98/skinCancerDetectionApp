//validation
const joi = require('@hapi/joi')



//regester validation for patints

const regesterVaidationP = (data) => {
    const patientSchema = {
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().min(8).required().email,
        password: joi.string().min(8).required(),
        phoneNumber: joi.number().required(),
        bloodType: joi.string().required(),
        height: joi.number().required(),
        weight: joi.number().required()  
    }

    return joi.validate(data, patientSchema);
}

const regesterVaidationD = (data) => {
    const doctorsSchema = {
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().min(8).required().email,
        password: joi.string().min(8).required(),
        phoneNumber: joi.number().required(),
        clinicLocation: joi.string().required(),
        workingFrom: joi.string().required(),
        workingTo:joi.string().required(), 
    }

    return joi.validate(data, doctorsSchema);
}


module.exports.regesterVaidationP =  regesterVaidationP;