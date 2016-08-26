import adminRoutes from './admin';
import publicRoutes from './public';
import filesRoutes from './files';
import configRoutes from './config';

export default app => {
  app.use(adminRoutes.routes());
  // app.use(publicRoutes.routes());
  // app.use(filesRoutes.routes());
  // app.use(configRoutes.routes());
};