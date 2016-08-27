import models from '../../../models';
import ApiError from '../../../errors/ApiError';
import errorMessage from '../../../modules/error-messages';
import _ from 'lodash';

const Projects = models.Project;

async function list(ctx, next) {
    let projects = await Projects.findAll();
    ctx.body = projects;
}

async function get(ctx, next) {
    let id = ctx.params.id;
    let project = await Projects.findById(id);
    ctx.body = project || {};
}

async function create(ctx, next) {
    let project = ctx.request.body;
    if(_.isEmpty(project)) {
        throw new ApiError(errorMessage('badRequest', 'Body shouldn\'t be empty'));
    }

    ctx.body = await Projects.create(project);
    ctx.status = 201;
}

async function update(ctx, next) {
    ctx.status = 204;
    ctx.body = ctx.request.body;
}

async function del(ctx, next) {
    ctx.status = 204;
}

export default {list, get, create, update, del};
