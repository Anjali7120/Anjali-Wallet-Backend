import models from "../../models"; 
const {WalletModel} = models;

export default async (req, res) => {
    const wallet = {
        wallet_user_id: req.body.wallet_user_id,
        balance: req.body.balance
    };
    WalletModel.create(wallet)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Wallet."
            });
        });
   
};