<script lang="ts">
  export let avatar: {
    url: string;
    height: number;
    width: number;
  };
  export let name: string;
  export let description: string;
</script>

<div class="author-content">
  <div class="author-avatar">
    <img
      src={avatar.url}
      alt={name}
      width={avatar.width}
      height={avatar.height}
    />
  </div>
  <div class="author-profile">
    <h1 class="author-name">{name}</h1>
    <p class="author-paragraph">{description}</p>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }
  .author-content {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    gap: 1rem;
  }

  .author-avatar {
    width: 10rem;
    height: 10rem;
    aspect-ratio: 1 / 1;
  }
  .author-profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .author-name {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: #ddd 1px 0 10px;
  }

  .author-paragraph {
    font-size: 1.5rem;
    color: #333;
  }

  @media screen and (max-width: 30rem) {
    .author-content {
      flex-direction: column;
      align-items: center;
    }
    .author-profile {
      text-align: center;
      flex-direction: column;
    }
  }
</style>
