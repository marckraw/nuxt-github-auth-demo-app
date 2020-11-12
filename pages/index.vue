<template>
  <div class="container">
    <div>
      <div>
        <Logo />
      </div>
      <NuxtLink
        :style="{ margin: '24px', padding: '12px', border: '1px solid black' }"
        to="/login"
        >Login</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
