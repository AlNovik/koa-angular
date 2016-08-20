import Router from 'koa-router';

const router = new Router();

router
  .get('/project', async(ctx, next) => {
    ctx.body = {
      status: 'success'
    };
    next();
  })
  .get('/project/:id', async(ctx, next) => {
    ctx.body = {
      status: 'success',
      id: ctx.params.id
    };
    next();
  })
  .post('/project', async(ctx, next) => {
    ctx.status = 201;
    ctx.body = ctx.request.body;
    next();
  })
  .put('/project/:id', async(ctx, next) => {
    ctx.status = 204;
    ctx.body = ctx.request.body;
    next();
  })
  .delete('/project/:id', async(ctx, next) => {
    ctx.status = 204;
    next();
  });

export default router;
