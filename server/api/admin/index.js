import Router from 'koa-router';

const router = new Router();

router
  .get('/project', async(ctx, next) => {
    ctx.body = {
      status: 'success'
    };
  })
  .get('/project/:id', async(ctx, next) => {
    ctx.body = {
      status: 'success',
      id: ctx.params.id
    };
  })
  .post('/project', async(ctx, next) => {
    ctx.status = 201;
    ctx.body = ctx.request.body;
  })
  .put('/project/:id', async(ctx, next) => {
    ctx.status = 204;
    ctx.body = ctx.request.body;
  })
  .delete('/project/:id', async(ctx, next) => {
    ctx.status = 204;
  });

export default router;
