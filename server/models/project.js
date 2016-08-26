/**
 * Project model description.
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}}
 */
export default (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: models => {
        Project.hasMany(models.Tag);
        Project.hasMany(models.Image);
      }
    }
  });

  return Project;
};
