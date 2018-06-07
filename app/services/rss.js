import settings from "config/settings"
import Parser from "rss-parser"
import logger from "app/services/logger"
import { Feed } from "app/models"

export const getRss = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL(settings.rss_upwork)

  return feed.items
}

export const setStartFeeds = async (rss) => {
  const createFeed = async (item) => {
    let feed = await Feed.findOne({ name: item.title })

    if (!feed) {
      feed = await Feed.create({ name: item.title, link: item.link, setEmail: true })
      logger.info({ message: "feed created", name: item.title, link: item.link })
    }
  }

  await Promise.all(rss.map(createFeed))
}

export const checkAndCreateFeeds = async (rss) => {
  const createFeed = async (item) => {
    let feed = await Feed.findOne({ name: item.title })

    if (!feed) {
      feed = await Feed.create({ name: item.title, link: item.link, setEmail: false })
      logger.info({ message: "feed created", name: item.title, link: item.link })
    }
  }

  await Promise.all(rss.map(createFeed))
}
