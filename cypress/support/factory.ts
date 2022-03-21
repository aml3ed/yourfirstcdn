import { installGlobals } from "@remix-run/node/globals";
import { Factories } from "../../test/factories";

installGlobals();

async function runFactory(factory: string, attrs: string) {
  const createInput = JSON.parse(attrs) || null;
  console.log(JSON.stringify(await Factories[factory].create(createInput)));
}

runFactory(process.argv[2], process.argv[3]);
