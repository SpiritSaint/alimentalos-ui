<template>

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">Inicio</span>
          </div>
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
        <div class="md-layout md-gutter md-alignment-center">
          <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card-header>
              <md-avatar>
                <img src="https://images.dog.ceo/breeds/puggle/IMG_144409.jpg" alt="Avatar">
              </md-avatar>

              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
              <img src="https://images.dog.ceo/breeds/puggle/IMG_144409.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card-header>
              <md-avatar>
                <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="Avatar">
              </md-avatar>

              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
              <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card-header>
              <md-avatar>
                <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="Avatar">
              </md-avatar>

              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
              <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card-header>
              <md-avatar>
                <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="Avatar">
              </md-avatar>

              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
              <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card-header>
              <md-avatar>
                <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="Avatar">
              </md-avatar>

              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
              <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
          <md-card class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card-header>
              <md-avatar>
                <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="Avatar">
              </md-avatar>

              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-media>
              <img src="https://images.dog.ceo/breeds/dingo/n02115641_9455.jpg" alt="People">
            </md-card-media>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    navigate (route) {
      this.$router.push(route)
    }
  }
}
</script>
