import { LinkController } from "../controllers/link.js";

export default defineEventHandler((event) => {
  return LinkController.getAll(event);
});
