// It will be available as useFoo() (camelCase of file name without extension)
export default async function () {
  const headers = {}
  const baseURL = ''
  
  const path = ''
  const method = 'get'
  const query = {}
  const body = {}
  const transform = (response: unknown) => {
    console.log('response from transform function', response)
  }
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
