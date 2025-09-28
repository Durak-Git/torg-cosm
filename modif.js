
import { torgeternity } from "../../systems/torgeternity/module/config.js";

Hooks.once("ready", async function () {
  console.log(torgeternity.cosmTypes);
  console.log(torgeternity);
  torgeternity.cosmTypes.malagwa = 'personnal.malagwa';

  torgeternity.axiomByCosm.malagwa = {
      magic: 90,
      social: 90,
      spirit: 90,
      tech: 90,
  };
})
