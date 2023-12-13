<script setup lang="ts">
  import agent from '~/services/agent'
  const hostInfo = ref({})
  // const hostInfo: unknown
  const info = async () => {
    // hostInfo = await agent.hostInformation()
    console.log('Mounted call')
    const { data: hostInfo } = await agent.hostInformation()
    console.log('hostInfo form onMounted()', hostInfo)
  }

 const { data } = useFetch('http://127.0.0.1:8500/v1/agent/host')  
 const { data: dataRequest } = useRequest('http://127.0.0.1:8500/v1/agent/host')  

  console.log('sssss', hostInfo)
  onMounted(() => {
    info()
  })
</script>

<template>
  {{ hostInfo }} <!-- not work -->
  <hr>
  <!-- {{ data }} -->
  <hr>
  {{ dataRequest }}
</template>