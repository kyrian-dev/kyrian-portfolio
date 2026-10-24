<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="project-card" :aria-labelledby="'project-' + project.id + '-title'">
    <a class="project-preview" :href="project.live" target="_blank" rel="noopener noreferrer" :aria-label="'View ' + project.title + ' live demo (opens in a new tab)'"><img :src="project.image" :alt="project.alt" width="1200" height="675" loading="lazy"><span class="preview-badge">● {{ project.tag }}</span><span class="preview-open" aria-hidden="true">↗</span></a>
    <div class="project-content">
      <div class="project-tags"><span class="category-tag">{{ project.category }}</span><span v-for="technology in project.stack" :key="technology">{{ technology }}</span></div>
      <h3 :id="'project-' + project.id + '-title'">{{ project.title }}</h3>
      <div class="project-explanation"><div><h4 class="problem-heading">▸ The problem</h4><p>{{ project.problem }}</p></div><div><h4 class="solution-heading">▸ The solution</h4><p>{{ project.solution }}</p></div></div>
      <div class="capability-box"><h4>▸ What you can try</h4><p>{{ project.capability }}</p></div>
      <ul class="feature-list" aria-label="Key features"><li v-for="feature in project.features" :key="feature">{{ feature }}</li></ul>
      <p v-if="project.limitation" class="demo-limitation">{{ project.limitation }}</p>
      <div class="project-actions"><a class="button project-live" :href="project.live" target="_blank" rel="noopener noreferrer" :aria-label="'Open ' + project.title + ' live project (opens in a new tab)'">Open Live Project <span aria-hidden="true">↗</span></a><a class="source-link" :href="project.source" target="_blank" rel="noopener noreferrer" :aria-label="'View ' + project.title + ' source code on GitHub (opens in a new tab)'">GitHub <span aria-hidden="true">↗</span></a></div>
    </div>
  </article>
</template>
