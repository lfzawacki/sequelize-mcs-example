const models = require('./models/index');

models.Room.findOne({}).then(console.log);

