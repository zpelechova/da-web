<template>
    <div class="">
      
     
      <p>Tohle jsou moje lesy.</p>
      <div>
        <MujLes />
      </div>
    </div>
</template>

<script>
  import Les from "./components/Les.vue"

  export default {
      name: "App",
      components: {
        MujLes: Les
      }
  } 
</script>

<style>
  
  
</style>
