const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db");

class Contact extends Model {}

Contact.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
    viewed: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "Contact",
  }
);

sequelize.sync();

module.exports = Contact;
