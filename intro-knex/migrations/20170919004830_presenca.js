exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("presenca", (table) => {
      table.increments("idpresenca");
      table.string("usuario");
      table.string("episodio");
      table.date("datapresenca");
      table.string("repo");
    });
  };
    
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("presenca");
  };