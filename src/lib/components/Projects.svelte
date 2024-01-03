<script lang="ts">
  import Fa from "svelte-fa";
  import { faExternalLink } from "@fortawesome/free-solid-svg-icons/faExternalLink";
  import type { ProjectList } from "$lib/types";
  export let projects: ProjectList;
</script>

<div class="content-root">
  <h2 class="content-title">Projects</h2>
  {#each projects as project}
    <article>
      <div class="project-header">
        <h3 class="project-title">{project.title}</h3>
        <p>
          <a
            href={project.url}
            title={project.title}
            target="_blank"
            class="project-link"><Fa icon={faExternalLink} /></a
          >
        </p>
      </div>
      <p class="project-description">{project.description}</p>
    </article>
  {/each}
</div>

<style>
  .content-root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .content-title {
    font-size: 2rem;
    font-weight: 800;
  }
  .project-header {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 0.25rem;
  }
  .project-link {
    font-size: 1.25rem;
    color: #444;
    font-weight: bold;
  }

  .project-description {
    font-size: 1rem;
    padding-bottom: 0.25rem;
    white-space: pre-line;
  }
</style>
