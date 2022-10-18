<template>
  <section>
    <div class="wrapper">
      <h1>My testimonials</h1>

      <div class="container">
        <div class="card panel">Jason Wandrag</div>
        <div class="card">Joshua Steed</div>
        <div class="card">Zachary Williams</div>
        <div class="card panel">Shane Stevens</div>
        <div class="card">Raaid Abdullatief</div>
        <div class="card">Tristan Daniels</div>
      </div>
      <!-- <div class="overlay" alt=""></div> -->
    </div>
    <div class="btn-container">
      <button class="slide-arrow" id="slide-arrow-prev">left</button>
      <button class="slide-arrow" id="slide-arrow-next">right</button>
    </div>
  </section>
</template>
<script>
export default {
  methods() {
   
  },
};
</script>
<style scoped>
section {
  height: 130vh;
}
h1 {
  width: 40%;
  color: white;
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 600;
  margin: 0 auto;
}
.panel{
    scroll-snap-align: start;
}
.card {
  height: 318px;
  min-width: 283px;
  background: var(--panel);
  border-radius: 7px;
  z-index: 1;
  
}
.container {
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
  scroll-snap-type: x mandatory;
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


</style>
