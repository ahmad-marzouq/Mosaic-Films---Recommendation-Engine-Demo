
const redis = require('redis'),
  config = require('./config'),
  bluebird = require('bluebird');

//bluebird.promisifyAll(redis.RedisClient.prototype);

redisClient = redis.createClient();
redisClient.connect().then(r => console.log(r));
if (config.redisAuth){
  this.redisCli.auth(config.redisAuth, function (err) {
   if (err) { throw err; }
  });
}

module.exports = exports = redisClient;
