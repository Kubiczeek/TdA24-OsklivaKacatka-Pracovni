<script>
  import { logo_color, magnifier } from "$lib/assets/images.js";
</script>

<main>
  <div class="info">
    <div class="interactive">
      <p>
        Učitelé na pár kliknutí! <br />
        Vyhledej si pro sebe to prvá ořechové!
      </p>
      <div class="container">
        <input type="text" name="search" id="search" placeholder="Vyhledat" />
        <button>
          <img src={magnifier} alt="" />
        </button>
      </div>
      <div class="buttons">
        <a href="/" style="background-color: #00384D;">Naši lektoři</a>
        <a href="/" style="background-color: #74C7D3;">O nás</a>
      </div>
    </div>
    <div class="logo">
      <img src={logo_color} alt="logo" />
    </div>
  </div>
  <div class="featured"></div>
</main>

<style>
  p,
  a,
  a:visited {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #333;
  }
  main {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .info {
    display: flex;
    width: min(100%, 1200px);
    flex-direction: row;
    justify-content: space-around;
  }

  .interactive {
    display: flex;
    flex-direction: column;
    font-family: "Lalezar", sans-serif;
    font-size: 2rem;
    gap: 1.333rem;
  }

  input,
  button {
    border: none;
    padding: 0;
    margin: 0;
    background-color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
  }

  button:hover {
    cursor: pointer;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    padding: 0.66rem;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }

  .container input {
    width: 100%;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .buttons > a {
    font-family: "Lalezar", sans-serif;
    font-size: 2rem;
    background-color: #00384d;
    color: white;
    width: 45%;
    border-radius: 7px;
    padding-top: 5px;
    text-align: center;
  }

  input:focus {
    outline: none;
  }

  .container img {
    width: auto;
  }

  img {
    min-width: 100%;
    max-width: 100%;
    width: 330px;
  }

  @media (max-width: 850px) {
    .info {
      flex-direction: column;
      align-items: center;
      width: 95%;
    }

    .logo {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .buttons a {
      font-size: 1.5rem;
    }
  }
</style>
