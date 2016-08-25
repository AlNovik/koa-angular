/**
 * Tag model description.
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}}
 */
export default (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {
    classMethods: {
    }
  });

  return Skill;
};
