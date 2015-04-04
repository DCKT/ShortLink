import Link from '../models/Link';

export default {
  index: {
    get(req, res) {
      
      Link.findAll()
        .then(links => {
          res.locals.links = links;
          res.locals.title = "Home";

          res.render('index');
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}