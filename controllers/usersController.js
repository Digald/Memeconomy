exports.signup = async (req, res) => {
  console.log(req.body);
};

exports.login = async (req, res) => {
  console.log(req.body);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.profile = (req, res) => {
  console.log(req.user);
  res.redirect("/profile");
};