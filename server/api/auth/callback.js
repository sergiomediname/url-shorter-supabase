import { PrismaClient } from '@prisma/client'
import { supabaseServer } from '~/server/lib/supabase'

const prisma = new PrismaClient()

console.log("==================== Entra callback")

export default defineEventHandler(async (event) => {
  console.log("==================== Funcion")
  const query = getQuery(event)  

  if (!query) {
    return { error: 'Missing query params' }
  }

  const { user, session, error } = await supabaseServer.auth.getSessionFromUrl(query)

  if (error) {
    return { error }
  }

  // Aquí puedes guardar el usuario en tu base de datos con Prisma si es necesario

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

  return sendRedirect(event, '/app')
})
