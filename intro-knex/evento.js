const knex = require("./db");

// criar uma tabela
knex.schema.createTable("evento", (table) =>{
    table.increments("idevento");
    table.string("nomeevento");
    table.date("dataevento");
  }).then(() => {
    console.log("tabela criada");
    process.exit(0);
  }).catch((err)=>{
    console.log(err);
    process.exit(1);
  });