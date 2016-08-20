/**
 * Project model description.
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}}
 */
export default (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        Project.hasMany(models.Tag);
      }
    }
  });

  return Project;
};
