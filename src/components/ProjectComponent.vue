<template>
  <section>
    <div class="container">
      <div class="item" v-for="project in projects" v-bind:key="project.id" ref="item"  @mouseover="hover = project.id"
    @mouseleave="hover = null">
        <div class="wrapper">
          <img v-bind:src="project.image" alt="logo" class="logo" />
        </div>

        <p class="project">{{project.name}}</p>
        <svg v-show="hover === project.id"
        
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right"
          filter="opacity(.3)"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#FFFFFF"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Crypto Exchange",
          image:
            "https://raw.githubusercontent.com/0xjoshva/cryptoexchange/main/src/assets/logo2.png",
        },
        {
          id: 2,
          name: "E-Commerce",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/a9e221a29778e5771a2617991bec29f74259f253/src/assets/ecommerce.svg",
        },
        {
          id: 3,
          name: "Real Estate",
          image:
            "https://github.com/0xjoshva/newportfolio-vue/blob/main/src/assets/newreal.png?raw=true",
        },
        {
          id: 4,
          name: "Social Media",
          image:
            "https://github.com/0xjoshva/newportfolio-vue/blob/main/src/assets/twitter.png?raw=true",
        },
      ],
  
    }
        return {
      hover: false,
    }
  },


  methods: {
  
  },
};
</script>
<style scoped>
section {
  height: fit-content;
  width: 100%;
}
.container {
  width: 40%;
  height: fit-content;
  margin: 0 auto;
  padding-top: 1.3rem;
  display: flex;

  flex-direction: column;
  row-gap: 2rem;
}
.item {
  width: 100%;
  height: 8.3rem;
  color: white;
  background: var(--panel);
  border-radius: 8px;
  transition: 0.1s transform ease-in-out,
    0.4s box-shadow ease-in-out, 0.1s scale ease-in-out, 0.3s filter ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  cursor: pointer;
}

.item:hover {
  filter: brightness(110%);
}
.item:active {
  transform: translate(20px, 0px);

  box-shadow: -8px 8px 0px 0px #1b1b3062;
}
.icon .icon-tabler .icon-tabler-chevron-right {
}
.logo {
  width: 46px;
  height: 46px;
  display: flex;
  align-self: center;
  filter: brightness(1000%);
}
.wrapper {
  width: 15%;
  height: 100%;
  background: rgba(255, 255, 255, 0.041);
  display: flex;
  justify-content: center;
  align-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.logo:nth-of-type(4) {
  width: 46px;
  height: 46px;
}
svg{
  filter: opacity(.2);

}
</style>
