<template>
  <TheNavbar/>
  <router-view/>
  <TheFooter/>
</template>
<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue';
export default {
  components: {
    TheNavbar,
    TheFooter
}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
/* font-family: 'Poppins', sans-serif; */

::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: var(--bg);
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: var(--bg);
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	
	background-color: var(--text);
}


*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
background: var(--bg) !important;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

:root {
  --bg: #232339;
  --inactive: #8B8B98;
  --active: white;
  --grey: #5B5B6C;
  --text: #88889F;
  --panel: #2E2E48;
}
</style>
