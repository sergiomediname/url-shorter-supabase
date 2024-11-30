import { PrismaClient } from "@prisma/client";
import { useValidate } from "@/composables/useValidate.js";

const prisma = new PrismaClient();

type LinkQueryParams = {
  page?: number
  // take?: number;
  // lastCursor?: string;
};

export class LinkModel {
  static OFFSET_PAGINATION = 6

  static async getAll({page = 1}: LinkQueryParams) {
    
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000))
      const totalItems = await prisma.link.count()
      const totalPages = Math.ceil(totalItems / this.OFFSET_PAGINATION)

      const currentPage = Math.min(Math.max(page, 1), totalPages)

      const skip = (currentPage > 0) ? (currentPage - 1) * this.OFFSET_PAGINATION : 0

      const result = await prisma.link.findMany({
        take: this.OFFSET_PAGINATION,
        skip,
        orderBy: {
          id: 'asc',
        }
      });

      return {
        success: true,
        data: result,
        total: totalItems,
        current_page: currentPage,
        total_pages: totalPages
      };
    } catch (error) {
      console.log(error);
      
      return {
        success: false,
        error: "Existe un error en el servidor."
      };
    }


  }

  static async create({ data }) {
    const validate = useValidate()    
  
    if(!validate.urlDomain({url: data.url})) {
      return {
        success: false,
        data: "Invalid URL"
      }
    }

    if(!data.slug || data.slug == "") {
      return {
        success: false,
        data: "Invalid slug"
      }
    }

    try {
      const result = await prisma.link.create({
        data,
      });
  
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        data: "Error en el servidro."
      }
    }

  }
}
