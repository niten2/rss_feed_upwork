import { getRss, setStartFeeds } from "app/services/rss"
import logger from "app/services/logger"

const main = async () => {
  try {
    const rss = await getRss()
    await setStartFeeds(rss)
    logger.info("finish setStartFeeds")
  } catch (err) {
    logger.error(err)
  }
}

main()
