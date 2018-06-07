import Parser from "rss-parser"
import settings from "config/settings"
import logger from "app/services/logger"
import { Feed } from "app/models"

export const getRss = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL(settings.rss_upwork)

  return feed.items
}

export const setStartFeeds = async (rss) => {
  const createFeed = async (item) => {
    const feed = await Feed.findOne({
      where: {
        title: item.title,
        link: item.link,
      }
    })

    if (feed) return

    await Feed.create({ title: item.title, link: item.link, sendEmail: false })

    logger.info({ message: "feed created", title: item.title, link: item.link })
  }

  await Promise.all(rss.map(createFeed))
}

export const checkAndCreateFeeds = async (rss) => {
  const createFeed = async (item) => {
    const feed = await Feed.findOne({
      where: {
        title: item.title,
        link: item.link,
      }
    })

    if (feed) return

    await Feed.create({ title: item.title, link: item.link, sendEmail: true })

    logger.info({ message: "feed created", title: item.title, link: item.link })
  }

  await Promise.all(rss.map(createFeed))
}
