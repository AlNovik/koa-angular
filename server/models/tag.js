/**
 * Tag model description.
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}}
 */
export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        Tag.hasMany(models.Project);
      }
    }
  });

  return Tag;
};
