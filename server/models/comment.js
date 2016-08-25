export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: models => {
        Comment.belongsTo(models.Project);
      }
    }
  });

  return Comment;
};