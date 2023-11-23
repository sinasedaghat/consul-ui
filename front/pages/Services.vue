<!-- <script setup lang="ts"> -->
<script setup>
  definePageMeta({
    needAuth: true
  });
  // const data = ref('')
  const createService = async () => {
    console.log('create service function')

    const {data} = await useFetch(
      `/agent/service/register`, {
        method: 'put',
        // query: {
        //   dc: 'dc1'
        // },
        // params: {},
        body: {
          name: 'test 1'
        },
        // headers: {},
        baseURL: 'http://127.0.0.1:8500/v1',
        // timeout: ''

        // transform: (response) => {
        //   // console.log('asaasssaas', response)
        //   return response[0].Name
        // }
      }
    )

    console.log('data', data.value)
    
  }

</script>

<template>
  <h4>Services router</h4>
  <p>this page has list of services</p>
  <p>you can create update od delete service</p>
  <NuxtLink to="/">go to Home</NuxtLink>
  <div>
    <button 
      class="bg-secondary hover:opacity-70 text-white font-bold py-1 px-3 my-2 rounded"
      @click="createService"
    >create sample service</button>
  </div>

  <!-- <div>
    {{ data }}
  </div> -->
</template>