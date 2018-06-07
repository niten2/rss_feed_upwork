import schedule from "node-schedule"
import { getRss, checkAndCreateFeeds } from "app/services/rss"

// NOTE rule - every minute
let rule = new schedule.RecurrenceRule()
rule.minute = new schedule.Range(0, 59, 1)
schedule.scheduleJob(rule, async () => { await run() })

const run = async () => {
  try {
    const rss = await getRss()
    await checkAndCreateFeeds(rss)

    logger.info("finish checkAndCreateFeeds")
  } catch (err) {
    logger.error(err)
  }
}
