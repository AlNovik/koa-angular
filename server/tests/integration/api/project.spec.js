import supertest from 'supertest';
import models from '../../../models';
let should = require('chai').should();


export default (name, app) => {
  let request = supertest.agent(app.listen());

  describe(name, () => {
    let project;

    before(async () => {
      await models.sequelize.sync({ force : true });
      project = await models.Project.create({ title: 'Project title' });
    });

    it('GET should return 200 status', done => {
      request
        .get('/admin/projects')
        .expect(200)
        .expect(res => {
          res.body.should.have.length(1);
        })
        .end(done);
    });

    it('GET should return 200 status', done => {
      request
        .get(`/admin/projects/${project.id}`)
        .expect(200)
        .expect(res => {
          res.body.should.have.property('title', 'Project title');
        })
        .end(done);
    });

    it('POST should return 400 status on empty body', done => {
      request
        .post('/admin/projects')
        .send({})
        .expect(400)
        .end(done);
    });

    it('POST should return 201 status', done => {
      request
          .post('/admin/projects')
          .send({
            title: 'Test project'
          })
          .expect(201)
          .end(done);
    });

    it('PUT should return 201 status', done => {
      request
        .put('/admin/projects/1')
        .send({})
        .expect(204)
        .end(done);
    });

    it('DELETE should return 204 status', done => {
      request
        .delete('/admin/projects/1')
        .expect(204)
        .end(done);
    });
  });
}


