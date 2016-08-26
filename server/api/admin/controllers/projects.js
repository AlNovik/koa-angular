import models from '../../../models';

const Projects = models.Project;

async function list(ctx, next) {
    ctx.body = await Projects.findAll();
}

async function get(ctx, next) {
    let id = ctx.params.id;
    let project = await Projects.findById(id);
    ctx.body = project || {};
}

async function create(ctx, next) {
    ctx.status = 201;
    ctx.body = ctx.request.body;
}

async function update(ctx, next) {
    ctx.status = 204;
    ctx.body = ctx.request.body;
}

async function del(ctx, next) {
    ctx.status = 204;
}

export default {list, get, create, update, del};
