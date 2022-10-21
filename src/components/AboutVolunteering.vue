<template >
    <section>
        <div class="container">
        <h1>Volunteering</h1>
        <div class="panel">
            <div class="first">
        <img src="../assets/scoutssa.png" alt="">
        <div class="info">
            <p class="position">Boy Scout</p>
            <p class="company">Scouts South Africa</p>
        </div>
        </div>
        <div class="details">
            <p class="date">Jan 2014 - Jan 2019</p>
            <div class="location">
                <img src="../assets/pin.svg" alt="">
                <p>Muizenberg, Western Cape</p>
            </div>
        </div>
        
</div>
    </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
section{
    height: fit-content;
    width: 100%;
    padding-top: 4rem;
}
    h1{
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: white;
    padding-bottom: 1.3rem;
    
}
.container{
    width: 40%;
    margin: 0 auto;
}
.panel{
    background: var(--panel);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    font-family: 'Poppins';
    border-radius: 12px;
}
.details{
    color: var(--text);
    text-align: right;
}
.location{
    display: flex;
    column-gap: .3rem;
    font-size: 12.5px;
}
.first{
    display: flex;
    column-gap: 1rem;
}
.position{
    color: var(--inactive);
}
.company{
    font-size:18px;
    font-weight: 500;
    color: var(--active);
}
</style>