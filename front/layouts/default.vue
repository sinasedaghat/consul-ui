<template>
  <div class="flex">
    <div class="basis-full h-14 bg-secondary"></div>
  </div>
  <div class="flex h-screen">
    <!-- side bar -->
    <div class="basis-2/12 h-full bg-primary ">
      <!-- 2xl:hidden -->
      <!-- <div 
        class="w-8 h-8 
        bg-red-400
        sm:bg-green-100
        md:bg-green-300
        lg:bg-green-500
        xl:bg-green-700
        2xl:bg-green-900
      "></div> -->
    </div>
    <!-- content -->
    <div class="basis-8/12 p-14">
      <slot />
    </div>

  </div>
</template>
