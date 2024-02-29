<script>
  import { logo_black, icons_line } from "$lib/assets/images.js";
</script>

<div class="wrapper">
  <p class="page-nav"><a href="/">Hlavní stránka</a> > O nás</p>
  <div class="container">
    <img src={logo_black} alt="logo" />
    <p>
      Teacher digital Agency je mladá společnost zaměřená na <strong
        >vyhledávání špičkových odborníků z řad učitelů, lektorů a tutorů.</strong
      > Sestavujeme exkluzivní databázi těchto specialistů, abychom mohli efektivně
      propojovat klienty s ideálními odborníky dle jejich přání a specifických potřeb.
      Vaše vzdělávání je u nás v dobrých rukou.
    </p>
    <img class="icons" src={icons_line} alt="icons in line" />
    <a href="/lecturers" class="ff-Lalezar" style="background-color: #74C7D3;">
      Seznam lektorů
    </a>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    min-height: 90vh;
    width: min(95%, 800px);
    margin: 0 auto;
    padding: 2rem 0;
  }

  .page-nav {
    font-size: 1rem;
    align-self: flex-start;
  }

  .page-nav a {
    color: #74c7d3;
    text-decoration: underline;
  }

  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }

  div > p {
    font-size: 1.2rem;
  }

  div > img:first-child {
    width: 263px;
  }

  .icons {
    width: 570px;
  }

  div > a {
    margin-top: 1rem;
    font-size: 2rem;
    padding: 0.3rem 3rem 0;
    text-align: center;
    border-radius: 7px;
    color: #fff;
  }
</style>
