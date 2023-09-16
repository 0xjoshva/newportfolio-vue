<template>
  <section>
    <div class="container">
      <h1>Experience</h1>

      <div class="panel">
        <div class="first">
          <img src="../assets/justsolve-logo.png" alt="" class="company-img" />
          <div class="info">
            <p class="position">Intern Software Developer</p>
            <p class="company">JustSolve</p>
          </div>
        </div>
        <div class="details">
          <p class="date">Jan 2023 - Present</p>
          <div class="location">
            <img src="../assets/pin.svg" alt="" />
            <p>Pretoria, Gauteng (Remote)</p>
          </div>
        </div>
      </div>

      <div class="panels">
        <div class="panel">
          <div class="first">
            <img src="../assets/lcstudio.png" alt="" />
            <div class="info">
              <p class="position">Intern Web Developer</p>
              <p class="company">LC Studio</p>
            </div>
          </div>
          <div class="details">
            <p class="date">Sep 2022 - Dec 2022</p>
            <div class="location">
              <img src="../assets/pin.svg" alt="" />
              <p>Lansdowne, Western Cape</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  padding-top: 4rem;
}
.container {
  width: 40%;
  margin: 0 auto;
}
.panels {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 1.3rem;
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: white;
  padding-bottom: 1.3rem;
}
.panel {
  background: var(--panel);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  font-family: "Poppins";
  border-radius: 12px;
}
.details {
  color: var(--text);
  text-align: right;
}
.location {
  display: flex;
  column-gap: 0.3rem;
  font-size: 12.5px;
}
.first {
  display: flex;
  column-gap: 1rem;
}
.position {
  color: var(--inactive);
}
.company {
  font-size: 18px;
  font-weight: 500;
  color: var(--active);
}
.company-img {
  width: 64px;
  height: 64px;
  border-radius: 4px;
}
</style>
