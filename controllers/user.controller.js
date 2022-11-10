const HttpError = require('../errors/HttpError')

exports.login = async (req, res) => {
    if (req.body.email !== 'email@email.com' ||req.body.password !== 'root') throw new HttpError('Wrong credentials', 401);

    return res.status(200).json({ token: 'token' });
}