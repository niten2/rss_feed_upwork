import schedule from "node-schedule"
import { runJobWithErrorLog } from "app/services/job"

const getRuleEveryMinute = () => {
  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, 1)
  return rule
}

schedule.scheduleJob(getRuleEveryMinute(), runJobWithErrorLog)
