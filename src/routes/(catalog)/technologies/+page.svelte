<div class="wrapper">
  <p class="page-nav"><a href="/">Hlavní stránka</a> > Technologie</p>
  <div class="container">
    <p class="ff-Lalezar head">Technologie</p>
    <p class="static-text">
      V čem jsem se tak trápili a utopili tolik hodin času? To je popsáno níže.
    </p>
    <a
      href="https://kit.svelte.dev/"
      class="ff-Lalezar head2"
      style="text-decoration: underline">Sveltekit</a
    >
    <p class="static-text">
      SvelteKit je moderní webový framework postavený na základech Svelte, který
      umožňuje rychlý a efektivní vývoj responsivních webových aplikací s
      důrazem na jednoduchost a výkon. (by GPT3.5)
    </p>
    <a
      href="https://github.com/Kubiczeek/Database-quickly-js"
      class="ff-Lalezar head2"
      style="text-decoration: underline">Database quickly</a
    >
    <p class="static-text">
      Databse quickly je super knihovna pro vytváření jednoduchých databází
      hodně rychle. Autorem tohoto "projektíku" je Kuba (jak jinak). Ta verze co
      se používá tady a je starší a deprecated, ale na tohle to stačí. Už teda
      existuje i nová verze, ale ta tady ještě není implemenotvaná. Nová verze
      má třeba typechecking. (by Kuba)
    </p>
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
    margin-bottom: 2rem;
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

  .head {
    font-size: 2.5rem;
  }

  .head2 {
    font-size: 1.7rem;
    line-height: 30px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }

  .static-text {
    font-size: 1.15rem;
  }
</style>
