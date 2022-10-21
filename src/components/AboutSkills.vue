<template>
  <section>
    <div class="container">
      <h1>Skills</h1>

      <div class="skills">
        <div class="design">
          <h3>Design</h3>
          <div class="uiux">
            <div><p>User Experience</p></div>
            <div><p>User Interface</p></div>
          </div>
          <div class="designer">
            <div>
              <p>Web Design</p>
              <img src="../assets/divider.svg" alt="" />
              <p>Responsive Design</p>
            </div>
          </div>
          <div class="testing">
            <div>
              <p>Wireframing</p>
              <img src="../assets/divider.svg" alt="" />
              <p>Prototyping</p>
              <img src="../assets/divider.svg" alt="" />
              <p>Testing</p>
            </div>
          </div>
        </div>
        <div class="development">
          <h3>Development</h3>
          <div class="basics">
           <div class="htmlcssjs">
            <p>HTML</p>
            <img src="../assets/Divider2.svg" alt="">
            <p>CSS</p>
            <img src="../assets/Divider2.svg" alt="">
            <p>JavaScript</p>
           </div>
           <div class="sql">
             <p>MySQL</p>
           </div>
          </div>
          <div class="jsframeworks">
            <div>
              <p>Vue JS</p>
              <img src="../assets/divider.svg" alt="" />
              <p>Node JS</p>
            </div>
          </div>
          <div class="other">
            <div><p>Bootstrap</p></div>
            <div><p>REST APIs</p></div>
            <div><p>Git</p></div>
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
  font-family: "Poppins";
}
.container {
  width: 40%;
  margin: 0 auto;
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: white;
  padding-bottom: 1.3rem;
}
.skills {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 1rem;
}
h3 {
  font-size: 1rem;
  color: var(--text);
  font-weight: 500;
}
.design {
  width: 404px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
.uiux {
  color: white;
  display: flex;
  column-gap: 0.5rem;
  width: 100%;
}
.uiux > div {
  background: var(--panel);
  width: 50%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.uiux > div:nth-child(1) {
  border-top-left-radius: 12px;
}
.uiux > div:nth-child(2) {
  border-top-right-radius: 12px;
}
.designer {
  width: 100%;
}
.designer > div {
  display: flex;
  color: white;
  height: 74px;
  background: var(--panel);
  justify-content: space-around;
  align-items: center;
}
.designer p {
  width: 50%;
  text-align: center;
}
.testing {
  height: 74px;
  background: var(--panel);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  
}
.testing > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.4rem;
  color: white;
}
.basics{
  display: flex;
  
}
.development{
  display: flex;
  flex-direction: column;
  row-gap:.5rem;
}
.htmlcssjs{
  display: flex;
  height: 74px;
  background: var(--panel);
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem;
  width: 294px;
  color: white;
  border-top-left-radius: 12px;
}
.sql{
  margin-left: .5rem;
  background: var(--panel);
  color: white;
  height: 74px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: fit-content;
  display: flex;
  align-items: center;
  border-top-right-radius: 12px;
}

.jsframeworks {
  width: 100%;
}
.jsframeworks > div {
  display: flex;
  color: white;
  height: 74px;
  background: var(--panel);
  justify-content: space-around;
  align-items: center;
}
.jsframeworks p {
  width: 50%;
  text-align: center;
}
.other{
  width: 100%;
  display: flex;
  column-gap: .5rem;
  height: 74px;
  justify-content: space-between;
  
  align-items: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.other > div{
background: var(--panel);
height: 75px;
display: flex;
align-items: center;
justify-content: center;
color: white;
padding: 1.4rem;
width: 33.3%;
}
.other > div:nth-child(1){
  border-bottom-left-radius: 12px;
}
.other > div:nth-child(3){
  border-bottom-right-radius: 12px;
}
</style>
