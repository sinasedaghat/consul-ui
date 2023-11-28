<script setup lang="ts">
definePageMeta({
  needAuth: true
});

// console.log('useTemplateStore', useTemplateStore())
// console.log('ENV CONSUL_URL', import.meta.env.VITE_CONSUL_URL)

const text_lower = ref('salam')
const text_upper = ref('SALAM')

const path = ref(`${import.meta.env.VITE_CONSUL_URL}/v1/internal/ui/services?dc=dc1`)
const data = await useConsul(path)

 console.log('data from home ==>', data.value)


//const { data } = await useFetch(path.value)

// const data = await useFetch(path.value)

</script>

<template>
  
  <h1 class="text-3xl font-bold underline">
    home Page in h1 tailwind tag
  </h1>

  <h4>
    text_lower ==> upper :{{ upperCase(text_lower) }}
  </h4>
  <br>
  
  <h4>
    text_upper ==> lower :{{ lowerCase(text_upper) }}
  </h4>
  
  <br>

  {{ data }}
  <br>
  <!-- {{ data }} -->
  <button @click="navigateTo('/dashboard')">go to Dashboard</button>
  <br>
  <button @click="navigateTo('/services')">go to Services</button>
</template>