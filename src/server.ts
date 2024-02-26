import * as Koa from "koa";
import * as Router from "koa-router";
import logger = require("koa-logger");
import bodyparser = require("koa-bodyparser");
import { addCapicity, addUser, addvaccinationCenter, bookVacinnation, listAllBookingsCenter, listVaccinationCenter } from "./controller/vaccination";

const port = process.env.PORT || 8080;

const app = new Koa();
const router = new Router();
app.use(logger());
app.use(bodyparser());

router.get("/", async (ctx) => {
  ctx.body = "Welcome to Koa";
});

router.post("/v1/add-user",addUser);
router.post("/v1/add-vaccination-center",addvaccinationCenter);

router.get("/v1/list-vaccination-center/:districtName",listVaccinationCenter);

router.get("/v1/list-all-bookings/:districtName",listAllBookingsCenter);
router.post("/v1/add-capacity",addCapicity);

router.post("/v1/book-vaccination",bookVacinnation);
app.use(router.routes());
app.listen(port);

console.log(` My koa server is up and listening on port ${port}`);
