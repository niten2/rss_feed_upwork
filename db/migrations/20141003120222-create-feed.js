module.exports = {

  up: function (queryInterface, DataType) {
    return queryInterface.createTable('feeds', {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

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

        createdAt: {
          type: DataType.DATE,
          allowNull: false
        },

        updatedAt: DataType.DATE,

      })
  },

  down: function (queryInterface, DataType) {
    return queryInterface.dropTable('feeds')
  },

}
