module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }
    next();
};

//next is a function that we call when the middleware is finished running, similar to the done() callback
//it passes on control of the req to the next middleware in the chain


//no need to call next since if a user isnt logged in it should stop processing the req 
//if user is logged in, continue 