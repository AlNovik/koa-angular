import Router from 'koa-router';
import projectsCtrl from './controllers/projects';

const adminRouter = new Router();
const projectsRouter = new Router({
  prefix: '/projects'
});
// const usersRouter = new Router();
// const employeesRouter = new Router();
// const comentsRouter = new Router();

projectsRouter.get('/', projectsCtrl.list);
projectsRouter.get('/:id', projectsCtrl.get);
projectsRouter.post('/', projectsCtrl.create);
projectsRouter.put('/:id', projectsCtrl.update);
projectsRouter.delete('/:id', projectsCtrl.del);



adminRouter.use('/admin',
    projectsRouter.routes());

export default adminRouter;
