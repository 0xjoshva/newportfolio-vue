<template>
  <Footer>
    <div class="container">
      <div class="info">
        <div class="icons">
          <a href="https://www.linkedin.com/in/0xjoshuasteed/" target="_blank"><img src="../assets/linkedin.svg" alt="" /></a>
          <a href="https://github.com/0xjoshva" target="_blank"><img src="../assets/github.svg" alt="" /></a>
        </div>
        <div class="contact">
          <p>cape town, western cape</p>
          <a href="mailto:joshuasteed123@gmail.com" id="email"
            >joshuasteed123@gmail.com</a
          >
          <a href="tel:0624597048">+27 62 459 7048</a>
        </div>
      </div>
      <div class="nav">
        <router-link to="/" class="router-link">Home</router-link>
        <!-- <router-link to="blog" class="router-link">Blog</router-link> -->
        <router-link to="/projects" class="router-link">Projects</router-link>
        <!-- <router-link to="/tools" class="router-link">Tools</router-link> -->
        <router-link to="/about" class="router-link">About</router-link>
        <router-link to="/contact" class="router-link">Contact</router-link>
      </div>
    </div>
  </Footer>
  <div class="right">
    <p>built by me with</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      viewBox="0 0 512 512"
      class="transition-all hover:text-red-400 transform hover:scale-125 hover:-translate-y-1 inline-block"
    >
      <path
        d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
Footer {
  margin-top: 5rem;
  height: 15rem;
  width: 100%;
  background: #2a2a40;
}
.container {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 auto;
  height: 100%;
}
a {
  text-decoration: none;
  color: white;
}
.nav {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  font-family: "Poppins";
  color: white;
  font-size: 18px;
  height: fit-content;
  width: fit-content;
  align-self: center;
}
.router-link {
  transition: all 0.2s ease-in-out;
  text-align: right;
  color: var(--inactive);
}
.router-link-active {
  font-weight: 500;
  color: var(--active);
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b8b98;
  column-gap: 0.4rem;
}
.right p {
  font-size: 1rem;
  color: #8b8b98;
  padding-block: 1rem;
  text-align: center;
  font-family: "Poppins";
}
.icons {
  display: flex;
  flex-direction: row;
  align-content: center;
  column-gap: 0.5rem;
  margin-bottom: 1rem;
  align-self: center;
  height: fit-content;
  width: fit-content;
}
.icons a {
  width: fit-content;
  height: fit-content;
  transition: all 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.icons a:hover {
  filter: brightness(150%);
}
.dribble {
  display: flex;
  align-self: center;
}
.info {
  height: fit-content;
  width: fit-content;
  align-content: center;
  justify-content: center;
  padding-top: 2.2rem;
}
.contact a {
  color: var(--inactive);
  font-family: "Poppins";
  font-weight: 500;
}
.contact p {
  color: var(--inactive);
  font-family: "Poppins";
  font-weight: 500;
}
.contact a:hover {
  text-decoration: underline;
}
.contact {
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
  font-size: 1rem;
}
.router-link:hover {
  color: white;
}
.heart {
  font-size: 20px;
}
</style>
