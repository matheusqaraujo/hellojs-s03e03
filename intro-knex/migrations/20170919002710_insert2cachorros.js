
exports.up = function(knex, Promise) {
  return knex('cachorro').insert([{nomecachorro:'toto'},{nomecachorro:'rex'}])
};

exports.down = function(knex, Promise) {
  return knex('cachorro').where({nomecachorro: 'toto'}).del().then(() => {
    return knex('cachorro').where({ nomecachorro: 'rex' }).del()
  })
};
