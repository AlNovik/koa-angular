export default (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        Employee.hasMany(models.Skill);
      }
    }
  });

  return Employee;
};