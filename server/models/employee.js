export default (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        Employee.belongsToMany(models.Skill, {
          through: 'employee_skills'
        });
      }
    },
    instanceMethods: {
      getFullName: function() {
        return [this.firstName, this.lastName].join(' ')
      }
    }
  });

  return Employee;
};