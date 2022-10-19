<template>
  <section>
    <div class="container">
    <h1 id="header">Education</h1>
    <div class="wrapper">
        <div class="icontainer">
        <div class="item"></div>
        <div class="item"></div>
        </div>
        <div class="item"></div>
        <div class="item"></div>
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
    padding-bottom: 2rem;
}
.container{
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
.wrapper{
    margin-top: 1rem;
    display: flex;
    column-gap: 1rem;
}
.item{
    width: 266px;
    height: 183px;
    background: var(--panel);
}
.item:nth-child(1){
    border-top-left-radius: 12px;
}
.icontainer{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    
}
.icontainer > div:nth-child(2){
    border-bottom-left-radius: 12px;
}

</style>
