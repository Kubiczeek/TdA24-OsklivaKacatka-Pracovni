<script>
  import { page } from "$app/stores";

  export let text;
  export let click = true;
  export let index = -1;
  $: state = false;

  function check(searchParams) {
    if (index > -1) {
      state = false;
      searchParams
        ?.get("tags")
        ?.split(",")
        .forEach((tag) => {
          if (tag.toString() == index.toString()) {
            state = true;
          }
        });
    }
  }

  $: check($page.url.searchParams);
</script>

{#if click}
  <button class="tag" on:click={() => check()}>
    <span class:state class="pre">
      {#if state}
        x
      {:else}
        +
      {/if}</span
    ><span class="text">{text}</span>
  </button>
{:else}
  <div class="tag tag2">
    <span class="text">{text}</span>
  </div>
{/if}

<style>
  .tag {
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #333;
    padding: 3px 4px;
    gap: 2px;
  }

  .tag2 {
    padding: 2px 9px;
    width: min-content;
  }

  .tag2 .text {
    font-size: 0.85rem;
  }

  .pre {
    font-size: 0.9rem;
    font-weight: 900;
    color: #fff;
  }

  .state {
    font-weight: 400;
  }

  .text {
    font-weight: 600;
    font-size: 0.85rem;
    color: #fff;
  }

  button {
    color: #fff;
    padding: 0;
  }

  @media screen and (max-width: 450px) {
    .tag .text {
      font-size: 0.75rem;
    }
  }
</style>
