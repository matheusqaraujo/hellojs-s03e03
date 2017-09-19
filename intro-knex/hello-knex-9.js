const knex = require("./db");

const query = "insert into evento (nomeevento, dataevento) values (:nome, :dataevento)"

const p = {nome: 'kappa3',dataevento:'2017-09-19'}

knex.raw(query,p).then((ret) => {
    console.log('insert');
    process.exit(0);
  }).catch((err)=>{
    console.log(err);
    process.exit(1);
  });