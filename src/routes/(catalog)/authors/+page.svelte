<div class="wrapper">
  <p class="page-nav"><a href="/">Hlavní stránka</a> > Autoři</p>
  <div class="container">
    <p class="ff-Lalezar head">Autoři</p>
    <p class="static-text">
      Autoři této webové aplikace jsou studenti středních škol, kteří tuto
      aplikaci vytvářeli do soutěže Tour de App.
    </p>
    <p class="ff-Lalezar head2">Jakub Jakůbek</p>
    <p class="static-text">
      Člověk co tady dělal (skoro) všechno. Vytvářel moc pěkný design,
      programoval frontend a i částečně backend. Komunikoval se všema. Dalo by
      se to popsat jako Product Manager. Ten člověk je jako fakt skvělej. A
      dokonce psal i přímo tuto stránku a tento text c: Být trochu skromnější,
      tak jsem dokonalý.
    </p>
    <p class="ff-Lalezar head2">Adam Mikulič</p>
    <p class="static-text">
      Člověk co je schopnej za 6 hodin práce udělat funkční kód. Ten kód ale
      dává ostatním programátorům noční můry, protože je to takový "quick and
      dirty" kód. Ale funguje to (většinou). Sice to není hlavní, ale já (Kuba)
      nechci dělat všechno sám, takže to přetrpím.
    </p>
    <p class="ff-Lalezar head2">Petr Kníže</p>
    <p class="static-text">
      Dělal první verzi UI designu, která ani nebyla tak špatná, ale blbě by se
      to scalovalo. Takže jsem to já (Kuba) předělal. Jinak poctivě chodil na
      všechny schůze s klientama a menotrem. Hlavně teda dělal mentální podporu,
      ale to se taky počítá. :)
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
