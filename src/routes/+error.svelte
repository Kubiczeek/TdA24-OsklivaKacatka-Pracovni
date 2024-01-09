<script>
  import Logo from "$lib/assets/TDA-logo.svg";
  import Gear from "$lib/assets/gear-icon.svg";
  import { page } from "$app/stores";
</script>

<nav>
  <div class="nav-left">
    <div class="page-img bg-yellow">
      <img src={Gear} alt="" />
    </div>
    <span class="page-name color-black">Profil</span>
  </div>
  <a href="/" class="nav-right">
    <img src={Logo} alt="" />
  </a>
</nav>
<div class="main">
  <div class="content">
    <h1 class="error-code color-black">!404</h1>
    <h2 class="subheader color-black">Kde jen udělali soudruzi z NDR chybu?</h2>
    <br />
    <br />
    <h4 class="error-message color-lightblack">
      nebyla nalezena heldaná stránka:
    </h4>
    <p class="url color-lightblack">
      {$page.url.href}
    </p>
    <br />
    <p class="static-message color-lightblack">
      V případě nejasností zkuste odkaz na vyhledávanou stránku zkontrolovat a
      znovu vyhledat. Při nefunkčnosti odkazu se smiřte s faktem, že na stránce
      pod tímto odkazem nenajdete žádný obsah.
    </p>
    <br />
    <a href="/" class="return-back color-black bg-yellow">Vrátit se zpět</a>
  </div>
</div>
<p class="page-name-rotated">Error</p>

<style>
  h1,
  h2,
  h4,
  a {
    font-family: "Lalezar", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  p {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 3.8rem;
    box-shadow: 0px 4px 100px 0px rgba(116, 199, 211, 0.1);
  }

  .page-name-rotated {
    font-family: "Lalezar", sans-serif;
    font-size: 13.333rem;
    color: rgba(254, 203, 46, 0.1);
    transform: rotate(-90deg);
    position: fixed;
    right: -170px;
    bottom: 80px;
    z-index: -1;
    transition: opacity 0.25s ease-in-out;
  }

  span {
    line-height: 1.3;
  }

  @media (max-width: 1200px) {
    .page-name-rotated {
      opacity: 0;
    }
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
    filter: invert(17%) sepia(2%) saturate(0%) hue-rotate(235deg)
      brightness(89%) contrast(86%);
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

  .color-lightblack {
    color: rgba(51, 51, 51, 0.5);
  }

  .bg-yellow {
    background-color: #fecb2e;
  }

  .main {
    display: grid;
    width: 100%;
    height: 80vh;
    align-items: center;
    justify-items: center;
    font-family: "Open Sans", sans-serif;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(70%, 500px);
  }

  .error-code {
    font-size: 15rem;
    line-height: 1;
    text-align: start;
    width: 100%;
  }

  .subheader {
    font-size: 2.66rem;
    line-height: 1;
    text-align: start;
    width: 100%;
  }

  .error-message {
    font-size: 1.33rem;
    line-height: 1;
    text-align: start;
    width: 100%;
  }

  .url {
    font-size: 1rem;
    line-height: 1;
    text-align: start;
    width: 100%;
  }

  .static-message {
    font-size: 1rem;
    line-height: 1.5;
    text-align: start;
    width: 100%;
  }

  .return-back {
    font-size: 2.2rem;
    line-height: 1;
    text-align: start;
    width: min(100%, 300px);
    text-align: center;
    padding: 0.7rem 0 0.2rem 0;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    .main {
      margin-top: 1rem;
    }

    .error-code {
      font-size: 6rem;
      text-align: center;
    }

    .subheader {
      font-size: 1.8rem;
      text-align: center;
    }

    .error-message {
      font-size: 1.34rem;
      text-align: center;
    }

    .url {
      font-size: 1rem;
      text-align: center;
    }

    .static-message {
      font-size: 1rem;
      text-align: center;
    }

    .return-back {
      font-size: 1.5rem;
    }
  }
</style>
