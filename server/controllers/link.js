import { LinkModel } from "../models/link.ts";

export class LinkController {
  static async getAll(event) {
    const query = getQuery(event)
    
    const page = query.page
    const link = await LinkModel.getAll({page});
    
    return link;
  }

  static async create(event) {
    const body = await readBody(event);

    const link = await LinkModel.create({ data: body.data });

    return link;
  }
}
