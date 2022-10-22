<template>
  <section>
   
    <div class="biography">
      <transition>
      
      
      <h1>
        I'm Joshua Steed, I am an aspiring <br />
        front-end developer
      </h1>
      </transition>
      <div class="paragraphs">
        <p>
          I am a young developer with an acute attention to detail, looking at
          applications from all angles. My passions lie in UI/UX design and
          building websites from the ground up.
        </p>
        <p>
          I have just finished a 6-Month coding bootcamp at Life Choices Academy
          where I learnt the fundamentals of full stack web development.
          Currently an intern web developer at LC Studio where I continue to
          upskill myself.
        </p>
        <p>
          Aside from development, I enjoy going to the gym everyday to stay
          fit/healthy and playing video-games with friends is the perfect
          activity to let loose.
        </p>
      </div>
      <div class="icons">
        <a href=""><img src="../assets/linkedin.svg" alt="" /></a>
        <a href=""><img src="../assets/github.svg" alt="" /></a>
        <a href="" class="dribble"
          ><img src="../assets/dribbble.svg" alt=""
        /></a>
      </div>
    </div>
    <hr />
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: fit-content;
  margin-bottom: 7rem;
}

.biography {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  padding-top: 5rem;
}
.biography h1 {
  color: white;
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 600;
}
.paragraphs {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 1.3rem;
  color: var(--text);
  font-family: "Poppins";
}
.icons {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 2rem;
  column-gap: 0.5rem;
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
hr {
  width: 30%;
  margin: 0 auto;
  margin-top: 6rem;
  color: #bbbbbb;
  opacity: 3%;
}
</style>
