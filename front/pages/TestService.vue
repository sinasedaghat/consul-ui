<script setup lang="ts">
import test from "~/services/test"
const x = new test()


// x.createUrl('test')

const data = await x.callComposable()
console.log('data from TestService route ==>', data)

// console.log(x.#paths)



</script>

<template>

  {{ data }}
</template>