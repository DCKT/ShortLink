import query from '../../utils/query';

export default {
  findAll(cb) {
    return query('SELECT * FROM links');
  },
  create(link) {
    return query('INSERT INTO links SET ?', link);
  },
  findByAlias(alias) {
    return query('SELECT url FROM links WHERE alias = ?', alias);
  },
  delete(id) {
    return query('DELETE FROM links WHERE id = ?', id);
  }
}