<script>
  import Button from "./about/Button.svelte";
</script>

<div class="main">
  <div class="content">
    <p class="header error">! 404</p>
    <p class="header">Kde jen udělali soudruzi z NDR chybu?</p>
    <br />
    <p class="subheader">nebyla nalezena hledaná stránka</p>
    <br />
    <p class="description">
      V případě nejasností zkuste odkaz na vyhledávanou stránku zkontrolovat a
      znovu vyhledat. Při nefunkčnosti odkazu se smiřte s faktem, že na stránce
      pod tímto odkazem nenajdete žádný obsah.
    </p>
    <br />
    <div class="btn">
      <Button text="Hlavní menu" redirect="/"></Button>
    </div>
  </div>
</div>

<style>
  .btn {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 0;
    text-align: center;
  }

  .description {
    font-family: "Open Sans", sans-serif;
    color: #999999;
    font-size: 1.3rem;
  }

  .subheader {
    font-family: "Lalezar", sans-serif;
    font-size: 2.4rem;
    color: #999999;
  }

  .header {
    font-size: 2.9rem;
    text-align: center;
    font-family: "Lalezar", sans-serif;
    color: #333333;
    overflow: visible;
    word-break: keep-all;
    text-align: center;
  }

  .error {
    font-size: 15rem;
  }

  .main {
    width: 100%;
    height: 90vh;
    background: linear-gradient(
      117deg,
      rgba(51, 51, 51, 0.02) 0%,
      rgba(51, 51, 51, 0) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
