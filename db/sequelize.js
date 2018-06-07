import Sequelize, { Op } from "sequelize"
import settings from "config/settings"
import { Feed } from "app/models"

const buildLogging = () => {
  if (settings.isEnvTest) {
    return false
  }

  return console.log
}

const sequelize = new Sequelize(settings.databaseUrl, {
  operatorsAliases: Op,

  define: {
    freezeTableName: true,
  },

  logging: buildLogging(),
})

export const sync = (...args) => sequelize.sync(...args)

export const dropDb = async () => {
  await Feed.destroy({ where: {}, truncate: true })
}

export default sequelize
