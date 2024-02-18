<script>
  import "sanitize.css";
  import { logo_black } from "$lib/assets/images.js";
</script>

<nav>
  <a href="/"><img src={logo_black} alt="logo" /> </a>
  <div class="anchors">
    <a href="/">Domů</a>
    <a href="/">Seznam lektorů</a>
    <a href="/">O nás</a>
    <a href="/">Kontkat</a>
  </div>
</nav>
<slot />
<footer>
  <div>
    <a href="/"><img src={logo_black} alt="logo" /> </a>
    <div class="anchors">
      <div class="list">
        <span class="header">Navigace pro zbloudilé pocestné</span>
        <a href="/">Lektorský portál</a>
        <a href="/">Seznam lektorů</a>
        <a href="/">O nás</a>
        <a href="/">Kontkat</a>
      </div>
      <div class="list">
        <span class="header">Soukromí</span>
        <a href="/">GDPR</a>
        <a href="/">Ochrana osobních údajů</a>
        <a href="/">Licenční podmínky</a>
      </div>
      <div class="list">
        <span class="header">Ostatní</span>
        <a href="/">Autoři</a>
        <a href="/">Technologie</a>
      </div>
    </div>
  </div>
</footer>
<p class="copywriter">
  © 2024 Teacher Digital Agency <span>(Ošklivá Káčátka)</span>
</p>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap");

  :global(html) {
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    color: #333;
    padding: 0;
    margin: 0;
  }

  a,
  span,
  p {
    color: #333;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  .copywriter {
    font-size: 0.933rem;
    font-weight: 600;
    color: rgba(51, 51, 51, 0.41);
    text-align: center;
    /* position: absolute;
    bottom: 0; */
    width: 100%;
  }

  .copywriter span {
    color: rgba(116, 199, 211, 0.78);
  }

  .anchors {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  nav .anchors {
    gap: 2.33rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.933rem;
  }

  .header {
    font-weight: 700;
  }

  footer .anchors {
    align-items: flex-start;
    gap: 6.66rem;
  }

  footer .anchors div {
    align-items: flex-start;
  }

  footer {
    width: 100%;
    display: flex;
    padding: 30.5px 150px;
    flex-direction: column;
    /* position: absolute;
    bottom: 10px; */
    -webkit-box-shadow: inset 0px 4px 10.7px 0px rgba(51, 51, 51, 0.01);
    -moz-box-shadow: inset 0px 4px 10.7px 0px rgba(51, 51, 51, 0.01);
    box-shadow: inset 0px 4px 10.7px 0px rgba(51, 51, 51, 0.01);
  }

  footer div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    max-width: 100%;
    width: 86px;
  }

  footer img {
    width: 137px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 19px 150px;
    font-weight: 600;
    -webkit-box-shadow: 0px 3px 16.2px 0px rgba(51, 51, 51, 0.03);
    -moz-box-shadow: 0px 3px 16.2px 0px rgba(51, 51, 51, 0.03);
    box-shadow: 0px 3px 16.2px 0px rgba(51, 51, 51, 0.03);
  }

  @media (max-width: 1300px) {
    nav {
      padding: 19px 2%;
    }
    footer {
      padding: 30.5px 2%;
    }
  }

  @media (max-width: 850px) {
    footer > div > a {
      display: none;
    }

    footer > div {
      width: 100%;
    }

    footer > div > .anchors {
      display: flex;
      width: 100%;
      justify-content: space-between;
      gap: 0px;
    }

    footer {
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    nav > .anchors {
      gap: 0.3rem;
    }
    .anchors {
      font-size: 0.8rem;
    }
  }
</style>
