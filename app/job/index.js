import schedule from "node-schedule"
import logger from "app/services/logger"
import { feedJob } from "app/services/rss"

const getRuleEveryMinute = () => {
  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, 1)
  return rule
}

const main = async () => {
  try {
    await feedJob()
  } catch (err) {
    logger.error(err)
  }
}

schedule.scheduleJob(getRuleEveryMinute(), main)
