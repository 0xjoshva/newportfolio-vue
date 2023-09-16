<template>
  <section>
    <div class="container">
      <div
        class="item"
        v-for="project in projects"
        :key="project.id"
        ref="item"
        @mouseover="hover = project.id"
        @mouseleave="hover = null"
        @click="redirectToLink(project.link)"
      >
        <div class="wrapper">
          <img v-bind:src="project.image" alt="logo" class="logo" />
        </div>
        <div class="info">
          <p class="project">{{ project.name }}</p>

          <p class="description">{{ project.description }}</p>
        </div>
        <svg
          v-if="hover === project.id"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right move"
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
        <svg
          v-else="hover !== project.id"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-right invisible"
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
      <div class="center">
        <h3>Thats all my featured projects</h3>
        <p>
          I only listed projects that I have completed, alot of them are still works in progress. My GitHub is linked below — you can use that to see more of my
          work.
        </p>
        <a href="https://github.com/0xjoshva?tab=repositories" target="_blank"
          >Check my github <img src="../assets/arrowlong.svg" alt=""
        /></a>
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
          name: "Card Game",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/CARDS.svg",
          description:
            "A card game for one player, drawing cards to win rounds against a computer.",
          link: "https://codepen.io/0xjoshva/full/GRXdodb",
        },
        {
          id: 2,
          name: "Tip Calculator",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/CALCuu.svg",
          description:
            "A handy tip calculator app to quickly and accurately calculate tips for your dining bills.",
          link: "https://admirable-begonia-dfe568.netlify.app/"
        },
        {
          id: 3,
          name: "Pomodoro Timer",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/timer-icon.png",
          description:
            "A timer with dynamic settings and a progress circle display, perfect for work or study.",
          link: "https://codepen.io/0xjoshva/full/YzOyJmm",
        },
        {
          id: 4,
          name: "Quote Generator",
          image:
            "https://github.com/0xjoshva/newportfolio-vue/blob/main/src/assets/twitter.png?raw=true",
          description: "A tool for generating random quotes in a single click.",
          link: "https://admirable-dodol-162f1a.netlify.app/"
        },
      ],
    };
    return {
      hover: false,
      visibleClass: "visible",
      invisibleClass: "invisible",
    };
  },

  methods: {
    redirectToLink(link) {
      window.open(link, "_blank");
    },
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
  height: 9rem;
  color: white;
  background: var(--panel);
  border-radius: 8px;
  transition: 0.1s transform ease-in-out, 0.4s box-shadow ease-in-out,
    0.1s scale ease-in-out, 0.3s filter ease-in-out;
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
  width: auto;
  height: 53px;
  display: flex;
  align-self: center;
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
svg {
  filter: opacity(0.2);
}
.info {
  width: 60%;
  font-family: "Poppins";
  position: relative;
}
.info .project {
  font-weight: 500;
  font-size: 1.3rem;
}
.description {
  margin-top: 0.4rem;
  color: var(--text);
  font-size: 1rem;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.center h3 {
  font-family: "poppins";
  color: white;
  font-weight: 500;
  font-size: 1.6rem;
  padding-top: 5rem;
}
.center p {
  text-align: center;
  width: 60%;
  font-family: "poppins";
  color: var(--text);
  margin-top: 0.6rem;
}
.center a {
  margin-top: 1rem;
  font-family: "poppins";
  font-size: 1.2rem;
  text-decoration: none;
  color: #7c7cdf;
  font-weight: 600;
  display: flex;
  column-gap: 0.4rem;
  transition: all ease-in-out 0.1s;
}
.center a:hover {
  column-gap: 0.8rem;
}

.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.move {
  animation: 0.2s linear jumpfade;
}
@keyframes jumpfade {
  0% {
    transform: translateX(-20px) scale(10%);

    opacity: 0;
  }
  50% {
    transform: translateX(-10px) scale(10%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px) scale(100%);
    opacity: 1;
  }
}
</style>
