import Link from '../models/Link';
import path from 'path';

export default {
  new: {
    get(req, res) {
      res.locals.title = "New link";
      res.render('links/new');
    },
    post(req, res) {
      var { url, alias, title } = req.body;

      var link = {
        url,
        alias,
        title
      };

      Link.create(link)
        .then(result => {
          res.locals.flash = {
            type: "info",
            message: "The link has been add correctly !"
          };

          res.render('links/new');
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  delete: {
    post(req, res) {
      var id = req.body.id;

      Link.delete(id)
        .then(result => {
          res.locals.flash = {
            type: "info",
            message: "The link has been deleted correctly !"
          };
          res.redirect('/');
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  alias: {
    get(req, res, next) {
      var alias = req.params.alias;

      if (!path.extname(req.path).length && req.path != "/" ) {
        Link.findByAlias(alias)
        .then(link => {
          if (link) {
            res.redirect(link[0].url);
          }
          else {
            res.locals.title = "404 not found";
            res.render('global/404');
          }
        })
        .catch(err => {
          console.error(err);
        });
      }
      else {
        next();
      }
    }
  }
}