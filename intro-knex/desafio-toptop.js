const knexfile = require("./knexfile")['development']
const knex = require("knex")(knexfile)
const axios = require("axios")
const api = axios.create({
  baseURL: "https://api.github.com"
})


api.get("/repos/seita-ifce/hello-js-v3/issues/3/comments").then(ret => {
    ret.data.filter(e => e.user.login && new Date(e.created_at) < new Date("2017-09-20") && e.body.includes("hellojs-s03e03")).forEach(e => {
        knex("presenca").select().where({
            usuario:e.user.login
          }).then((ret) => {
            if(ret.length == 0){
                knex("presenca").insert({
                    usuario:e.user.login, episodio:'e03', datapresenca:e.created_at, repo:e.body.trim()
                  }).then((ret) => {
                    console.log('inserido');
                  }).catch((err)=>{
                    console.log(err);
                    process.exit(1);
                });
            }
          }).catch((err)=>{
            console.log(err);
            process.exit(1);
          });
    });
  })


  