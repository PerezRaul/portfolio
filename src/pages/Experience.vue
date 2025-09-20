<template>
  <section id="experience" class="py-4">
    <div class="container">
      <h2 class="text-center mb-4">{{ $t("experiencePage.title") }}</h2>
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="experience-card card shadow-sm mb-4"
      >
        <div class="row g-3 align-items-start">
          <div class="col-12 col-md-8">
            <div class="d-flex align-items-center mb-3">
              <img
                :src="experience.logo"
                :alt="$t(experience.company)"
                :title="$t(experience.company)"
                class="company-logo me-3"
              />
              <div>
                <h5 class="fw-bold text-primary mb-1">
                  {{ $t(experience.role) }}
                </h5>
                <h6 class="text-muted mb-0">{{ $t(experience.company) }}</h6>
              </div>
            </div>
            <span class="badge bg-primary mb-3">{{ $t(experience.years) }}</span>
            <p class="mb-3">{{ $t(experience.description) }}</p>
          </div>

          <div class="col-12 col-md-4 d-flex flex-column align-items-md-end">
            <h6 class="fw-bold text-primary mb-2">
              {{ $t("experiencePage.technologies.title") }}
            </h6>
            <div class="d-flex flex-wrap gap-2 justify-content-md-end">
              <img
                v-for="(technology, index) in experience.technologies"
                :key="index"
                :src="technology.logo"
                :alt="$t(technology.name)"
                :title="$t(technology.name)"
                class="tech-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoRna from "@/assets/images/experiences/rna.png";
import logoHoyvoy from "@/assets/images/experiences/hoyvoy.png";
import logoBbva from "@/assets/images/experiences/bbva.png";
import logoMitsubishi from "@/assets/images/experiences/mitsubishi.png";
import logoCsym from "@/assets/images/experiences/csym.png";
import logoGlobalHoldings from "@/assets/images/experiences/globalHoldings.png";
import logoJesuites from "@/assets/images/experiences/fje.jpeg";
import logoInformaticaBellvitge from "@/assets/images/experiences/informaticaBellvitge.png";
import logoPhp from "@/assets/images/technologies/php.png";
import logoLaravel from "@/assets/images/technologies/laravel.png";
import logoJquery from "@/assets/images/technologies/jquery.png";
import logoJavascript from "@/assets/images/technologies/javascript.png";
import logoVue from "@/assets/images/technologies/vue.png";
import logoHtml from "@/assets/images/technologies/html.png";
import logoCss from "@/assets/images/technologies/css.png";
import logoBootstrap from "@/assets/images/technologies/bootstrap.png";
import logoDocker from "@/assets/images/technologies/docker.png";
import logoGit from "@/assets/images/technologies/git.png";
import logoGithub from "@/assets/images/technologies/github.png";
import logoBitbucket from "@/assets/images/technologies/bitbucket.png";
import logoGitlab from "@/assets/images/technologies/gitlab.png";
import logoClickup from "@/assets/images/technologies/clickup.svg";
import logoAws from "@/assets/images/technologies/aws.png";
import logoRedis from "@/assets/images/technologies/redis.png";
import logoMysql from "@/assets/images/technologies/mysql.png";
import logoJira from "@/assets/images/technologies/jira.png";
import logoJenkins from "@/assets/images/technologies/jenkins.png";
import logoApache from "@/assets/images/technologies/apache.png";
import logoApple from "@/assets/images/technologies/apple.png";
import logoPowershell from "@/assets/images/technologies/powershell.png";
import logoPutty from "@/assets/images/technologies/putty.png";
import logoSqlServer from "@/assets/images/technologies/sqlserver.png";
import logoUbuntu from "@/assets/images/technologies/ubuntu.png";
import logoWindows from "@/assets/images/technologies/windows.png";

