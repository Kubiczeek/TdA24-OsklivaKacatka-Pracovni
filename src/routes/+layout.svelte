<script>
  import "sanitize.css";
</script>

<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  * {
    min-width: 0;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
  }

  :global(.not-selectable) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(html) {
    font-family: "Open Sans", sans-serif;
  }

  :global([ref="lightblue"]) {
    filter: invert(77%) sepia(12%) saturate(1243%) hue-rotate(139deg)
      brightness(95%) contrast(86%);
  }

  :global([ref="black"]) {
    filter: invert(17%) sepia(2%) saturate(0%) hue-rotate(235deg)
      brightness(89%) contrast(86%);
  }
</style>
