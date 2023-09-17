<template>
  <h1>Get into contact</h1>
  <p class="text">
    Fill out the form and I will get back <BR></BR> to you within 24 hours.
  </p>
  <ContactForm />
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
    components: { ContactForm }
}
</script>
<style scoped>
section {
  height: 100vh;
  width: 40%;
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  width: 40%;
  padding-top: 5rem;
  margin: 0 auto;
  color: white;
}
.summary {
  width: 40%;
  margin: 0 auto;
}
.text{
    width: 40%;
  margin: 0 auto;
      font-family: 'Poppins';
    color: var(--text);
    display: flex;
    flex-direction: column;
     row-gap: 1rem;
  padding-top: 1.3rem;
}
</style>
