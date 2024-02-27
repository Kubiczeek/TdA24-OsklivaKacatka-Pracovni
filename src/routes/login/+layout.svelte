<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap");

  :global(html) {
    font-size: 15px;
  }

  :global(img) {
    max-width: 100%;
  }

  :global(a, span, p, li, a:visited) {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #333;
  }

  :global(ul, ol) {
    list-style: none;
  }

  :global(button, input) {
    font-family: "Open Sans", sans-serif;
    outline: none;
    border: none;
    background-color: transparent;
  }

  :global(button) {
    cursor: pointer;
  }
</style>
