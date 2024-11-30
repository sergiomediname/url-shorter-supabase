export const useSupabase = () => {
  const supabase = useNuxtApp().$supabase

  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    console.log("==================== Entra");

    if (error) throw new Error(error.message)
      console.log("==================== Entra data");
      
    return data
  }

  return {
    supabase,
    loginWithGoogle
  }
}
