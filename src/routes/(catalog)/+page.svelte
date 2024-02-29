<script>
  import { logo_color, magnifier } from "$lib/assets/images.js";
  import Search from "$lib/components/search.svelte";
</script>

<main>
  <div class="wrapper">
    <section class="first">
      <div class="container">
        <p class="ff-Lalezar">Učitelé na pár kliknutí</p>
        <p class="ff-Lalezar">Vyhledej si pro sebe to pravé ořechové!</p>
        <Search redirect={true} />
        <div class="buttons">
          <a
            href="/lecturers"
            class="ff-Lalezar"
            style="background-color: #00384D;"
          >
            Seznam lektorů
          </a>
          <a
            href="/app/reservation"
            class="ff-Lalezar"
            style="background-color: #74C7D3;"
          >
            Lektorský portál
          </a>
        </div>
      </div>
      <img class="logo" src={logo_color} alt="logo_color" />
    </section>
  </div>
</main>

<style>
  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .logo {
    width: 330px;
  }

  .wrapper {
    display: flex;
    width: min(95%, 1200px);
    min-height: 90vh;
    padding: 13rem 0;
    /* Centring the wrapper */
    justify-content: center;
    margin: 0 auto;
  }

  .first {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: min-content;
  }

  .container > p {
    font-size: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .buttons > a {
    margin-top: 1rem;
    font-size: 1.73rem;
    padding: 0.3rem 0 0;
    width: 48%;
    text-align: center;
    border-radius: 7px;
    color: #fff;
  }

  @media screen and (max-width: 870px) {
    .logo {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    .buttons {
      flex-direction: column;
      width: 100%;
    }

    .buttons > a {
      width: 100%;
    }
  }
</style>
