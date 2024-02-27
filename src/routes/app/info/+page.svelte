<script>
  import { logo_black } from "$lib/assets/images.js";
  import Tag from "$lib/components/Tag.svelte";
</script>

<svelte:head>
  <title>TdA - Lektorský Portál - Info</title>
</svelte:head>

<div class="wrapper">
  <div class="sidebar">
    <div class="top-side">
      <a href="/">
        <img src={logo_black} alt="" />
      </a>
      <div class="links">
        <a class="ff-Lalezar active" href="/app/info">Osobní&nbsp;informace</a>
        <a class="ff-Lalezar" href="/app/reservation">Rezervace</a>
      </div>
    </div>
    <div class="bot-side">
      <a href="/logout" class="ff-Lalezar">Odhlásit&nbsp;se</a>
    </div>
  </div>
  <div class="content">
    <h1 class="ff-Lalezar">Osobní informace</h1>
    <div class="name">
      <div class="div-input">
        <p class="input-name">
          Křestní jméno&ThinSpace;<span class="required">*</span>
        </p>
        <input required type="text" class="text" placeholder="Josef" />
      </div>
      <div class="div-input">
        <p class="input-name">Druhé jméno</p>
        <input type="text" class="text" placeholder="Adam" />
      </div>
      <div class="div-input">
        <p class="input-name">
          Příjmení&ThinSpace;<span class="required">*</span>
        </p>
        <input required type="text" class="text" placeholder="Novák" />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Titul před jménem</p>
        <input type="text" class="text" placeholder="Mgr, et Mgr." />
      </div>
      <div class="div-input">
        <p class="input-name">Titul za jménem</p>
        <input type="text" class="text" placeholder="WcDr." />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Claim</p>
        <input
          type="text"
          class="text"
          placeholder="Do houskových knedlíků se nedávají housky!"
        />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Město</p>
        <input type="text" class="text" placeholder="Praha" />
      </div>
      <div class="div-input checkbox">
        <p class="input-name">Vyučuji&NonBreakingSpace;online?</p>
        <input type="checkbox" />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">
          Telefonní čísla&ThinSpace;<span class="required">*</span>
        </p>
        <input
          required
          type="tel"
          class="text"
          placeholder="+420 123 456 789"
        />
        <button class="add-field">+&nbsp;Přidat&nbsp;další&nbsp;pole</button>
      </div>
      <div class="div-input">
        <p class="input-name">
          Emailové adresy&ThinSpace;<span class="required">*</span>
        </p>
        <input
          required
          type="email"
          class="text"
          placeholder="pepik.schenk@gmail.com"
        />
        <button class="add-field">+&nbsp;Přidat&nbsp;další&nbsp;pole</button>
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">
          Cena&ThickSpace;<span class="small-text">(kč/h)</span>
        </p>
        <input type="number" class="text" placeholder="250" />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Autobiografie</p>
        <input
          type="text"
          class="text-area"
          placeholder="Baví mě organizovat věci. Ať už to bylo vyvíjení mobilních aplikací ve Futured, pořádání konferencí, spolupráce na soutěžích Prezentiáda, pIšQworky, <b>Tour de App</b> a Středoškolák roku, nebo třeba dobrovolnictví, vždycky jsem skončila u projektového managementu, rozvíjení soft-skills a vzdělávání. U studentských..."
        />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Dovednosti</p>
        <input
          type="text"
          class="add-tag"
          placeholder="Napište název dovednosti pro přidání..."
        />
        <div class="tags">
          {#each Array(15) as item}
            <button class="tag"
              ><span class="small-text">x</span>&ThickSpace;Matematika</button
            >
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    padding: 0;
    margin: 0;
  }

  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: 2px 0px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 2px 0px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 2px 0px 15px 0px rgba(51, 51, 51, 0.06);
    padding: 1.33rem 2rem;
    height: 100vh;
  }

  .sidebar a {
    font-size: 1.733rem;
  }

  .top-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .links a {
    text-decoration: underline solid #3333332a;
  }

  .links a.active {
    text-decoration: underline solid #333333;
  }

  .sidebar img {
    width: 86px;
  }

  .content {
    width: 100%;
    display: flex;
    padding: 2rem 6.5rem;
    flex-direction: column;
    gap: 1rem;
  }

  .content h1 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    color: #333333;
  }

  .div-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.25rem;
  }

  input {
    border: 1px solid #b8b8b8;
    border-radius: 6px;
    color: #333333;
    width: 100%;
    padding: 0.4rem 0.66rem;
  }

  input::placeholder {
    color: #b8b8b8;
    opacity: 1;
  }

  .input-name {
    display: flex;
    font-weight: 600;
  }

  .required {
    color: red;
    padding-top: 2px;
    font-size: 0.7rem;
  }

  .name {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1.5rem;
  }

  .checkbox {
    flex-direction: row;
    align-items: center;
    padding-top: 1.5rem;
    gap: 2rem;
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    border: 1px solid #b8b8b8;
    border-radius: 6px;
    color: #333333;
    padding: 0.4rem 0.66rem;
  }

  .add-field {
    color: #b8b8b8;
    width: fit-content;
  }

  .small-text {
    font-weight: 400;
    font-size: 0.8rem;
    align-self: flex-end;
  }

  .text-area {
    height: auto;
  }

  .add-tag {
    width: 25%;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0.2rem;
    gap: 0.25rem;
  }

  .tag {
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #333;
    gap: 2px;
    color: #fff;
    padding: 3px 9px;
    font-weight: 600;
  }

  .tag .small-text {
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    padding-bottom: 1px;
  }
</style>
