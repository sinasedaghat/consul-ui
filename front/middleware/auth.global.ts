export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem('token')

  if(to.meta.authenticator && Boolean(token)) return navigateTo('/')

  if(to.meta.needAuth && !Boolean(token)) return navigateTo('/login')

  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // // In a real app you would probably not redirect every route to `/`
  // // however it is important to check `to.path` before redirecting or you
  // // might get an infinite redirect loop
  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
  
  
  // OLD VERSION
  // if(to.meta.authenticator && Boolean(token)) {
  //   console.log('hook 1 login, token')
  //   return navigateTo('/')
  // }
  // else if(to.meta.authenticator && !Boolean(token)) {
  //   console.log('hook 2 !token', )
  //   // return navigateTo(to.path)
  // }
  // else if(to.meta.needAuth && Boolean(token)) {
  //   console.log('hook 3 home, token')
  //   // return navigateTo(to.path)
  // }
  // else if(to.meta.needAuth && !Boolean(token)) {
  //   console.log('hook 4 login, !token')
  //   return navigateTo('/login')
  // }
  // else {
  //   console.log('hook 5')
  //   return abortNavigation()
  // }



  
})
