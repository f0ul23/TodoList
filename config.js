const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/list').then(console.log('connected'));