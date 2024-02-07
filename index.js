require("dotenv").config();
const database = require('./src/db');
const server = require('./src/server');

const { PORT, DB_FORCE } = process.env;

database
  .sync({ force: DB_FORCE })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server listen in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log('se produjo un error de al conectar la base de datos', error.message);
  });
