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

  console.log('sssss', hostInfo)
  onMounted(() => {
    info()
  })
</script>

<template>
  {{ hostInfo }}
</template>