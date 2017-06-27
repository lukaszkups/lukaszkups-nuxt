<template>
  <div>
    <div class="menu">
      <div class="menu-container">
        <div class="col menu-col">
          <nav>
            <ul>
              <li v-for="(button, index) in menuButtons" :key="index" @mouseover="updateDescription(index)" @mouseleave="resetDescription">
                <nuxt-link :to="button.url" exact>{{ button.title }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col active-col">
          <h2>{{ menuHoverTitle }}</h2>
          <p>{{ menuHoverDescription }}</p>
        </div>
        <div class="col status-col">
            <h2>{{ currentStatus }}</h2>
            <p>Front-end developer <a class="red" href="http://influenster.com">@Influenster</a>. Web crafter. Making things around the web since 2009.</p>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuButtons: [
        { title: 'Home', description: 'Welcome, fellow traveller.', url: '/', name: 'index' },
        { title: 'About', description: 'Learn more about me.', url: '/about', name: 'about' },
        { title: 'Notes', description: 'Collection of my writings.', url: '/notes', name: 'notes' },
        { title: 'Work', description: 'Check my experience.', url: '/work', name: 'work' }
      ],
      menuHoverTitle: '',
      menuHoverDescription: '',
      currentStatus: 'Current status'
    }
  },
  methods: {
    updateDescription (index) {
      this.menuHoverTitle = this.menuButtons[index].title
      this.menuHoverDescription = this.menuButtons[index].description
    },
    resetDescription () {
      const descObj = this.getDefaultDescription()
      this.menuHoverTitle = descObj.title
      this.menuHoverDescription = descObj.description
    },
    getDefaultDescription () {
      return this.menuButtons.filter(obj => {
        return obj.name === this.$route.name
      })[0] || this.menuButtons[0]
    }
  },
  created () {
    this.resetDescription()
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

.menu {
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 30px;
  width: 100%;
  clear: both;
  height: 0px;
  background-color: $dark-blue;
  color: #fff;
  overflow: hidden;
  height: 300px;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: $monospace-font-family;
  letter-spacing: 0.8px;
}

.menu-container {
  display: flex;
  margin: 0 auto;
  clear: both;
  float: none;
  width: $content-width;
}

.menu .col {
  flex: 1;
}

.menu-col {
  flex-shrink: 0;
}

nav ul {
  list-style-type: none;
  margin: 70px 0 0 0;
  padding: 0;
}

nav ul li {
  display: block;
  clear: both;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  display: block;
  clear: both;
  width: 100%;
  font-size: $font-size-2;
  cursor: pointer; 
  outline: none;
}

nav a:hover, nav a.nuxt-link-active {
  text-decoration: underline;
  color: $red;
}

.active-col h2 , .status-col h2 {
  font-size: $font-size-2;
  margin-top: 80px;
  margin-bottom: 10px;
  color: $red;
  text-decoration: underline;
}

.status-col h2 {
  color: #fff;
  text-decoration: none;
  font-size: $font-size-2;
}

.status-col p, .active-col p{
  font-size: $font-size-1;
  line-height: 1.25em;
  letter-spacing: 0.3px;
}

a.red {
  color: $red;
  text-decoration: none;
}

a.red:hover {
  text-decoration: underline;
}

</style>
