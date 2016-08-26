import models from '../../../models';
let expect = require('chai').expect;
let should = require('chai').should();

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

    it('Project should have 4 tags', async () => {
        let project = await models.Project.create({
            title: 'Project with 4 tags',
            description: 'one two three four'
        });
        let tags = [];
        let tagsCount = 0;
        for(let i = 0; i < 4; i++){
            tags.push(await models.Tag.create({
                title: `tag${i}`,
                type: 'business'
            }))
        }
        await project.setTags(tags);

        tagsCount = await project.getTags();

        expect(tagsCount).to.have.length(4);
    });

    describe('belongsToMany', () => {
        let employee1;
        let employee2;
        let skill1;
        let skill2;
        let skill3;
        let skill4;
        let skill5;
        let skill6;

        before(async () => {
            employee1 = await models.Employee.create({
                firstName: 'Ivan',
                lastName: 'Petrov',
                title: 'Director'
            });
            employee2 = await models.Employee.create({
                firstName: 'Sergey',
                lastName: 'Novik',
                title: 'Developer'
            });
            skill1 = await models.Skill.create({name: 'Java'});
            skill2 = await models.Skill.create({name: '.NET'});
            skill3 = await models.Skill.create({name: 'Python'});
            skill4 = await models.Skill.create({name: 'Go'});
            skill5 = await models.Skill.create({name: 'JavaScript'});
            skill6 = await models.Skill.create({name: 'Management'});

            await employee1.setSkills([skill1, skill2, skill3, skill4]);
            await employee2.setSkills([skill1, skill2, skill5, skill6]);

        });

        it('FullName should be Ivan Petov', async () => {
            let expected = 'Ivan Petrov';

            let fullName = await employee1.getFullName();

            expect(expected).to.equals(fullName);
        });

        it('Each employee should have 4 skills', async() => {
            let expectSkillsCount = 4;

            let employee1Skills = await employee1.getSkills();
            let employee2Skills = await employee2.getSkills();

            expect(expectSkillsCount).to.equals(employee1Skills.length);
            expect(expectSkillsCount).to.equals(employee2Skills.length);
        });
        
        it('Employee by skill', async () => {
            let employeesWithSkil1 = await skill1.getEmployees();
            let employeesWithSkil2 = await skill2.getEmployees();

            function namesOfEmployees(employees) {
                let names = [];
                for(let empl of employees) {
                    names.push(empl.getFullName());
                }
                return names;
            }

            employeesWithSkil1.should.have.length(2);
            employeesWithSkil2.should.have.length(2);
            expect(namesOfEmployees(employeesWithSkil1))
                .to.eql(namesOfEmployees(employeesWithSkil2));
        });

        it('Employee1 should have Go skill', async () => {
            let skills = await employee1.getSkills();

            expect(skills.map(skill => skill.name)).to.include('Go');
        });
    });
});