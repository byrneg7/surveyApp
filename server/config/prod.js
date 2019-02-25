// prod.js - production keys here!

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    absoluteURI: 'https://stormy-lowlands-80800.herokuapp.com',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY ,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY 
};

//remember to make admin user in db on mlabs