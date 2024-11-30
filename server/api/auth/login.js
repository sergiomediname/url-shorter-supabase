import { PrismaClient } from '@prisma/client'
import { supabaseServer } from '~/server/lib/supabase'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  console.log("=================== entra funcon login");
  
  const query = getQuery(event)

  const { user, error } = await supabaseServer.auth.getSessionFromUrl(query)

  if (error) {
    return { error }
  }

  // Guarda el usuario en la base de datos si no existe
  const test = await prisma.user.upsert({
    where: { id: user.id },
    update: { lastSignIn: new Date() },
    create: {
      id: user.id,
      email: user.email,
      name: user.user_metadata.full_name,
      avatar: user.user_metadata.avatar_url
    }
  })

  console.log(test);
  

  return sendRedirect(event, '/')
})
