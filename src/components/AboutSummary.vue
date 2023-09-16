<template>
  <section>
    <div class="summary">
      <!-- <h1 id="header">Summary</h1> -->
      <div class="paragraphs">
        <p>
          I am a self starter with a passion for development <br> view my full
          <a href="./" target="_blank">resume here</a>.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  height: fit-content;
  width: 100%;
}
.summary {
  width: 40%;
  margin: 0 auto;
}
#header {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: white;
}
.paragraphs {
  font-family: "Poppins";
  color: var(--text);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 1.3rem;
}
a {
  color: #6565cf;
}
</style>
