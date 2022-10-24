<template>
     <nav>
      <router-link to="/" class="router-link logo">joshua</router-link>

      <div class="nav-container">
        <div class="router-links">
          <!-- <router-link to="/tools" class="router-link pages">Tools</router-link> -->
          <!-- <router-link to="/about" class="router-link pages">About</router-link> -->
          <router-link to="/projects" class="router-link pages"
            >Projects</router-link
          >
          <router-link to="/blog" class="router-link pages">Blog</router-link>
        </div>
        <router-link to="/contact" class="router-link button"
          ><p>Hire me</p>
          <!-- <img src="../assets/arrow.svg" alt=""
        /> -->
      </router-link>
      </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: row;
  padding-top: 1.5rem;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
  color: var(--inactive);
  font-family: "Poppins";
  
}
.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.router-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  padding-right: 2.4rem;
}
.logo {
  font-size: 28px;
  font-weight: 600;
}
.pages {
  font-size: 1.1rem;
  font-weight: 400;
}
.button {
  font-size: 1.1rem;
  padding: 0.2rem 1.4rem;
  /* padding-right: 0.8rem; */
  border:2px solid var(--panel);
  color: var(--text);
  border-radius: 30px;
  display: flex;
  column-gap: 0.4rem;
}
.router-link-active {
  color: var(--active);
  font-weight: 500;
}
.router-link{
    transition: all .2s ease-in-out;
    text-align: right;
    color: var(--inactive);
}
.router-link-active{
    font-weight: 500;
    color: var(--active);
}
.router-link:hover{
    color:white;
}
</style>