import models from '../../models';

async function reset() {
    await models.sequelize.sync({ force : true });
}

reset();