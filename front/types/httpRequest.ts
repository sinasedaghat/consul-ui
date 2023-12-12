type Method = "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace" 

export type HTTTPRequest = {
  path: string, 
  method: Method, 
  transform: (response: unknown) => any, 
  body?: {[key:string]: any},
  query?: {[key:string]: any}
}

