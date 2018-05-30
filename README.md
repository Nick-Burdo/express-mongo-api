# Express + MongoDB API
Create Express App
```
$ express --view=pug
```

Initialize Git
```
$ git init
```

Create `.gitignore` file (check "Example user template" & "Node")

Install dependences
```
$ yarn install
```

Install `Mongoose`, `Bcrypt`, `Passport`, `Passport JWT`, `JSON Web Token`, `dotenv`
```
$ yarn add mongoose bcrypt passport passport-jwt jsonwebtoken dotenv
```

Add dotevent to the `/app.js` file:

```
require('dotenv').config();
```

Set PORT=3100 in the `/.env` file.

Create config: `/config/index.js`

Create database connection `/database/index.js`

Add databse connection in `/app.js` file after line `var app = express();`
```
// /app.js
...
var app = express();

require('./database');
...
```

Create model `Auth` for JWT-authentification: `/models/auth.js`

Create Passport startegy: `/auth/passport.js`

Initialize Passport  in `/app.js` file after database connection
```
// /app.js
...
require('./database');
const passport = require('./auth/passport');
app.use(passport.initialize());
...
```

Create `signUp` router function for User Sign Up: `/routes/api/v1/signUp.js`

Create `login` router function for User Login: `/routes/api/v1/login.js`

Create `custom` router function for closed zone: `/routes/api/v1/custom.js`

Create API router: `/routes/api/v1/index.js`

Add API router to the `/app.js` file:

```
...
const router = require('./routes/api/v1');
...
app.use('/api/v1', router);
...
```

Install Swagger UI:
```
$ yarn add swagger-ui-express
```

Create Swagger API defintion `/swagger.json`. Use [Swagger Constructor](http://editor.swagger.io/)

Add Swagger route to the `/app.js`:
```
...
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
...
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
...
```

*NOTE:* In the header of the `custom` request, add:
```
Authorization: "bearer <token>"
```

*NOTE:* If the property `unique` does not work in the user's scheme (it
is possible to create several users with the same `username`), you need
to do the following:
- Remove all documents from the users collection.
- From the mongo shell, execute the command:
```
db.users.createIndex({email: 1}, {unique: true})
```


