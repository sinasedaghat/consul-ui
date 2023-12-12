// import { HTTTPRequest } from "~/types/

// export default async function (
//    HTTTPRequest,
//   // path: string, 
//   // method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace", 
//   // transform: (response: unknown) => any, 
//   // body?: {},
//   // query?: {}
// ) {
//   const headers = {
//     auth: 'sina'
//   }
//   const baseURL = `${import.meta.env.VITE_CONSUL_URL}/v1/`
  
//   const { data }  = await useFetch(
//     path,
//     {
//       method: method,
//       query: query,
//       body: body,
//       headers: headers,
//       baseURL: baseURL,
    
//       transform: (response) => {
//         transform(response)
        
//       }
//     }
//   )
//   return data
// }



export default async function (
  path: string, 
  method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace", 
  transform: (response: unknown) => any, 
  body?: {},
  query?: {}
) {
  const headers = {
    auth: 'sina'
  }
  const baseURL = `${import.meta.env.VITE_CONSUL_URL}/v1/`
  
  const { data } = await useFetch(
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
  return { data }
  
}
