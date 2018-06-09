import { append } from "ramda"
import DataType from "sequelize"
import Sequelize from "db/sequelize"
import logger from "app/services/logger"

const schema = Sequelize.define('feeds', {
  title: {
    type: DataType.STRING,
    allowNull: false
  },

  link: {
    type: DataType.STRING,
    allowNull: false
  },

  sendEmail: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

}, {

})

schema.setSendEmails = async function(feeds) {
  await Promise.all(
    feeds.map(async (feed) => {
      feed.set({ sendEmail: true })
      await feed.save()
    })
  )
}

schema.createNewFeeds = async function(rss) {
  const newFeeds = async (acc, item) => {
    let feed = await this.findOne({
      where: {
        title: item.title,
        link: item.link,
      }
    })

    if (feed) return acc

    feed = await this.create({ title: item.title, link: item.link, sendEmail: true })

    logger.info({ message: "feed created", title: item.title, link: item.link })

    return append(feed, acc)
  }

  return await rss.reduce(newFeeds, [])
}

export default schema
