export default (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        name: DataTypes.STRING
    }, {
        classMethods: {
        }
    });

    return Contact;
};