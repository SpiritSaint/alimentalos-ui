<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-large md-dense md-primary">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
              </md-button>

              <span class="md-title">My Title</span>
            </div>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>
            </div>
          </div>

          <div class="md-toolbar-row">
            <md-tabs class="md-primary">
              <md-tab id="tab-home" md-label="Home"></md-tab>
              <md-tab id="tab-pages" md-label="Pages"></md-tab>
              <md-tab id="tab-posts" md-label="Posts"></md-tab>
              <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
            </md-tabs>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-primary" md-elevation="5">
            Navegación
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
              </md-avatar>

              <span class="md-list-item-text">Ian Torres</span>
            </md-list-item>
            <md-subheader>Reino</md-subheader>
            <md-list-item @click="navigate('/pets')">
              <md-icon>pets</md-icon>
              <span class="md-list-item-text">Animales</span>
            </md-list-item>
            <md-list-item @click="navigate('/plants')">
              <md-icon>local_florist</md-icon>
              <span class="md-list-item-text">Vegetales</span>
            </md-list-item>
            <md-divider></md-divider>
            <md-subheader>Mundo</md-subheader>

            <md-list-item @click="navigate('/map')">
              <md-icon>map</md-icon>
              <span class="md-list-item-text">Mapa</span>
            </md-list-item>

            <md-list-item @click="navigate('/issues')">
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Incidentes</span>
            </md-list-item>

            <md-list-item @click="navigate('/places')">
              <md-icon>place</md-icon>
              <span class="md-list-item-text">Lugares</span>
            </md-list-item>
            <md-divider></md-divider>
            <md-subheader>Comunidad</md-subheader>

            <md-list-item @click="navigate('/leaders')">
              <md-icon>trending_up</md-icon>
              <span class="md-list-item-text">Líderes</span>
            </md-list-item>

            <md-list-item @click="navigate('/users')">
              <md-icon>people</md-icon>
              <span class="md-list-item-text">Colaboradores</span>
            </md-list-item>
            <md-divider></md-divider>
            <md-subheader>Configuración</md-subheader>

            <md-list-item @click="navigate('/settings/security')">
              <md-icon>lock</md-icon>
              <span class="md-list-item-text">Seguridad</span>
            </md-list-item>

            <md-list-item @click="navigate('/settings/privacy')">
              <md-icon>perm_identity</md-icon>
              <span class="md-list-item-text">Privacidad</span>
            </md-list-item>

            <md-list-item @click="navigate('/logout')">
              <md-icon>exit_to_app</md-icon>
              <span class="md-list-item-text">Salir</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <router-view/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuVisible: true
    }
  },
  methods: {
    navigate (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
  .page-container {
    height: 100vh;
  }
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 400px;
    max-width: calc(100vw - 125px);
  }
</style>
