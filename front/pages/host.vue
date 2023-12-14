<script setup lang="ts">
  import agent from '~/services/agent'
  const hostInfo = ref({})
  const conf = ref({})

  const hostInformation = async () => {
    const { data } = await useRequest('http://127.0.0.1:8500/v1/agent/self')
    hostInfo.value = data
  }
  console.log('hostInfo console =>', hostInfo)

  const configuration = async () => {
    // const { data } = await agent.configuration()
    // conf.value = data

    // conf.value = await agent.configuration()
    conf.value = await agent.configurationT2()
  }

  // onMounted(() => {
  //   // // info()
  //   // const {data} = useRequest('http://127.0.0.1:8500/v1/agent/self')
  //   // const hostConfiguration = ref({data})
  //   configuration()
  // })
  configuration() 


</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/2 border-4 border-secondary text-primary p-2">
      <span @click="hostInformation()" class="block  text-secondary mb-4">click get host information</span>
      {{ hostInfo }}
    </div>

    <div class="basis-1/2 border-4 border-primary text-secondary p-2">
      <span @click="configuration()" class="block  text-primary mb-4">click get host configuration</span>
      {{ conf }}
    </div>
  </div>
</template>