<template>
  <section>
    <div class="wrapper">
      <h1>My testimonials</h1>

      <div ref="container" id="container">
        <div class="card"></div>
        <div v-for="card in cards" v-bind:key="card.id" class="card">{{card.name}}</div>
        <div class="card"></div>
      </div>
      <div class="overlay" alt=""></div>
    </div>
    <div class="buttoncontainer">
      <button @click="prev()"><img src="../assets/prev.svg" alt="" /></button>
      <button @click="next()"><img src="../assets/next.svg" alt="" /></button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Jason Wandrag",
          message: " Joshua Steed has shown great dedication to constantly improving himself and his work. He is consistent and hardworking, which shows in the quality of work he produces. ",
        },
        {
          id: 2,
          name: 'Vusumzi Msengana',
          message: "Joshua is a hardworking and consistent person, he likes thinking outside the box and has great creative abilities."
        },
        {
          id: 3,
          name: "Lihle Goliath",
          message: "Focused and diligent to his work. Has a great eye for creativity and visualization towards his ideas, this means he knows what he want in life. He would be a great assert wherever he goes.",
        },
        {
          id: 4,
          name: "Sindile Kula",
          message: "Joshua is a bright young man with a creative mind. He like to accomplish things at his own pace and according to his own preferences. He is highly diligent and hardworking when it comes to his career.",
        },
        {
          id: 5,
          name: "Raaid Abdullatief",
          message: "One of the most hardworking and committed people I've worked with. You can see the passion in his projects as you scroll down the page. Always a pleasure to work with. ",
        },
        {
          id: 6,
          name: "Tristan Daniels",
          message: " Joshua is a passionate and goal-driven person. He always focuses on the task at hand and works to the best of his ability.",
        },
      ],
    };
  },
  methods: {
    prev() {
      this.$refs.container.scrollLeft -= 295;
    },
    next() {
      this.$refs.container.scrollLeft += 295;
    },
  },
};
</script>
<style scoped>
section {
  height: 50vh;
}
h1 {
  width: 40%;
  color: white;
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 600;
  margin: 0 auto;
}
.panel {
  scroll-snap-align: start;
}
.card {
  height: 318px;
  min-width: 283px;
  background: var(--panel);
  border-radius: 7px;
  z-index: 1;
}
#container {
  display: flex;
  width: fit-content;
  max-width: 935px;
  column-gap: 2rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  position: relative;
  z-index: 0 !important;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
#container::-webkit-scrollbar {
  display: none;
}
.overlay {
  position: relative;
  margin: 0 auto;
  top: -318px;
  width: 935px;
  height: 318px;
  background: linear-gradient(
    90deg,
    #232339 7.01%,
    rgba(35, 35, 57, 0.83) 20.37%,
    rgba(35, 35, 57, 0) 38.01%,
    rgba(35, 35, 57, 0) 64.77%,
    rgba(35, 35, 57, 0.86) 82.56%,
    #232339 95.67%
  );
}
.btn-container {
  display: flex;
}
.buttoncontainer {
  display: flex;
  width: 40%;
  margin: 0 auto;
  justify-content: space-between;
}
.buttoncontainer button {
  background: none;
  outline: none;
  border: none;
  position: relative;
  z-index: 10 !important;
  color: white;
  top: -31rem;
  transition: 0.1s all ease-in-out;
}
.buttoncontainer button:active {
  transform: scale(1.3);
}
.buttoncontainer button:hover {
  
}
</style>
