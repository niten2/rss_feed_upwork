import { isEmpty } from "ramda"
import logger from "app/services/logger"
import { Feed } from "app/models"
import { sendEmailMailgun } from "app/services/email"
import { getRss } from "app/services/rss"

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
    console.log("finish check rss")
  } catch (err) {
    logger.error(err)
  }
}
