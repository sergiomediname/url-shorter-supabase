import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const supabaseUrl = runtimeConfig.public.SUPABASE_URL
  const supabaseAnonKey = runtimeConfig.public.SUPABASE_ANON_KEY

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  return {
    provide: {
      supabase
    }
  }
})
