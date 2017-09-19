const knexfile = require("./knexfile")['development']
const knex = require("knex")(knexfile)

const query = "insert into presenca (usuario, episodio, datapresenca, repo) values (:usuario, :episodio, :datapresenca, :repo)"

const p = {usuario: 'Teste', episodio:'e03', datapresenca:'2017-09-19', repo:''}

knex.raw(query,p).then((ret) => {
    console.log('insert');
    process.exit(0);
  }).catch((err)=>{
    console.log(err);
    process.exit(1);
  });