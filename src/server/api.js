import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3000;


router.post('/login', async ctx => { // Just a basic response..
    console.log('Serving request', ctx.request.body);
    ctx.body = { 'success': true }
});


app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}...`));


export default app;
