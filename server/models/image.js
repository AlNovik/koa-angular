export default (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: DataTypes.STRING,
    href: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
      }
    }
  });

  return Image;
};