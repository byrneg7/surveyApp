const keys = require('../config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Purchased 5 credits for 5 dollars',
            source: req.body.id
        });
        req.user.credits += 5;
        const user = await req.user.save(); //assign the 'freshest' copy of the user model to variable
        res.send(user);
    });
};