<template>
  <div>
    <div>
      <button @click="createRepository()">Create Repository ?</button>
    </div>
    <div show variant="warning">This is a secure page!</div>
    <div>
      <div>
        <div title="State">
          <pre>{{ state }}</pre>
        </div>
      </div>
      <div>
        <div title="Scopes" class="mb-2">
          User: <span>{{ $auth.hasScope('user') }}</span> Test:
          <span>{{ $auth.hasScope('test') }}</span> Admin:
          <span>{{ $auth.hasScope('admin') }}</span>
        </div>
        <div v-if="$auth.strategy.token" title="token" class="mb-2">
          <div style="white-space: nowrap; overflow: auto">
            {{ $auth.strategy.token.get() || '-' }}
          </div>
        </div>
        <div v-if="$auth.strategy.refreshToken" title="refresh token">
          <div style="white-space: nowrap; overflow: auto">
            {{ $auth.strategy.refreshToken.get() || '-' }}
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <button @click="$auth.fetchUser()">Fetch User</button>
      <button @click="refreshTokens()">Refresh Tokens</button>
      <button @click="$auth.logout()">Logout</button>
      <button @click="check()">CHECK</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted: () => {
    console.log('mounted ?')
  },
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    },
  },
  methods: {
    async createRepository() {
      const token = this.$auth.$storage.getLocalStorage('_token.github')
      console.log(this)
      console.log('##################')
      console.log(
        await this.$axios.get(
          'https://api.github.com/repos/octocat/hello-world'
        )
      )

      // create repo as authenticated user
      // const result = await this.$axios.post(
      //   'https://api.github.com/user/repos',
      //   {
      //     name: 'name of repo 2',
      //   }
      // )

      // get specific repo data
      const result = await this.$axios.get('https://api.github.com/repos/marckraw/nuxt-github-auth-demo-app')

      console.log(result);
    },
    check() {
      console.log(this.$auth.$storage.getLocalStorage('_token.github'))
    },
  },
}
</script>
