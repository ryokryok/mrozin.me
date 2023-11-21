<script lang="ts">
  import Fa from "svelte-fa";
  import { faExternalLink } from "@fortawesome/free-solid-svg-icons/faExternalLink";

  import type { ZennArticle } from "$lib/types";
  import { formatDate } from "$lib/utils";

  export let articles: ZennArticle[];
</script>

<div class="content-root">
  <h2 class="content-title">Articles</h2>
  <ul class="content-list">
    {#each articles as article}
      <li>
        <a href={`https://zenn.dev${article.path}`}>
          <h3 class="article-title"><Fa icon={faExternalLink} /> {article.title}</h3>
          <p><time datetime={article.published_at}>{formatDate(article.published_at)}</time></p>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .content-root {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .content-title {
    font-size: 2rem;
    font-weight: 800;
  }
  .content-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .article-title {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
  }
</style>
