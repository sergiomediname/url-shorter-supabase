// server/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const runtimeConfig = useRuntimeConfig()

const supabaseUrl = runtimeConfig.SUPABASE_URL
const supabaseServiceKey = runtimeConfig.SUPABASE_SERVICE_KEY

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey)
