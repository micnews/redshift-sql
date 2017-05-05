var config = {
  host: 'rs-cluster.us-east-1.redshift.amazonaws.com',
  db: 'dev',
  user: 'rsadmin',
  password: 'rsPassword'
};
var rssql = require('redshift-sql')(config);

var query = 'select * from myTable where foo = $1 limit 10';
var values = ['bar'];

rssql(query, values, function cb(err, result) {
  if (err) {
    return console.error(err);
  }
  // do stuff
  console.log('-- Result Rows --')
  console.log(JSON.stringify(result.rows, null, 2));
});
