<template>
  <h1 class="about-header">About me</h1>
  <AboutSummary/>
  <AboutEducation/>
  <AboutExperience/>
  <AboutVolunteering/>
  <AboutSkills/>
</template>
<script>
import AboutSummary from '@/components/AboutSummary.vue';
import AboutEducation from '@/components/AboutEducation.vue';
import AboutExperience from '@/components/AboutExperience.vue';
import AboutVolunteering from '@/components/AboutVolunteering.vue';
import AboutSkills from '@/components/AboutSkills.vue';
export default {
    components: { AboutSummary, AboutEducation, AboutExperience, AboutVolunteering, AboutSkills}
}
</script>
<style scoped>
.about-header{
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
width: 40%;
padding-top: 5rem;
padding-bottom: 1rem;
margin: 0 auto;
color: white;
}
</style>
