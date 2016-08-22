import supertest from 'supertest';


export default (name, app) => {
  let request = supertest.agent(app.listen());

  describe(name, () => {

    it('GET should return 200 status', done => {
      request
        .get('/project')
        .expect(200)
        .end(done);
    });

    it('GET should return 200 status', done => {
      request
        .get('/project/1')
        .expect(200)
        .end(done);
    });

    it('POST should return 201 status', done => {
      request
        .post('/project')
        .send({})
        .expect(201)
        .end(done);
    });

    it('PUT should return 201 status', done => {
      request
        .put('/project/1')
        .send({})
        .expect(204)
        .end(done);
    });

    it('DELETE should return 204 status', done => {
      request
        .delete('/project/1')
        .expect(204)
        .end(done);
    });
  });
}


