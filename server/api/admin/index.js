import Router from 'koa-router';

const router = new Router();

router
  .get('/query', async(ctx, next) => {
    ctx.body = {status: 'success'};
  })
  .get('/query/:id', async(ctx, next) => {
    ctx.body = {
      status: 'success',
      id: ctx.params.id
    };
  })
  .post('/query', async(ctx, next) => {
    ctx.status = 201;
    ctx.body = ctx.request.body;
  })
  .put('/query/:id', async(ctx, next) => {
    ctx.status = 204;
    ctx.body = ctx.request.body;
  })
  .delete('/query/:id', async(ctx, next) => {
    ctx.status = 204;
  });

export default router;
