<template>
  <h1 class="about-header">About me</h1>
  <AboutSummary/>
  <AboutExperience/>
  <AboutEducation/>
  <AboutVolunteering/>
  <AboutCertifications/>
  <AboutSkills/>
</template>
<script>
import AboutSummary from '@/components/AboutSummary.vue';
import AboutEducation from '@/components/AboutEducation.vue';
import AboutExperience from '@/components/AboutExperience.vue';
import AboutVolunteering from '@/components/AboutVolunteering.vue';
import AboutSkills from '@/components/AboutSkills.vue';
import AboutCertifications from '@/components/AboutCertifications.vue';
export default {
    components: { AboutSummary, AboutEducation, AboutExperience, AboutVolunteering, AboutSkills, AboutCertifications }
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
margin: 0 auto;
color: white;
}
</style>
