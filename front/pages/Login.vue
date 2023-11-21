<!-- <script setup> -->
<script setup lang="ts"> // (4)
  definePageMeta({
    layout: false,
    authenticator: true
  });

  // const navButton = await navigateTo({path: '/'}) // 2) call and navigate after create this page and wee dont see this page
  const router = useRouter()
  const navButton = () => router.push({path: '/'}) // (4)
</script>

<template>
  <p>this is login page</p>
  <!-- <NuxtLink to="/">go to '/'</NuxtLink> --> <!-- 1) this line not replace path  -->
  <!-- <button @click="navButton()">go to '/'</button> --> <!-- (2) -->
  <!-- <button class="border-2" @click="navigateTo({ path: '/' })">go to '/'</button> --> <!-- 3) this line not replace path -->
  <button class="border-2" @click="navButton()">go to '/'</button> <!-- 4) this line has typescript error for call function -->
</template>