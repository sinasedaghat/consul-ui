
export const useRequest: typeof useFetch = (request, options?) => {
  // const config = useRuntimeConfig()
  const baseURL = `${import.meta.env.VITE_CONSUL_URL}/v1/`
  const headers = {
    auth: 'sina'
  }

  return useFetch(request, { headers: headers, baseURL: baseURL, ...options })
}