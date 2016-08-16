import adminRoutes from './admin';

export default app => {
  app.use(adminRoutes.routes());
};