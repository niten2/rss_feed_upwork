import logger from "app/services/logger"
import { Feed } from "app/models"
import { getRss } from "app/services/rss"

const main = async () => {
  try {
    const rss = await getRss()

    const feeds = await Feed.createNewFeeds(rss)

    await Feed.setSendEmails(feeds)

    logger.info("finish setup old feed")
    process.exit()
  } catch (err) {
    logger.error(err)
  }
}

main()
