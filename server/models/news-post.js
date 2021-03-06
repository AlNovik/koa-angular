export default (sequelize, DataTypes) => {
  const New = sequelize.define('New', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    slug: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: models => {
      }
    }
  });

  return New;
};