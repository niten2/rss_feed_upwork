import Parser from "rss-parser"
import { append } from "ramda"
import settings from "config/settings"
import logger from "app/services/logger"
import { Feed } from "app/models"
import { sendEmailsMailgun } from "app/services/email"
import { buildHtml } from "app/services/utils"

export const getRss = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL(settings.rss_upwork)

  return feed.items
}

export const createNewFeeds = async (rss) => {
  const newFeeds = async (acc, item) => {
    let feed = await Feed.findOne({
      where: {
        title: item.title,
        link: item.link,
      }
    })

    if (feed) return acc

    feed = await Feed.create({ title: item.title, link: item.link, sendEmail: true })

    logger.info({ message: "feed created", title: item.title, link: item.link })

    return append(feed, acc)
  }

  return await rss.reduce(newFeeds, [])
}

export const sendSendEmailFeeds = async (feeds) => {
  const html = buildHtml(feeds)

  await sendEmailsMailgun(html)

  await Promise.all(
    feeds.map(async (feed) => {
      feed.set({ sendEmail: true })
      await feed.save()
    })
  )
}

export const feedJob = async () => {
  const rss = await getRss()
  const feeds = await createNewFeeds(rss)

  await sendSendEmailFeeds(feeds)
}
