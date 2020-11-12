<template>
  <div class="container">
    <div>
      <Logo />
      <h3 class="title">github-auth-demo-app</h3>
      <div class="links">
        <button class="button--grey" @click="$auth.loginWith('github')">
          Authorize GitHub (Login with GitHub)
        </button>
      </div>
    </div>
  </div>
</template>

<script>

// const personalAccessTokenFromNetlify = j-v_UjoXJbPhqMO0MjOSfDqtgrX_Wnfy0cgIN3PwZqs


export default {
  computed: {
    redirect () {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback () {
      return Boolean(this.$route.query.callback)
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
