/**
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}}
 */
export default (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    home: DataTypes.INTEGER,
    flat: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: models => {
        Address.hasMany(models.Client);
      }
    }
  });

  return Address;
};