import schedule from "node-schedule"
import logger from "app/services/logger"
import { getRss, checkAndCreateFeeds } from "app/services/rss"

const getRuleEveryMinute = () => {
  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, 1)
  return rule
}

const main = async () => {
  try {
    await checkAndCreateFeeds(await getRss())

    logger.info("finish checkAndCreateFeeds")
  } catch (err) {
    logger.error(err)
  }
}

schedule.scheduleJob(getRuleEveryMinute(), async () => { await main() })
