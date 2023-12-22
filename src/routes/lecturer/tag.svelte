<script>
  export let text;
  export let backgroundColor;
</script>

<span id="uuid"></span>
<p style="background-color: #{backgroundColor};">{text}</p>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@400;500;600;700&display=swap");

  p {
    margin: 0;
    padding: 0.12rem 0.5rem;
    text-align: center;
    border-radius: 0.45rem;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 0.9275rem;
    text-align: center;
    width: fit-content;
  }

  span {
    display: none;
  }
</style>
