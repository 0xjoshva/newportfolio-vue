<template>
<Footer>
<div class="container">
    <div class="info">
        <div class="icons">
        <a href=""><img src="../assets/linkedin.svg" alt="" /></a>
        <a href=""><img src="../assets/github.svg" alt="" /></a>
        <a href="" class="dribble"
          ><img src="../assets/dribbble.svg" alt=""
        /></a>
      </div>
        <div class="contact">
            <p>cape town, south africa</p>
            <a href="mailto:joshuasteed123@gmail.com" id="email">joshuasteed123@gmail.com</a>
             <a href="tel:0624597048">+27 62 459 7048</a>
        </div>
    </div>
    <div class="nav">
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/about" class="router-link">About</router-link>
        <router-link to="/projects" class="router-link">Projects</router-link>
        <router-link to="/tools" class="router-link">Tools</router-link>
        <router-link to="/contact" class="router-link">Contact</router-link>
    </div>
</div>
</Footer>
<div class="right"><p>Copyright © All Rights Reserved</p></div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
Footer{
    margin-top:5rem;
height: 15rem;
width: 100%;
background: #2A2A40;
}
.container{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    height: 100%;
}
a{
    text-decoration: none;
    color:white;
}
.nav{
    display: flex;
    flex-direction: column;
    row-gap: .4rem;
    font-family: 'Poppins';
    color:white;
    font-size: 18px;
    height: fit-content;
    width: fit-content;
    align-self: center;
}
.router-link{
    transition: all .2s ease-in-out;
    text-align: right;
    color: var(--inactive);
}
.router-link-active{
    font-weight: 500;
    color: var(--active);
}
.right{
}
.right p{
    font-size:1rem;
color: #8B8B98;
padding: 1rem;
text-align: center;
font-family: 'Poppins';
}
.icons {
  display: flex;
  flex-direction: row;
  align-content: center;
  column-gap: 0.5rem;
  margin-bottom: 1rem;
  align-self: center;
  height: fit-content;
  width: fit-content;
}
.icons a {
  width: fit-content;
  height: fit-content;
  transition: all 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.icons a:hover {
  filter: brightness(150%);
}
.dribble {
  display: flex;
  align-self: center;
}
.info{
    height: fit-content;
    width: fit-content;
    align-content: center;
    justify-content: center;
    padding-top:2.2rem;
}
.contact a{
    color: var(--inactive);
    font-family: 'Poppins';
    font-weight: 500;
}
.contact p{
        color: var(--inactive);
    font-family: 'Poppins';
    font-weight: 500;
}
.contact a:hover{
    text-decoration: underline;
}
.contact{
    display: flex;
    flex-direction: column;
    row-gap: .2rem;
    font-size: 1rem;
}
</style>