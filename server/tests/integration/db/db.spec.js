import models from '../../../models';
let expect = require('chai').expect;

describe('Database tests', () => {
    'use strict';

    before(async () => {
        await models.sequelize.sync({ force : true });
    });

    beforeEach(async () => {
        // let tasks = await models.Task.findAll();
        // let projects = await models.Project.findAll();
    });

    it('title should be equal', async () => {
        let project = await models.Project.create({ title: 'Project title' });

        expect('Project title').to.equal(project.title);
    });
});