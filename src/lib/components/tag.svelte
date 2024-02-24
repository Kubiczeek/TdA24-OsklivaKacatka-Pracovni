<script>
  export let text;
  export let click = true;
  export let number = 1;
  let state = false;
</script>

{#if click}
  <button on:click={() => (state = !state)} class="tag">
    <span class:state class="pre">
      {#if state}
        x
      {:else}
        +
      {/if}</span
    ><span class="text">{text}</span><span class="number">({number})</span>
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
    width: min-content;
    padding: 2px 9px;
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
    font-size: 0.9rem;
    color: #fff;
  }

  .number {
    font-size: 0.65rem;
    color: #b8b8b8;
    align-self: flex-end;
    font-weight: 400;
    padding-bottom: 1.5px;
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
