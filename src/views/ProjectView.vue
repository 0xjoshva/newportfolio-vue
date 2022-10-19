<template>
  <div class="heading">
  <h1>My projects</h1>
  <p>
    I picked out projects I am most proud of <br />
    and enjoyed the most
  </p>
  </div>
  <ProjectComponent />
</template>
<script>
import ProjectComponent from "@/components/ProjectComponent.vue";
export default {
  components: {
    ProjectComponent,
  },
};
</script>
<style scoped>
.heading{
    width: 40%;
    margin: 0 auto;
    padding-top: 5rem;
}
.heading h1{
 color: white;
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 600;
}
.heading p{
  padding-top: 1.3rem;
  color: var(--text);
  font-family: "Poppins";
}
</style>
