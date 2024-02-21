<script>
  import "sanitize.css";
  import { logo_black, hamburger, cross } from "$lib/assets/images.js";

  let open = false;
</script>

<svelte:head>
  <title>Teacher digital Agency</title>
</svelte:head>

<nav>
  <div class="contents">
    <a href="/">
      <img src={logo_black} alt="" />
    </a>
    <div class="links">
      <a href="/">Domů</a>
      <a href="/">Seznam lektorů</a>
      <a href="/about">O nás</a>
      <a href="/">Kontakt</a>
    </div>
    <button on:click={() => (open = true)}>
      <img src={hamburger} alt="" />
    </button>
    <div class="sidebar" class:open>
      <button class="close" on:click={() => (open = false)}>
        <img src={cross} alt="" />
      </button>
      <a href="/">Domů</a>
      <a href="/">Seznam lektorů</a>
      <a href="/">O nás</a>
      <a href="/">Kontakt</a>
    </div>
  </div>
</nav>
<slot />
<footer>
  <div class="footer-content">
    <a href="/" class="footer-logo"> <img src={logo_black} alt="" /> </a>
    <ul>
      <li>Navigace pro zbloudilé pocestné</li>
      <li><a href="/">Domů</a></li>
      <li><a href="/">Lektorský portál</a></li>
      <li><a href="/">Seznam lektorů</a></li>
      <li><a href="/about">O nás</a></li>
      <li><a href="/">Kontakt</a></li>
    </ul>
    <ul>
      <li>Soukromí</li>
      <li><a href="/">GDPR</a></li>
      <li><a href="/">Ochrana osobních údajů</a></li>
      <li><a href="/">Licenční podmínky</a></li>
    </ul>
    <ul>
      <li>Ostatní</li>
      <li><a href="/">Autoři</a></li>
      <li><a href="/">Technologie</a></li>
    </ul>
  </div>
</footer>
<p>© 2024 Teacher Digital Agency <span>(Ošklivá Káčátka)</span></p>

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
    outline: none;
    border: none;
    background-color: transparent;
  }

  :global(button) {
    cursor: pointer;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  }

  footer div > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer a > img {
    width: 137px;
  }

  footer div {
    width: min(1200px, 95%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  footer ul > li {
    padding: 0.1rem 1.25rem;
  }

  footer ul > li:first-child {
    padding: 0.5rem 1.25rem;
    font-weight: 700;
  }

  footer ul a {
    padding: 0;
  }

  footer ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  p {
    font-size: 0.85rem;
    padding: 0.5rem;
    font-weight: 600;
    text-align: center;
    color: #333;
    opacity: 0.6;
  }

  p > span {
    color: #74c7d3;
  }

  nav {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    font-size: 1.2rem;
  }

  .contents button,
  .sidebar {
    display: none;
  }

  a {
    padding: 1rem 2rem;
  }

  nav img {
    width: 86px;
  }

  .footer-logo {
    height: min-content;
    align-self: center;
  }

  @media (max-width: 720px) {
    .links {
      display: none;
    }

    footer div {
      flex-direction: column;
    }

    footer div > a {
      display: none;
    }

    .sidebar {
      display: flex;
      position: absolute;
      flex-direction: column;
      align-items: flex-end;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100vh;
      font-weight: 700;
      font-size: 1.4rem;
      padding: 1rem 0.2rem;
      backdrop-filter: blur(3px);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    .sidebar > button {
      display: block;
      border: none;
      background-color: transparent;
      width: auto;
      padding: 1rem 2rem;
    }

    .sidebar > button img {
      width: 30px;
    }

    .contents > button {
      display: block;
      border: none;
      background-color: transparent;
      width: auto;
      padding: 1rem 2rem;
    }

    .contents > button img {
      width: 35px;
    }

    .open {
      opacity: 1;
      left: 0;
    }
  }
</style>
