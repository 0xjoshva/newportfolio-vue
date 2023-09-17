<template>
  <section>
    <h1>My testimonials</h1>
    <div class="container" :class="{'stackedContainer' : !stackClicked}">
      <div class="card" v-for="card in cards" :key="card.id" :class="{'stack' : !stackClicked}" @click="stackClicked = !stackClicked" >
        <div class="col1">
          <img :src="card.image" alt="" class="test-img" />
          <div class="title"><p>{{ card.title }}</p></div>
        </div>
        <div class="col2">
          <div class="name">{{ card.name }}</div>
          <div class="message">{{ card.message }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Lecturer",
          image:
            "https://github.com/0xjoshva/portfolio-vue/blob/main/src/assets/jason.jpg?raw=true",
          name: "Jason Wandrag",
          message:
            " Joshua Steed has shown great dedication to constantly improving himself and his work. He is consistent and hardworking, which shows in the quality of work he produces. ",
        },
        {
          id: 2,
          title: "Peer",
          image:
            "https://github.com/0xjoshva/portfolio-vue/blob/main/src/assets/vusumzi.jpg?raw=true",
          name: "Vusumzi Msengana",
          message:
            "Joshua is a hardworking and consistent person, he likes thinking outside the box and has great creative abilities.",
        },
        {
          id: 3,
          title: "Peer",
          image:
            "https://github.com/0xjoshva/portfolio-vue/blob/main/src/assets/lihle.jpg?raw=true",
          name: "Lihle Goliath",
          message:
            "Focused and diligent to his work. Has a great eye for creativity and visualization towards his ideas, this means he knows what he want in life. He would be a great asset wherever he goes.",
        },
        {
          id: 4,
          title: "Peer",
          image:
            "https://github.com/0xjoshva/portfolio-vue/blob/main/src/assets/sindile.jpg?raw=true",
          name: "Sindile Kula",
          message:
            "Joshua is a bright young man with a creative mind. He like to accomplish things at his own pace and according to his own preferences. He is highly diligent and hardworking when it comes to his career.",
        },
        {
          id: 5,
          title: "Peer",
          image:
            "https://github.com/0xjoshva/portfolio-vue/blob/main/src/assets/raaid.jpg?raw=true",
          name: "Raaid Abdullatief",
          message:
            "One of the most hardworking and committed people I've worked with. You can see the passion in his projects as you scroll down the page. Always a pleasure to work with. ",
        },
        {
          id: 6,
          title: "Peer",
          image:
            "https://github.com/0xjoshva/portfolio-vue/blob/main/src/assets/tristan.jpg?raw=true",
          name: "Tristan Daniels",
          message:
            " Joshua is a passionate and goal-driven person. He always focuses on the task at hand and works to the best of his ability.",
        },
      ],
      stackClicked: false
    };
  },
};
</script>
<style scoped>

section {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: white;
  padding-bottom: 1.3rem;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.card {
  background: #2e2e48;
  width: 100%;
  height: auto;
  padding: 1.4rem;
  border-radius: 10px;
  display: flex;
  column-gap: 1.4rem;
  transition: ease 1s all;
  cursor: pointer;
}
.test-img {
  border-radius: 10px;
  min-width: 72px;
  height: 72px;
  object-fit: cover;
}
.name {
  color: white;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.message{
  color: var(--Text, #88889F);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.title{
  background: #3F3F5C;
  border-radius: 2px;
  display: flex;
padding: 0px 3px;
justify-content: center;
align-items: center;

align-self: center;
width: fit-content;
margin: 0 auto;

}
.title p{
  color: #FFF;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
.col1{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.stack:nth-of-type(1) {
  position: relative;
  z-index: 6;
}

.stack:nth-of-type(2) {
  position: relative;
  transform: translate(0, -1rem) rotate(2deg);
  filter: brightness(95%) opacity(90%);
  z-index: 5;
  margin-top: -150px;
}

.stack:nth-of-type(3) {
  filter: brightness(93%) opacity(100%);
  position: relative;
 transform: translate(0, -2rem) rotate(-2deg);
  z-index: 4;
  margin-top: -150px;
}

.stack:nth-of-type(4) {
  position: relative;
  transform: translate(0, -3rem) rotate(-4deg);
  z-index: 3;
   filter: brightness(91%) opacity(80%);
   margin-top: -150px;
}

.stack:nth-of-type(5) {
  position: relative;
  transform: translate(0, -3rem) rotate(4deg);
  z-index: 2;
  filter: brightness(85%) opacity(80%);
  margin-top: -150px;
}

.stack:nth-of-type(6) {
  position: relative;
  transform: translateY(-3rem);
  z-index: 1;
  filter: brightness(85%) opacity(80%);
  margin-top: -150px;
}
.card:nth-of-type(1){
  position: relative;
z-index: 6;
}
.card:nth-of-type(2){
  position: relative;
z-index: 5;
}
.card:nth-of-type(3){
  position: relative;
z-index: 4;
}
.card:nth-of-type(4){
  position: relative;
z-index: 3;
}
.card:nth-of-type(5){
  position: relative;
z-index: 2;
}
.card:nth-of-type(6){
  position: relative;
z-index: 1;
}
.container{
transition: ease all 1s;
}
.stackedContainer{
  transition: ease all 1s;
}
</style>