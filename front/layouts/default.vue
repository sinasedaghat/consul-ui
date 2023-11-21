<template>
  <div class="flex">
    <div class="basis-full h-14 bg-secondary"></div>
  </div>
  <div class="flex h-screen">
    <!-- side bar -->
    <div class="basis-2/12 h-full bg-primary sm:hidden">
    </div>
    <!-- content -->
    <div class="basis-8/12 p-14">
      <slot />
    </div>

  </div>
</template>
