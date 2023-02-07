import { Assets } from "cargo/http/tasks/mod.ts";
import { Parcel } from "parcel/cargo/tasks/mod.ts";
import { TwindPlugin } from "parcel_plugins/twind/mod.ts";

import pages from "../.manifest/.pages.ts";
import islands from "../.manifest/.islands.ts";

import twindConfig from "config/twind.ts";

export default {
  tasks: {
    onBootstrap: [
      Assets("assets"),
      await Parcel({
        pages,
        islands,
        plugins: [
          TwindPlugin(twindConfig),
        ],
      }),
    ],
  },
};
