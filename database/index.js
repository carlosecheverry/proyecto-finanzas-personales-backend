// Database
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://andrese7:abc123def@cluster0-wt7gc.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));