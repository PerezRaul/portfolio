<template>
  <section id="education" class="py-4">
    <div class="container">
      <h2 class="text-primary text-center mb-4">{{ $t("aboutPage.title") }}</h2>
      <p class="lead mb-3">{{ $t("aboutPage.description") }}</p>
      <p class="lead mb-3">{{ $t("aboutPage.description2") }}</p>
      <p class="lead mb-5">{{ $t("aboutPage.description3") }}</p>

      <div class="row g-5">
          <div class="col-md-6">
            <h4 class="fw-bold mb-3 text-secondary">{{ $t("aboutPage.skills.title") }}</h4>
            <div class="list-group list-group-flush rounded-3">
              <li 
                v-for="(skill, index) in skills" 
                :key="index" 
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ $t(skill.name) }}
              </li>
            </div>
          </div>

          <div class="col-md-6">
            <h4 class="fw-bold mb-3 text-secondary">{{ $t("aboutPage.interests.title") }}</h4>
            <div class="list-group list-group-flush rounded-3">
              <li 
                v-for="(interest, index) in interests" 
                :key="index" 
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                {{ $t(interest.name) }}
              </li>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {name: 'aboutPage.skills.teamWork'},
  {name: 'aboutPage.skills.feedback'},
  {name: 'aboutPage.skills.learning'},
  {name: 'aboutPage.skills.autodidact'},
  {name: 'aboutPage.skills.fellowship'},
  {name: 'aboutPage.skills.details'},
  {name: 'aboutPage.skills.organized'},
  {name: 'aboutPage.skills.proactive'},
];

const interests = [
  {name: 'aboutPage.interests.games'},
  {name: 'aboutPage.interests.motorbike'},
  {name: 'aboutPage.interests.series'},
  {name: 'aboutPage.interests.nature'},
  {name: 'aboutPage.interests.harryPotter'},
];
</script>

<style scoped>
.list-group-item {
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #f8f9fa;
  border-left: 4px solid var(--bs-primary) !important; 
  transition: all 0.3s ease;
}

.list-group-item:hover {
  transform: translateX(5px);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.list-unstyled li {
  position: relative;
  padding-left: 25px;
}

.list-unstyled li .bi {
  position: absolute;
  left: 0;
  top: 5px;
}
</style>