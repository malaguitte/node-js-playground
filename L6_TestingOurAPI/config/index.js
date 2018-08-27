var config = require('./config');

module.exports = {
  getDatabaseUrl : function() {
    return 'mongodb://' + 
      config.username +
      ':' + config.password + 
      '@' + config.server + 
      ':' + config.port + 
      '/' + config.database;
  }
}