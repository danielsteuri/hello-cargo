import { bootstrap } from "cargo/mod.ts";
import cargoConfig from "config/cargo.ts";

const app = (await bootstrap(cargoConfig))

app.run();
