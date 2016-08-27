export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // will only respond with JSON
    if(err.boom) {
      ctx.status = err.boom.statusCode;
      ctx.body = err.boom.payload;
    } else {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = {
        message: err.message
      };
    }

  }
};
