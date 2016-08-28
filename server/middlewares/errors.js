export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // will only respond with JSON
    if(err.extra) {
      ctx.status = err.extra.statusCode;
      ctx.body = err.extra.payload;
    } else {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = {
        message: err.message
      };
    }
  }
};
