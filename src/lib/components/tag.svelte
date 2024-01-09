<script>
  export let text;
  export let backgroundColor;
  export let small = false;
</script>

<span id="uuid"></span>
{#if small}
  <p
    style="background-color: {backgroundColor}; font-size: 0.73rem; font-weight: 400;"
  >
    {text}
  </p>
{:else}
  <p
    style="background-color: {backgroundColor}; font-size: 0.9275rem; font-weight: 600;"
  >
    {text}
  </p>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@400;500;600;700&display=swap");

  p {
    margin: 0;
    padding: 0.1rem 0.4rem;
    text-align: center;
    border-radius: 0.45rem;
    color: white;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    width: fit-content;
  }

  span {
    display: none;
  }
</style>
