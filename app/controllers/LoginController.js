export default {
  index: {
    get(req, res) {
      res.locals.title = "Login";
      res.render('login/index');
    },
    post(req, res) {
      var { username, password } = req.body;
      var week = 604800000;
      
      if (username === "DCK" && password === "password") {

        res.cookie('user', "true", {
          expires: new Date(Date.now() + week),
          httpOnly: true,
          signed: true
        });

        res.redirect('/');
      }
      else {
        res.locals.flash = {
          type: "error",
          message: "Error username/password incorrect"
        };

        res.locals.title = "Login";
        res.render('login/index');
      }
    }
  }
}