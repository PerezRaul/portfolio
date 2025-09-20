<template>
  <section id="education" class="py-4">
    <div class="container">
      <h2 class="text-primary text-center mb-4">{{ $t("educationPage.academicTitles.title") }}</h2>
      <div class="row g-3">
        <div class="col-md-6" v-for="(academicTitle, index) in academicTitles" :key="index">
          <div class="card shadow-sm h-100">
            <div class="card-body d-flex align-items-center">
              <div
                class="me-3 d-flex align-items-center justify-content-center"
                style="width: 60px; height: 60px"
              >
                <img
                  :src="academicTitle.logo"
                  alt="logo centro"
                  class="img-fluid"
                  style="max-height: 60px; max-width: 60px; object-fit: contain"
                />
              </div>
              <div>
                <h5 class="fw-bold mb-1">{{ $t(academicTitle.title) }}</h5>
                <div class="text-muted small">{{ $t(academicTitle.school) }}</div>
                <div class="text-secondary small">{{ $t(academicTitle.years) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="languages" class="py-2">
    <div class="container py-4">
      <h2 class="text-primary text-center mb-4">{{ $t("educationPage.languages.title") }}</h2>
      <div class="row g-3">
        <div
          class="col-md-4"
          v-for="(language, index) in languages"
          :key="index"
        >
          <div class="card shadow-sm h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="d-flex align-items-center mb-3">
                <img
                  :src="language.flag"
                  alt="flag"
                  class="me-2"
                  style="width: 30px; object-fit: cover"
                />

                <h5 class="card-title mb-0">{{ $t(language.name) }}</h5>
              </div>

              <div class="d-flex align-items-center">
                <div class="d-flex me-2">
                  <div
                    v-for="n in 4"
                    :key="n"
                    class="me-1"
                    :style="{
                      width: '12px',
                      height: '20px',
                      backgroundColor:
                        n <= language.progress
                          ? 'var(--bs-success)'
                          : '#e5e7eb',
                    }"
                  ></div>
                </div>
                <span class="text-muted small fw-semibold">{{
                  $t(language.level)
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoES from '@/assets/images/languages/es.png'
import logoCAT from '@/assets/images/languages/cat.png'
import logoEN from '@/assets/images/languages/en.png'
import logoFJE from '@/assets/images/education/fje.jpeg'

const academicTitles = [
  {
    title: "educationPage.academicTitles.asix.title",
    school: "educationPage.academicTitles.asix.school",
    years: "educationPage.academicTitles.asix.years",
    logo: logoFJE,
  },
  {
    title: "educationPage.academicTitles.daw.title",
    school: "educationPage.academicTitles.daw.school",
    years: "educationPage.academicTitles.daw.years",
    logo: logoFJE,
  },
  {
    title: "educationPage.academicTitles.smx.title",
    school: "educationPage.academicTitles.smx.school",
    years: "educationPage.academicTitles.smx.years",
    logo: logoFJE,
  },
];

const languages = [
  {
    name: "educationPage.languages.spanish.title",
    level: "educationPage.languages.spanish.level",
    progress: 4,
    flag: logoES,
  },
  {
    name: "educationPage.languages.catalan.title",
    level: "educationPage.languages.catalan.level",
    progress: 3,
    flag: logoCAT,
  },
  {
    name: "educationPage.languages.english.title",
    level: "educationPage.languages.english.level",
    progress: 2,
    flag: logoEN,
  },
];
</script>
