var config = {
  host: 'rs-cluster.us-east-1.redshift.amazonaws.com',
  db: 'dev',
  user: 'rsadmin',
  password: 'rsPassword'
};
var rssql = require('redshift-sql')(config);
var query = 'select * from myTable limit 10';

rssql(query, function cb(err, result) {
  if (err) {
    return console.error(err);
  }
  // do stuff
});
