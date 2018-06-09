import Parser from "rss-parser"
import settings from "config/settings"
import { Feed } from "app/models"

export const getRss = async () => {
  let parser = new Parser()
  let feed = await parser.parseURL(settings.rss_upwork)

  return feed.items
}
