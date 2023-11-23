<!-- <script setup> -->
<script setup lang="ts"> // (4)
  definePageMeta({
    layout: false,
    authenticator: true
  });

  // const navButton = await navigateTo({path: '/'}) // 2) call and navigate after create this page and wee dont see this page
  const router = useRouter()
  const navButton = () => router.push({path: '/'}) // (4)
  // const removeItem = () => localStorage.removeItem('token')
  const setItem = () => {
    localStorage.setItem('token', 'token_value')
    navigateTo('/')
  }
  //----------------------------------

  type LoginForm = {
    username: string
    password: string
    rememberMe: boolean
  } 

  const loginForm: Ref<LoginForm> = ref({
    username: '',
    password: '',
    rememberMe: false
  })

  const logIn = () => {
    localStorage.setItem('token', `${loginForm.value.username}-${loginForm.value.password}-${loginForm.value.rememberMe}`)
    navigateTo('/')
  }

</script>

<template>
  <div v-if="false">
    <p>this is login page</p>
    <!-- <NuxtLink to="/">go to '/'</NuxtLink> --> <!-- 1) this line not replace path  -->
    <!-- <button @click="navButton()">go to '/'</button> --> <!-- (2) -->
    <!-- <button class="border-2" @click="navigateTo({ path: '/' })">go to '/'</button> --> <!-- 3) this line not replace path -->
    <button class="border-2 mx-5" @click="navButton()">go to '/'</button> <!-- 4) this line has typescript error for call function -->
    <!-- <button class="border-2 mx-5" @click="removeItem()">remove token</button> -->
    <button class="border-2 mx-5" @click="setItem()">set token</button>
  </div>  

  <div class="flex flex-row-reverse flex-wrap h-screen">
    <!-- #form -->
    <div class="basis-1/3 h-full border-2 px-9 py-32">
      <form>
        <!-- #username -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input 
            v-model="loginForm.username"
            class="
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            " 
            id="username" 
            type="text" 
            placeholder="Username"
          >
        </div>
        <!-- #password -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input 
            v-model="loginForm.password"
            class="
              shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            " 
            id="password" 
            type="text" 
            placeholder="Password"
          >
        </div>
        <!-- #remember -->
        <div class="mb-6">
          <label class="md:w-2/3 blockt text-gray-700 text-sm font-bold">
            <input
              v-model="loginForm.rememberMe"
              class="mr-2 leading-tight" 
              id="rememberMe" 
              type="checkbox" 
            >
            <span class="text-sm">
              Remember Me
            </span>
          </label>
        </div>
      </form>
      <!-- #button -->
      <div>
        <button
          class="bg-primary hover:opacity-70 text-white font-bold py-1 px-3 my-2 rounded"
          @click="logIn"
        >log in</button>
      </div>
    </div>
    
    
    
    
    
    
    <!-- #image -->
    <div class="basis-2/3"></div>
  </div>











</template>