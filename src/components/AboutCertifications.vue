<template>
  <section>
    <div class="container">
      <h1 id="header">Certifications</h1>
      <div class="wrapper">
        <div class="icontainer">
          <div class="row">
            <div class="item">
              <div class="front card-content front1">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/aws.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title">Amazon Web Services</p>
                </div>
                <div class="details">
                  <p class="course">Cloud Practitioner</p>
                  <p class="date">Dec 2022</p>
                </div>
              </div>
            </div>

            <!-- Certification 2 -->
            <div class="item">
              <div class="front card-content front2">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title">HackerRank</p>
                </div>
                <div class="details">
                  <p class="course">SQL Basic</p>
                  <p class="date">Mar 2023</p>
                </div>
              </div>
            </div>

            <!-- Certification 3 -->
            <div class="item">
              <div class="front card-content front3">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title">HackerRank</p>
                </div>
                <div class="details">
                  <p class="course">SQL Intermediate</p>
                  <p class="date">Mar 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Certification 4 -->
            <div class="item">
              <div class="front card-content front4">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title">HackerRank</p>
                </div>
                <div class="details">
                  <p class="course">SQL Advanced</p>
                  <p class="date">Mar 2023</p>
                </div>
              </div>
            </div>

            <!-- Certification 5 -->
            <div class="item">
              <div class="front card-content front5">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title">HackerRank</p>
                </div>
                <div class="details">
                  <p class="course">Cascading Style Sheets (CSS)</p>
                  <p class="date">Mar 2023</p>
                </div>
              </div>
            </div>

            <!-- Certification 6 -->
            <div class="item">
              <div class="front card-content front6">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/codecamp.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title codecamptitle">free <br> Code <br>Camp</p>
                </div>
                <div class="details">
                  <p class="course">Responsive Web Design</p>
                  <p class="date">Jan 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Certification 7 -->
            <div class="item">
              <div class="front card-content front7">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/codecamp.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title codecamptitle">free <br> Code <br>Camp</p>
                </div>
                <div class="details">
                  <p class="course">
                    JavaScript Algorithms and Data Structures
                  </p>
                  <p class="date">Jan 2023</p>
                </div>
              </div>
            </div>

            <!-- Certification 8 -->
            <div class="item">
              <div class="front card-content front8">
                <div class="head">
                  <img
                    src="https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/codecamp.png"
                    alt=""
                    class="school-img"
                  />
                  <p class="title codecamptitle">free <br> Code <br>Camp</p>
                </div>
                <div class="details">
                  <p class="course">Front End Development Libraries</p>
                  <p class="date">Feb 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      certifications: [
        {
          title: "Amazon Web Services",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/aws.png",
          course: "Cloud Practitioner",
          date: "Dec 2022",
        },
        {
          title: "HackerRank",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png",
          course: "SQL Basic",
          date: "Mar 2023",
        },
        {
          title: "HackerRank",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png",
          course: "SQL Intermediate",
          date: "Mar 2023",
        },
        {
          title: "HackerRank",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png",
          course: "SQL Advanced",
          date: "Mar 2023",
        },
        {
          title: "HackerRank",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/HackerRank.png",
          course: "Cascading Style Sheets (CSS)",
          date: "Mar 2023",
        },
        {
          title: "freeCodeCamp",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/codecamp.png",
          course: "Responsive Web Design",
          date: "Jan 2023",
        },
        {
          title: "freeCodeCamp",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/codecamp.png",
          course: "JavaScript Algorithms and Data Structures",
          date: "Jan 2023",
        },
        {
          title: "freeCodeCamp",
          image:
            "https://raw.githubusercontent.com/0xjoshva/newportfolio-vue/main/src/assets/codecamp.png",
          course: "Front End Development Libraries",
          date: "Feb 2023",
        },
      ],
    };
  },
};
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
  border-radius: 8px;
}
.item:nth-child(1) {
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
  border-radius: 8px;
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
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
}
.row:nth-child(3) {
display: flex;
justify-content: START;
}
ul {
  padding: none !important;
}
.school-img {
  width: 71px;
  height: 71px;
  border-radius: 8px;
}
.codecamptitle{
  line-height: 22px;
}
</style>
