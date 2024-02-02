require("dotenv").config();
const database = require('./src/db');
const server = require('./src/server');

const { PORT } = process.env;

database
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server listen in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log('se produjo un error de al conectar la base de datos', error.message);
  });
