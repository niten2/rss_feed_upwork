import DataType from 'sequelize'
import Sequelize from 'db/sequelize'
import settings from "config/settings"
import { sendEmailMailgun } from 'app/services/email'
import logger from 'app/services/logger'

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

schema.hook('beforeSave', async function(feed, options) {
  if (feed.sendEmail) {
    const { link, title } = feed

    if (settings.isEnvProd) {
      await sendEmailMailgun({ link, title, email: settings.email_to })
      logger.info({ message: "send email", link, title, email: settings.email_to })
    } else {
      logger.info("SEND EMAIL ACTION")
    }
  }
})


export default schema
