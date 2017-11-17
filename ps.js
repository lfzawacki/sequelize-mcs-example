const models = require('./models/index');

models.Room.create({name: 'Room 1'}).then(console.log);

models.Room.findOne({}).then(console.log);

