<div class="wrapper">
  <p class="page-nav"><a href="/">Hlavní stránka</a> > Kontakt</p>
  <div class="container">
    <p class="static-text">
      Chtěli byste nám něco vzkázat, pochválit či něco zkritizovat? Vyberte
      podle kategorie správný email/telefon a dejte nám vědět!
    </p>
    <div class="contact">
      <p class="header ff-Lalezar">Dotazy</p>
      <a href="mailto:jakubakubek@gmail.com" class="email"
        >jakubakubek@gmail.com</a
      >
      <a href="tel:+420730-815-832" class="phone_num"
        ><span>+420</span> 730 815 832</a
      >
    </div>
    <div class="contact">
      <p class="header ff-Lalezar">Pochvaly</p>
      <a href="mailto:jakubakubek@gmail.com" class="email"
        >jakubakubek@gmail.com</a
      >
      <a href="tel:+420730-815-832" class="phone_num"
        ><span>+420</span> 730 815 832</a
      >
    </div>
    <div class="contact">
      <p class="header ff-Lalezar">Stížnosti</p>
      <a href="mailto:kriz@scg.cz" class="email">kriz@scg.cz</a>
      <a href="tel:+420737-407-354" class="phone_num"
        ><span>+420</span> 737 407 354</a
      >
    </div>
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

  .static-text {
    font-size: 1.25rem;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .header {
    font-size: 2rem;
  }

  .email {
    font-size: 1.2rem;
  }

  .phone_num {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .phone_num span {
    font-weight: 400;
    font-size: 0.95rem;
  }
</style>
