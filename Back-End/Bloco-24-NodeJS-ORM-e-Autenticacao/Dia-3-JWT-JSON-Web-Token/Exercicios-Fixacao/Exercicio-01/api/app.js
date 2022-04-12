const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors')

const validateJWT = require('./auth/validateJWT')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors('*'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', validateJWT,routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

module.exports = app;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
