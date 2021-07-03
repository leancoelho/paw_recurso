var User = require('../models/user');
const bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');
var authconfig = require('../config/authconfig');

var authController = {};

authController.login = function (req, res) {
    console.log("chegou ao controlador");
    User.findOne({ userName: req.body.userName }, function (err, user) {

        if (err) return res.status(500).send('Erro no servidor');
        if (!user) return res.status(404).send('User não encontrado');
        console.log(user);
        console.log(user.userName);
        console.log(req.body);
        //var passwordIsValid = bcrypt.compareSync(req.body.password, user.pass);
        if (req.body.password != user.password) return res.status(401).send({ auth: false, token: null });

        var token = jwt.sign({ id: user._id }, authconfig.secret, {
            expiresIn: 86400 // expira em 24 horas
        });

        res.json({ auth: true, token: token, userName: user.userName, email: user.email });

    });
}

authController.logout = function (req, res) {
    res.status(200).send({ auth: false, token: null });
}

authController.verifyToken = function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err)
            return res.status(50-0).send({ auth: false, message: 'Failed to authenticate token.' });

        // if everything is good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });

}


authController.verifyTokenAdmin = function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err || decoded.role !== 'admin')
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token or not Admin' });
        // if everything is good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}

module.exports = authController;