const experiences = [
  {
    logo: logoRna,
    role: "experiencePage.rna.role",
    company: "experiencePage.rna.company",
    years: "experiencePage.rna.years",
    description: "experiencePage.rna.description",
    technologies: [
      {
        name: "experiencePage.technologies.php",
        logo: logoPhp,
      },
      {
        name: "experiencePage.technologies.laravel",
        logo: logoLaravel,
      },
      {
        name: "experiencePage.technologies.vue",
        logo: logoVue,
      },
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.bootstrap",
        logo: logoBootstrap,
      },
      {
        name: "experiencePage.technologies.mysql",
        logo: logoMysql,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.bitbucket",
        logo: logoBitbucket,
      },
      {
        name: "experiencePage.technologies.clickup",
        logo: logoClickup,
      },
      {
        name: "experiencePage.technologies.aws",
        logo: logoAws,
      },
      {
        name: "experiencePage.technologies.docker",
        logo: logoDocker,
      },
    ],
  },
  {
    logo: logoHoyvoy,
    role: "experiencePage.hoyvoy.role",
    company: "experiencePage.hoyvoy.company",
    years: "experiencePage.hoyvoy.years",
    description: "experiencePage.hoyvoy.description",
    technologies: [
      {
        name: "experiencePage.technologies.php",
        logo: logoPhp,
      },
      {
        name: "experiencePage.technologies.laravel",
        logo: logoLaravel,
      },
      {
        name: "experiencePage.technologies.vue",
        logo: logoVue,
      },
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.jquery",
        logo: logoJquery,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.bootstrap",
        logo: logoBootstrap,
      },
      {
        name: "experiencePage.technologies.mysql",
        logo: logoMysql,
      },
      {
        name: "experiencePage.technologies.redis",
        logo: logoRedis,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.bitbucket",
        logo: logoBitbucket,
      },
      {
        name: "experiencePage.technologies.github",
        logo: logoGithub,
      },
      {
        name: "experiencePage.technologies.docker",
        logo: logoDocker,
      },
    ],
  },
  {
    logo: logoBbva,
    role: "experiencePage.bbva.role",
    company: "experiencePage.bbva.company",
    years: "experiencePage.bbva.years",
    description: "experiencePage.bbva.description",
    technologies: [
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.jquery",
        logo: logoJquery,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.github",
        logo: logoGithub,
      },
      {
        name: "experiencePage.technologies.jira",
        logo: logoJira,
      },
      {
        name: "experiencePage.technologies.jenkins",
        logo: logoJenkins,
      },
    ],
  },
  {
    logo: logoMitsubishi,
    role: "experiencePage.mitsubishi.role",
    company: "experiencePage.mitsubishi.company",
    years: "experiencePage.mitsubishi.years",
    description: "experiencePage.mitsubishi.description",
    technologies: [
      {
        name: "experiencePage.technologies.php",
        logo: logoPhp,
      },
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.jquery",
        logo: logoJquery,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.bootstrap",
        logo: logoBootstrap,
      },
      {
        name: "experiencePage.technologies.mysql",
        logo: logoMysql,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.bitbucket",
        logo: logoBitbucket,
      },
    ],
  },
  {
    logo: logoCsym,
    role: "experiencePage.csm.role",
    company: "experiencePage.csm.company",
    years: "experiencePage.csm.years",
    description: "experiencePage.csm.description",
    technologies: [
      {
        name: "experiencePage.technologies.apache",
        logo: logoApache,
      },
      {
        name: "experiencePage.technologies.powershell",
        logo: logoPowershell,
      },
      {
        name: "experiencePage.technologies.putty",
        logo: logoPutty,
      },
      {
        name: "experiencePage.technologies.sqlserver",
        logo: logoSqlServer,
      },
      {
        name: "experiencePage.technologies.ubuntu",
        logo: logoUbuntu,
      },
      {
        name: "experiencePage.technologies.windows",
        logo: logoWindows,
      },
      {
        name: "experiencePage.technologies.jira",
        logo: logoJira,
      },
    ],
  },
  {
    logo: logoGlobalHoldings,
    role: "experiencePage.globalHoldings.role",
    company: "experiencePage.globalHoldings.company",
    years: "experiencePage.globalHoldings.years",
    description: "experiencePage.globalHoldings.description",
    technologies: [
      {
        name: "experiencePage.technologies.php",
        logo: logoPhp,
      },
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.jquery",
        logo: logoJquery,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.bootstrap",
        logo: logoBootstrap,
      },
      {
        name: "experiencePage.technologies.mysql",
        logo: logoMysql,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.github",
        logo: logoGithub,
      },
    ],
  },
  {
    logo: logoJesuites,
    role: "experiencePage.jesuitesEducacio.role",
    company: "experiencePage.jesuitesEducacio.company",
    years: "experiencePage.jesuitesEducacio.years",
    description: "experiencePage.jesuitesEducacio.description",
    technologies: [
      {
        name: "experiencePage.technologies.php",
        logo: logoPhp,
      },
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.jquery",
        logo: logoJquery,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.bootstrap",
        logo: logoBootstrap,
      },
      {
        name: "experiencePage.technologies.mysql",
        logo: logoMysql,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.bitbucket",
        logo: logoBitbucket,
      },
      {
        name: "experiencePage.technologies.gitlab",
        logo: logoGitlab,
      },
    ],
  },
  {
    logo: logoInformaticaBellvitge,
    role: "experiencePage.informaticaBellvitge.role",
    company: "experiencePage.informaticaBellvitge.company",
    years: "experiencePage.informaticaBellvitge.years",
    description: "experiencePage.informaticaBellvitge.description",
    technologies: [
      {
        name: "experiencePage.technologies.php",
        logo: logoPhp,
      },
      {
        name: "experiencePage.technologies.javascript",
        logo: logoJavascript,
      },
      {
        name: "experiencePage.technologies.jquery",
        logo: logoJquery,
      },
      {
        name: "experiencePage.technologies.html",
        logo: logoHtml,
      },
      {
        name: "experiencePage.technologies.css",
        logo: logoCss,
      },
      {
        name: "experiencePage.technologies.bootstrap",
        logo: logoBootstrap,
      },
      {
        name: "experiencePage.technologies.mysql",
        logo: logoMysql,
      },
      {
        name: "experiencePage.technologies.git",
        logo: logoGit,
      },
      {
        name: "experiencePage.technologies.bitbucket",
        logo: logoBitbucket,
      },
      {
        name: "experiencePage.technologies.ubuntu",
        logo: logoUbuntu,
      },
      {
        name: "experiencePage.technologies.windows",
        logo: logoWindows,
      },
      {
        name: "experiencePage.technologies.apache",
        logo: logoApache,
      },
    ],
  },
];
</script>

<style scoped>
.experience-card {
  padding: 1.5rem;
  border-left: 6px solid var(--bs-primary);
  border-radius: 6px;
}

.company-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  padding: 4px;
}

.tech-logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  padding: 6px;
  border-radius: 6px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  background: #fff;
}

.tech-logo:hover {
  transform: translateY(-4px) scale(1.06);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

@media (max-width: 767.98px) {
  .col-md-4,
  .col-md-8 {
    text-align: left;
  }

  .experience-card {
    padding: 1rem;
  }

  .company-logo {
    margin-bottom: 0.5rem;
  }
}
</style>
