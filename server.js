//Allowing for use of .env file variables
require('dotenv').config();
//Grabbing the experss library
const express = require('express');
//Grabbing routers from out controller folder
const routes = require('./controller');
//grabbing the information for database connection
const sequelize = require('./config/connection');
//Grabbing the handlesbars library
const exphbs = require('express-handlebars');
//Initializing the handblebars instance
const hbs = exphbs.create({});
// Grabbign path library so paths will work regardless of where this app lives.
const path = require('path');
//Intializing Express
const app = express();
//Grabbing the session library
const session = require('express-session');
const SequelizeSessions = require('connect-session-sequelize')(session.Store);
//Creating information for the session to use for security and some settings
const sess = {
	secret: 'Super secret stuff',
	cookie: { maxAge: 3600000 },
	resave: false,
	saveUninitilized: true,
	store: new SequelizeSessions({
		db: sequelize,
	}),
};

//Setting up the port that will be used default is 3001 or the user and input whatever they like in the .env file
const PORT = process.env.PORT || 3001;

//setting up handlebars as our engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Setting up middleware
app.use(session(sess));
//Setting up to allow for parsing incoming requests with json
app.use(express.json());
//Setting up all files in the public folder so they can be accessed by our handlebar views.
app.use(express.static(path.join(__dirname, 'public')));
//Connecting the routes that were created and sent to index.js
app.use(routes);
//Sync to the database using our sequelize instance then console log the port we are operating on.
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});
