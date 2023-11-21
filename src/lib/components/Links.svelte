<script lang="ts">
  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import ZennLogo from "./ZennLogo.svelte";
  import HatenaLogo from "./HatenaLogo.svelte";
  import XLogo from "./XLogo.svelte";
  import type { SNSList } from "$lib/types";

  export let links: SNSList;
</script>

<div class="links">
  <ul class="link-list">
    {#each links as link}
      <li class="link-item">
        <a
          href={link.url}
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {#if link.name === "GitHub"}
            <Fa icon={faGithub} />
          {:else if link.name === "Twitter" || link.name === "X"}
            <XLogo width={"2rem"} height={"2rem"} />
          {:else if link.name === "Zenn"}
            <ZennLogo width={"2rem"} height={"2rem"} />
          {:else if link.name === "Hatena"}
            <HatenaLogo width={"2rem"} height={"2rem"} />
          {:else}
            <p>{link.name}</p>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .links {
    display: flex;
  }

  .link-list {
    display: flex;
    gap: 1rem;
  }

  .link-item {
    font-size: 2rem;
    color: black;
  }

  @media screen and (max-width: 30rem) {
    .links {
      justify-content: center;
    }
  }
</style>
