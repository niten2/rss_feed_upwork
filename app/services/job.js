import { isEmpty } from "ramda"
import logger from "app/services/logger"
import { Feed } from "app/models"
import { sendEmailMailgun } from "app/services/email"
import { getRss } from "app/services/rss"
import settings from "config/settings"

logger.debug(`start check feed ${settings.rss_upwork}`)

export const runJob = async () => {
  const rss = await getRss()
  const feeds = await Feed.createNewFeeds(rss)

  if (isEmpty(feeds)) return

  await sendEmailMailgun(feeds)
  await Feed.setSendEmails(feeds)
}

export const runJobWithErrorLog = async () => {
  try {
    await runJob()
    logger.debug("finish check rss")
  } catch (err) {
    logger.error(err)
  }
}
