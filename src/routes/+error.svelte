<script>
  import { page } from "$app/stores";
</script>

<div class="wrapper">
  <p class="errorCode ff-Lalezar">!404</p>
  <p class="ff-Lalezar">
    Jak jsi se sem dostal? Protože chyba není u nás, ale u tebe (opak není
    možný)
  </p>
  <p class="ff-Lalezar">nebyla nalezena hledaná stránka:</p>
  <p class="link">{$page.url.href}</p>
  <p class="description">
    V případě nejasností zkuste odkaz na vyhledávanou stránku zkontrolovat a
    znovu vyhledat. Při nefunkčnosti odkazu se smiřte s faktem, že na stránce
    pod tímto odkazem nenajdete žádný obsah.
  </p>
  <button class="ff-Lalezar" on:click={() => history.back()}>Vrátit se</button>
</div>

<style>
  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .wrapper {
    width: min(95%, 500px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem 0;
    min-height: 90vh;
  }

  .errorCode {
    margin-top: 6rem;
    font-size: 13rem;
    line-height: 8rem;
  }

  .description {
    font-size: 1.15rem;
    color: #b8b8b8;
  }

  .link {
    font-size: 1.15rem;
    color: #b8b8b8;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 2rem;
  }

  p:nth-child(3) {
    font-size: 2rem;
    color: #b8b8b8;
  }

  button {
    font-size: 2.2rem;
    line-height: 1;
    width: min(100%, 300px);
    text-align: center;
    padding: 0.7rem 0 0.2rem 0;
    background-color: #fecb2e;
    border-radius: 0.45rem;
    color: #333;
    margin-top: 1rem;
    align-self: center;
  }

  @media screen and (max-width: 400px) {
    .errorCode {
      font-size: 10rem;
      line-height: 6rem;
      margin-top: 2rem;
    }
  }
</style>
