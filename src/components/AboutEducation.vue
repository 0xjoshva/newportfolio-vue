<template>
  <section>
    <div class="container">
      <h1>Education</h1>
      <div class="panels">
        <div class="panel">
          <div class="first">
            <img src="../assets/lifechoices.png" alt="" class="school-img" />
            <div class="info">
              <p class="position">Full Stack Web Development Bootcamp</p>
              <p class="company">Life Choices</p>
            </div>
          </div>
          <div class="details">
            <p class="date">Sep 2022</p>
            <div class="location">
              <img src="../assets/pin.svg" alt="" />
              <p>Lansdowne, Western Cape</p>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="first">
            <img src="../assets/camst.png" alt="" class="school-img" />
            <div class="info">
              <p class="position">Matric Certificate</p>
              <p class="company">Cape Academy</p>
            </div>
          </div>
          <div class="details">
            <p class="date">Dec 2021</p>
            <div class="location">
              <img src="../assets/pin.svg" alt="" />
              <p>Constantia, Western Cape</p>
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
  height: fit-content;
  width: 100%;
  padding-top: 4rem;
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: white;
  padding-bottom: 1.3rem;
}
.container {
  width: 40%;
  margin: 0 auto;
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
.school-img {
  width: 64px;
  height: 64px;
}
.panels {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
