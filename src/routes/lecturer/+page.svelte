<script>
  import Tag from "./tag.svelte";
  import Profil from "$lib/assets/Profil.png";
  import Phone from "$lib/assets/Phone.svg";

  function copyToClipboard() {
    const copyText = document.getElementById("uuid");

    navigator.clipboard.writeText(copyText.textContent);
  }
</script>

<div class="main">
  <div class="container">
    <div class="profile-rotated desktopView">
      <img src={Profil} alt="" />
    </div>
    <div class="mobileView">
      <span class="header page-name color-black">Profil</span>
    </div>
    <div class="card">
      <div class="profile">
        <div class="profilePicture desktopView">
          <img
            src="https://tourdeapp.cz/storage/images/2023_02_25/412ff296a291f021bbb6de10e8d0b94863fa89308843b/big.png.webp"
            alt=""
          />
          <span class="header small-text color-black"
            >67fda282-2bca-41ef-9caf-039cc5c8dd69</span
          >
        </div>
        <div class="info">
          <p class="name header color-black">Mgr. Petra Swil Plachá MBA</p>
          <p class="claim color-darkblue">
            Aktivní studentka / Předsedkyně spolku / Projektová manažerka
          </p>
          <div class="grid-sections desktopView">
            <div class="bg-grey color-black section kontakt">
              <p class="header">kontaktní údaje</p>
              <div class="kontakt-section">
                <div class="phone-icon">
                  <img src={Phone} alt="" />
                </div>
                <div class="numbers">
                  <span class="small-text">+420</span> 722 482 974
                </div>
                <div class="email-icon">
                  <span class="color-darkblue header">@</span>
                </div>
                <div class="emails color-black">
                  <span>predseda@scg.cz</span>
                  <span>placha@scg.cz</span>
                </div>
              </div>
            </div>
            <div class="bg-grey color-black section finance">
              <p class="header">finanční ohodnocení</p>
              <p class="section-description">
                1200 Kč<span class="small-text">/hodina</span>
              </p>
            </div>
            <div class="bg-grey color-black section lokalita">
              <p class="header">lokalita</p>
              <p class="section-description">Brno</p>
            </div>
          </div>
          <div class="grid-sections mobileView">
            <div class="profilePicture mobileView">
              <img
                src="https://tourdeapp.cz/storage/images/2023_02_25/412ff296a291f021bbb6de10e8d0b94863fa89308843b/big.png.webp"
                alt=""
              />
            </div>
            <div class="bg-grey color-black section kontakt">
              <p class="header">kontaktní údaje</p>
              <div class="kontakt-section">
                <div class="phone-icon">
                  <img src={Phone} alt="" />
                </div>
                <div class="numbers">
                  <span class="small-text">+420</span> 722 482 974
                </div>
                <div class="email-icon">
                  <span class="color-darkblue header">@</span>
                </div>
                <div class="emails color-black">
                  <span>predseda@scg.cz</span>
                  <span>placha@scg.cz</span>
                </div>
              </div>
            </div>
            <div class="bg-grey color-black section finance">
              <p class="header">finanční ohodnocení</p>
              <p class="section-description">
                1200 Kč<span class="small-text">/hodina</span>
              </p>
            </div>
            <div class="bg-grey color-black section lokalita">
              <p class="header">lokalita</p>
              <p class="section-description">Brno</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bio">
        <div class="section bg-grey">
          <p class="header">Autobiografie</p>
          <p class="small-text biografie">
            Baví mě organizovat věci. Ať už to bylo vyvíjení mobilních aplikací
            ve Futured, pořádání konferencí, spolupráce na soutěžích
            Prezentiáda, pIšQworky, <b>Tour de App</b> a Středoškolák roku, nebo
            třeba dobrovolnictví, vždycky jsem skončila u projektového managementu,
            rozvíjení soft-skills a vzdělávání. U studentských projektů a akcí jsem
            si vyzkoušela snad všechno od marketingu po logistiku a moc ráda to předám
            dál. Momentálně studuji Pdf MUNI a FF MUNI v Brně.
          </p>
        </div>
        <div class="tags">
          <Tag text="#dobrovolnictví" backgroundColor="74C7D3" />
          <Tag text="#studentské spolky" backgroundColor="74C7D3" />
          <Tag text="#efektivní učení" backgroundColor="74C7D3" />
          <Tag text="#prezentační dovednosti" backgroundColor="74C7D3" />
          <Tag text="#mimoškolní aktivity" backgroundColor="74C7D3" />
          <Tag
            text="#marketing pro neziskové studentské projekty"
            backgroundColor="74C7D3"
          />
          <Tag
            text="#projektový management, event management"
            backgroundColor="74C7D3"
          />
          <Tag
            text="#fundraising pro neziskové studentské projekty"
            backgroundColor="74C7D3"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  :global(html) {
    font-size: 15px;
  }

  p,
  span {
    margin: 0;
    line-height: 1.2;
  }

  .bg-grey {
    background-color: #f2f2f2;
  }

  .color-darkblue {
    color: #00384d;
  }

  .small-text {
    font-size: 1rem;
    font-weight: 400;
  }

  .color-black {
    color: #333333;
  }

  .header {
    font-family: "Lalezar", sans-serif;
  }

  .profile-rotated {
    width: max(14%, 150px);
    margin-right: 1.5%;
    margin-top: 0.75%;
  }

  .profile-rotated img {
    width: 100%;
  }

  .profile {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .kontakt-section {
    display: grid;
    grid-template-areas: "phone-icon numbers" "email-icon emails";
    grid-template-columns: min-content;
    column-gap: 0.666rem;
  }

  .biografie {
    line-height: 1.33;
  }

  .phone-icon {
    grid-area: phone-icon;
    display: flex;
    align-items: center;
    width: min-content;
  }

  .numbers {
    grid-area: numbers;
    font-size: 1.666rem;
    font-weight: 700;
  }

  .email-icon {
    grid-area: email-icon;
    font-size: 1.666rem;
    width: min-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .emails {
    grid-area: emails;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: min-content;
    grid-auto-flow: column;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    column-gap: 1rem;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.533rem;
  }

  .grid-sections {
    display: grid;
    grid-template-areas: "kontakt kontakt" "finance lokalita";
    grid-auto-columns: 1fr;
    gap: 0.66rem;
  }

  .kontakt {
    grid-area: kontakt;
  }

  .finance {
    grid-area: finance;
  }

  .lokalita {
    grid-area: lokalita;
  }

  .section-description {
    font-size: 1.3333rem;
  }

  .section {
    padding: 6px 12px;
    border-radius: 7px;
  }

  .info > * {
    margin: 0;
    padding: 0;
  }

  .info {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .name {
    font-size: 3rem;
    line-height: 1.3;
  }

  .claim {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.2;
  }

  .profilePicture img {
    border-radius: 25px;
  }

  .profilePicture {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .profilePicture > span {
    color: #f2f2f2;
    padding-top: 5px;
    transition: color 0.2s ease-in-out;
  }

  .profilePicture > span:hover {
    color: #333333;
    cursor: copy;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: min(95%, 900px);
  }

  .main {
    display: grid;
    width: 100%;
    height: 90vh;
    margin-top: 1%;
    align-items: center;
    justify-items: center;
    font-family: "Open Sans", sans-serif;
  }

  .mobileView {
    display: none;
  }

  @media (max-width: 700px) {
    .desktopView {
      display: none;
    }
    .main {
      height: 90vh;
    }
    .mobileView {
      display: flex;
    }

    .page-name {
      font-size: 2.666rem;
    }
    .container {
      display: flex;
      flex-direction: column;
    }

    .profile-rotated {
      display: none;
    }

    .profile {
      flex-direction: column;
      gap: 1rem;
    }
    .grid-sections:has(.mobileView) {
      display: grid;
      grid-template-areas: "profile kontakt" "lokalita finance";
      grid-auto-rows: auto;
      grid-auto-columns: 1fr 1fr;
      column-gap: 0.73333rem;
      row-gap: 1rem;
    }

    .emails {
      grid-auto-flow: row;
      grid-template-rows: auto;
    }

    .profilePicture:has(.mobileView) {
      grid-area: profile;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .profilePicture > img {
      width: 100%;
      border-radius: 25px;
    }

    .info {
      gap: 1rem;
    }

    .kontakt {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .kontakt-section {
      gap: 0.8rem;
    }

    .numbers {
      font-size: 1.06666rem;
    }

    .numbers span {
      font-size: 0.8666rem;
    }

    .card {
      gap: 1rem;
    }
  }
</style>
