const mongoose = require('mongoose');
const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});


// const express = require('express'); 
// const mongoose = require('mongoose');


// const PORT = process.env.PORT || 3001;
// const app = express();


// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.use(require('./routes'));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network_api', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.set('debug', true);


// db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
//   });

// app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));