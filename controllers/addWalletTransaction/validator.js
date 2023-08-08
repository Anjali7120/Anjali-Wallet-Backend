import Joi from 'joi';

export default async (req, _, next) => {
  const itemsToValidate = {
    wallet_id: req.body.wallet_id,
    amount: req.body.amount,
    type: req.body.type,
    status: req.body.status,
    remarks: req.body.remarks
    
  };

  const rulesForValidation = {
    wallet_id: Joi.number().required(),
    amount: Joi.number().precision(4).required(),
    type: Joi.number().required(),
    status: Joi.number(),
    remarks: Joi.string(),
  };

  
  const tranformToErrorsArray = errorsObj => errorsObj.details.map(error => error.message);
  const options = { abortEarly: false };
  const validationsResult = Joi.validate(itemsToValidate, rulesForValidation, options);
  if(validationsResult.error === null)
  {
    next();
  }
  else{
      res.status(403).send({
        error: tranformToErrorsArray
    });
  }

};
