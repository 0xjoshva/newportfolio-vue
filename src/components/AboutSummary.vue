<template>
  <section>
    <div class="summary">
    <!-- <h1 id="header">Summary</h1> -->
    <div class="paragraphs">
    <p>
      I am an aspiring web developer who is creative, self-motivated and
      ambitious. I enjoy creating useful tools that add value and I am always up
      for a challenge.
    </p>
    <p>
      My goal is to be able to use my coding skills in a way that is useful,
      efficient and effective – to improve my coding aptitude, and to build on
      my knowledge of the ICT industry.
    </p>
    <p>
      Though I don’t have that much experience, I’ve done multiple projects both
      individually and within a group during my 6 months at Life Choices. I’m
      always eager to learn and constantly improve myself so that I can go on to
      be a valuable asset to a company, and help in achieving its overall goals.
    </p>
    </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section{
  height: fit-content;
  width: 100%;
}
.summary{
  width: 40%;
  margin: 0 auto;
}
#header{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 26px;
color: white;
}
.paragraphs{
    font-family: 'Poppins';
    color: var(--text);
    display: flex;
    flex-direction: column;
     row-gap: 1rem;
  padding-top: 1.3rem;
}
</style>
