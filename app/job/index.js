import schedule from 'node-schedule'

let rule = new schedule.RecurrenceRule()
rule.minute = new schedule.Range(0, 59, 1)
schedule.scheduleJob(rule, async () => { await run() })

const run = async () => {

  const rss = await getRss()

  const checkAndCreateFeed = (item) => {
    try {
      let feed = await Feed.findOne({ name: item.name })

      if (!feed) {
        await Feed.create({ name: item.name, link: item.link })
      }

    } catch (err) {
      logger.info(err)
    }
  }

  rss.map(checkAndCreateFeed)

}
