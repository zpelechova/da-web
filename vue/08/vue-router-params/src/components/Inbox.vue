<template>
<div class="emails">
  <h1>Emaily</h1>
  <ul>
    <li v-for="email in emaily" :key="email"> 
      {{ email }}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
name: "Inbox",
date() {
  return {
    emails: emails
  }
}
}
</script>

<style>

</style>script