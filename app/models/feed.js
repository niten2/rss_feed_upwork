import DataType from 'sequelize'
import Sequelize from 'db/sequelize'

const schema = Sequelize.define('feeds', {
  name: DataType.STRING,
  link: DataType.STRING,

  sendEmail: DataType.BOOLEAN,
}, {

})

schema.hook('beforeSave', async function(feed, options) {
  if (!feed.sendEmail) {
    console.log("SEND EMAIL")
  }

  feed.set({ sendEmail: true })
})


export default schema
