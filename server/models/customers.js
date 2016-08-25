export default (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    businessSphera: DataTypes.STRING
  }, {
    classMethods: {
    }
  });

  return Customer;
};