<script lang="ts">
  import Articles from "$lib/components/Articles.svelte";
  import Avatar from "$lib/components/Avatar.svelte";
  import Links from "$lib/components/Links.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="content-container">
  <Avatar
    name={data.profile.name}
    description={data.profile.description}
    avatar={data.profile.avatar}
  />

  <Links links={data.sns.contents} />

  <Projects projects={data.projects.contents} />

  <Articles articles={data.articles} />
</div>

<style>
  /** reset css*/
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  :global(html) {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  :global(body, h1, h2, h3, h4, h5, h6, p, ol, ul) {
    font-weight: normal;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      "sans-serif";
  }

  :global(ol, ul) {
    list-style: none;
  }

  :global(a, a:visited, a:hover, a:active) {
    text-decoration: none;
    color: inherit;
  }

  :global(a:visited) {
    text-decoration: none;
  }

  :global(img) {
    max-width: 100%;
    height: auto;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
  @media screen and (max-width: 30rem) {
    .content-container {
      padding: 1rem;
    }
  }
</style>
