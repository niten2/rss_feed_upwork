import DataType from 'sequelize'
import Sequelize from 'db/sequelize'
import settings from "config/settings"
import { sendEmailMailgun } from 'app/services/email'
import logger from 'app/services/logger'

const schema = Sequelize.define('feeds', {
  name: {
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
    const { link, name } = feed
    await sendEmailMailgun({ link, name, email: settings.email_to })
    logger.info({ message: "send email", link, name, email: settings.email_to })
  }
})


export default schema
