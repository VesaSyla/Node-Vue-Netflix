const User = require("../models/User");
const { getToken } = require("../util");

const users = async (req, res) => {
  try {
    const users = await User.find({}).sort({ _id: -1 });
    res.send(users);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  console.log(req.body.email);
  try {
    //findByCredentials() -e kemi kriju tek modeli User(e kemi bo stattike qe me thirr ktu direkt)
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    res.send({
      _id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: getToken(user),
    });
  } catch (error) {
    if (error) {
      return res.status(400).json({ error: error.message }); //error.message - e marrim errorin qe e qet tek User.js e kom bo throw new() nese ka naj error tek metoda findByCredentials, kurse error: me kete i qasemi atje n front pra error: bon me lan qfare do
    }
  }
};

const register = async (req, res) => {
  const user = new User({
    // name: req.body.name,
    // lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();

    res.send({
      _id: user.id,
      // name: user.name,
      // lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      success: true,
      token: getToken(user),
    });
  } catch (error) {
    console.log(error);
    if (error) {
      return res.status(400).json({
        title: "error",
        error: "Email-i ose Name ekziston.Provo një tjetër.", //atje ne fron i qasna response.data.error - error sepse ktu e kom lan emrin error: 'Email is taken..!
      });
    }
  }
};

module.exports = { users, login, register };
