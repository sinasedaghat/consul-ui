// It will be available as useFoo() (camelCase of file name without extension)
export default async function (path: string, method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace", transform: (response: unknown) => any, body?: {}, query?: {}) {
  console.log('hi you are in useTest Composable')
  const headers = {
    auth: 'sina'
  }
  const baseURL = `${import.meta.env.VITE_CONSUL_URL}/v1/`
  
  // const path = ''
  // const method = 'get'
  // const query = {}
  // const body = {}
  // const transform = (response: unknown) => {
  //   console.log('response from transform function in useTest Composable', response)
  // }
  const { data }  = await useFetch(
    path,
    {
      method: method,
      query: query,
      body: body,
      headers: headers,
      baseURL: baseURL,
    
      transform: (response) => {
        transform(response)
        
      }
    }
  )
  return data
}
