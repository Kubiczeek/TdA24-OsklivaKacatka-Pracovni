<script>
  import { logo_color, magnifier } from "$lib/assets/images.js";
</script>

<main>
  <div class="wrapper">
    <section class="first">
      <div class="container">
        <p class="ff-Lalezar">Učitelé na pár kliknutí</p>
        <p class="ff-Lalezar">Vyhledej si pro sebe to pravé ořechové!</p>
        <div class="search">
          <input type="text" placeholder="Vyhledat" />
          <button><img src={magnifier} alt="magnifier" /></button>
        </div>
        <div class="buttons">
          <a href="/" class="ff-Lalezar" style="background-color: #00384D;">
            Naši lektoři
          </a>
          <a href="/" class="ff-Lalezar" style="background-color: #74C7D3;">
            O nás
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

  .search {
    display: flex;
    align-items: center;
    margin: 0.75rem 0;
    font-size: 1.2rem;
    padding: 0.667rem 0.667rem;
    border-radius: 7px;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }

  .search > input {
    font-size: 1.1rem;
    width: 100%;
    color: #333;
  }

  .search > input::placeholder {
    font-size: 1.1rem;
    color: rgba(51, 51, 51, 0.41);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .buttons > a {
    margin-top: 1rem;
    font-size: 1.8rem;
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
</style>
