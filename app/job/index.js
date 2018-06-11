import schedule from "node-schedule"
import { runJobWithErrorLog } from "app/services/job"

const getRuleEveryMinute = () => {
  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, 1)
  return rule
}

schedule.scheduleJob(getRuleEveryMinute(), runJobWithErrorLog)


var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var result = 'App is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'))
});
