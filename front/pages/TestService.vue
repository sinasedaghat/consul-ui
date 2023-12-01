<script setup lang="ts">
import test from "~/services/test"
const x = new test()


// x.createUrl('test')

const data = await x.callComposable()
console.log('data from TestService route ==>', data)

// console.log(x.#paths)


x.callWithTestComposable()

const createService = (name: string) => {
  x.createService(name)
}

</script>

<template>

<div>
    <button 
      class="bg-secondary hover:opacity-70 text-white font-bold py-1 px-3 my-2 rounded"
      @click="createService('create Service with service class')"
    >create sample service</button>
  </div>


  <button></button>
</template>