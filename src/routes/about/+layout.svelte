<script>
  import "sanitize.css";
  import talk from "$lib/assets/talk-icon.svg";
  import logo from "$lib/assets/logo-black.svg";
</script>

<nav>
  <div class="left">
    <div class="colored"><img src={talk} alt="" /></div>
    <span>O Nás</span>
  </div>
  <a class="right" href="/">
    <img src={logo} alt="" />
  </a>
</nav>
<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  .left {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right > img {
    max-width: 100%;
  }

  .colored {
    background-color: #fecb2e;
    height: 100%;
  }
  .colored > img {
    padding: 1rem;
  }

  nav {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 9.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 10;
    background-color: white;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .right img {
    width: 5rem;
    height: auto;
  }

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .left span {
    font-family: "Lalezar", sans-serif;
    font-size: 2.5rem;
    color: #333333;
    padding-top: 0.6rem;
  }
</style>
