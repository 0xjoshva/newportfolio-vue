<template>
  <section>
    <div class="container">
      <div class="item" v-for="project in projects" v-bind:key="project.id">
        <div class="wrapper">
        <img src="https://raw.githubusercontent.com/0xjoshva/cryptoexchange/main/src/assets/logo2.png" alt="logo" class="logo">
        
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" filter="opacity(.3)" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="9 6 15 12 9 18" />
</svg>
      </div>

    </div>
  </section>
</template>
<script>
export default {
     data() {
    return {
      projects: [
        {
          id: 1,
          name: "Crypto Exchange",
          image: "https://raw.githubusercontent.com/0xjoshva/cryptoexchange/main/src/assets/logo2.png",
        },
        {
          id: 2,
          name: 'E-Commerce',
        },
        {
          id: 3,
          name: "Real Estate",
          image: "https://github.com/0xjoshva/realestate/blob/main/assets/sterlinglogoonly.png?raw=true",
          
        }
        ,
        {
          id: 4,
          name: "Social Media",
          
        }
      ],
    };
  },
};
</script>
<style scoped>
section {
  height: fit-content;
width:100%;
}
.container{
width: 40%;
height: fit-content;
  margin: 0 auto;
  padding-top:1.3rem;
  display: flex;
  
  flex-direction: column;
  row-gap: 2rem;
}
.item{
    width: 100%;
    height:11rem;
    color:white;
    background: var(--panel);
    border-radius: 8px;
    transition: .4s transform cubic-bezier(0.18, 0.89, 0.32, 1.28), .4s box-shadow ease-in-out, .4s scale ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
    pointer-events: pointer;

}

.item:hover{
    transform: translateY(-5px);
    scale:1.02;

    box-shadow: 6px 8px 0px 0px #1b1b3062;
}
.item:active{
      transform: translate(20px, -5px);
    scale:1.02;

    box-shadow: 6px 8px 0px 0px #1b1b3062;

}
.icon .icon-tabler .icon-tabler-chevron-right{
  
}
.logo{
    width: 60px;
    height: 60px;
    display: flex;
    align-self: center;
}
.wrapper{
width: 20%;
height: 100%;
background: rgba(255, 255, 255, 0.041);
display: flex;
justify-content: center;
align-content: center;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
}
</style>
