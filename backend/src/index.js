/** 
 * Rota / Recurso 
*/
/**
 * Metodos HTTP:
 * 
 * GET: Buscar / Listar uma informação do back-end
 * POST: Criar uma informação dno back-end
 * PUT: ALterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 *  */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Body: Corpo da requisição, utilizado para criar ou atualizar recursos 
 */

 /**
  * SQL> MySql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL > MongoDB, CouchDB, etc
  * 
  */

  /**
   *  Driver: SELECT*FROM users
   *  Query Builder: table('user').select('*').where() - > npx knex init
   */

const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require('cors');

app.use(cors());

app.use(express.json())
app.use(routes);


app.listen(3333);