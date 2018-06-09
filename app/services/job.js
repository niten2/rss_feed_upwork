import { Feed } from "app/models"
import { sendEmailMailgun } from "app/services/email"
import { getRss } from "app/services/rss"
import logger from "app/services/logger"

export const runJob = async () => {
  const rss = await getRss()
  const feeds = await Feed.createNewFeeds(rss)

  await sendEmailMailgun(feeds)

  await Feed.setSendEmails(feeds)
}

export const runJobWithErrorLog = async () => {
  try {
    await runJob()
  } catch (err) {
    logger.error(err)
  }
}
