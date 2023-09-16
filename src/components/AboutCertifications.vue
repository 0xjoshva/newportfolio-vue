<template>
  <section>
    <div class="container">
      <h1 id="header">Certifications</h1>
      <div class="wrapper">
        <div class="icontainer">
          <div class="item">
            <div class="front card-content front2">
              <div class="head">
                <img src="../assets/aws.png" alt="" />
                <p class="title">Amazon Web Services</p>
              </div>
              <div class="details">
                <p class="course">Cloud Practitioner</p>
                <p class="date">Dec 2022</p>
              </div>
            </div>
            <div class="back card-content back2">
              <ul>
                <li>Cloud Concepts</li>
                <li>Security and Compliance</li>
                <li>Technology</li>
                <li>Billing and Pricing</li>
              </ul>
              <button class="downloadbtn">Certificate</button>
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
  padding-top: 4rem;
  height: fit-content;
  width: 100%;
}
.container {
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
.wrapper {
  margin-top: 1rem;
  display: flex;
  column-gap: 1rem;
}
.item {
  width: 242px;
  height: 183px;
}
.item:nth-child(1) {
  border-top-left-radius: 12px;
}
.icontainer {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.icontainer > div:nth-child(2) {
  border-bottom-left-radius: 12px;
}

.item {
  position: relative;
  perspective: 1000px;
}
.front {
  background: rgb(46 46 72);
  width: inherit;
  height: inherit;
  transition: 1s;
  position: absolute;
  z-index: 1;
  padding: 1rem;
}
.back {
  background: rgb(40, 40, 71);
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
}
.item:hover .front {
  transform: rotateY(180deg);
  opacity: 0;
}
.item:hover .back {
  transform: rotateY(0);
}
.title {
  font-weight: 500;
  font-size: 18px;
  font-family: "Poppins";
  color: white;
  padding-left: 1rem;
}
.head {
  display: flex;
  width: fit-content;
  align-items: center;
}
.course {
  font-family: "Poppins";
  color: white;
  font-size: 1rem;
  font-weight: 300;
}
.date {
  font-family: "Poppins";
  font-weight: 400;
  color: var(--text);
  font-size: 12px;
  display: flex;
  justify-self: end;
}
.details {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  height: fit-content;
  justify-content: space-between;
}
.card-content {
  /* box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.281); */
  transition: all 1s;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.back1 {
  border-top-left-radius: 12px;
}
.front1 {
  border-top-left-radius: 12px;
}
.back4 {
  border-bottom-left-radius: 12px;
}
.front4 {
  border-bottom-left-radius: 12px;
}
.back2 {
  border-top-right-radius: 12px;
}
.front2 {
  border-top-right-radius: 12px;
}
.back {
  font-family: "Poppins";
  font-size: 12px;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.row {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
}
ul {
  padding: none !important;
}
.downloadbtn {
  outline: none;
  border: none;
  background: none;
  color: rgb(212, 212, 212);
  box-shadow: 0px 0px 0px 3px #313193;
  font-size: 15px;
  border-radius: 26px;
  cursor: pointer;
  transition: ease-in-out 0.1s all;
  margin-top: 1rem;
  padding: 0.3rem 0.8rem;
}
.downloadbtn:active {
  scale: 1.05;
}
</style>
