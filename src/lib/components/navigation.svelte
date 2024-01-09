<script>
  import Logo from "$lib/assets/TDA-logo.svg";
  export let icon;
  export let pageName = "Profil";
  export let color, ref;
</script>

<nav>
  <div class="nav-left">
    <div class="page-img" style="background-color: {color}">
      <img {ref} src={icon} alt="" />
    </div>
    <span class="page-name color-black">{pageName}</span>
  </div>
  <a href="/" class="nav-right">
    <img src={Logo} alt="" />
  </a>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 3.8rem;
    box-shadow: 0px 4px 100px 0px rgba(116, 199, 211, 0.1);
  }

  span {
    line-height: 1.3;
  }

  .nav-left {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .page-img {
    height: 100%;
  }

  .page-img > img {
    width: auto;
    max-height: 100%;
    transform: scale(0.75);
  }

  .page-name {
    font-family: "Lalezar", sans-serif;
    font-size: 2.666rem;
    align-self: flex-end;
  }

  .nav-right > img {
    width: auto;
    max-height: 100%;
    transform: scale(0.8);
  }

  .color-black {
    color: #333333;
  }
</style>
