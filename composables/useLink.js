export const useLink = () => {
  const links = ref([])

  const getAll = async ({page = 1}) => {
    let endpoint = "/api/link"
    if(page > 1) {
      endpoint = `${endpoint}?page=${page}`
    } 
    const result = await $fetch(endpoint);

    links.value = result;
  }

  const create = async ({link}) => {
    const result = await $fetch("/api/link", {
      method: "POST",
      body: {
        data: link,
      },
    });    
    
    links.value.data.push(result.data)
  
    return result;
  }

  return {
    links,
    getAll,
    create
  }
}
