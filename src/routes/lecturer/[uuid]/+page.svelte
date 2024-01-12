<script>
  import toast, { Toaster } from "svelte-french-toast";
  import Navigation from "$lib/components/navigation.svelte";
  import Tag from "$lib/components/tag.svelte";
  import { raise, phone } from "$lib/assets/images.js";

  let uuid;

  export let data;

  function copyToClipboard() {
    navigator.clipboard.writeText(uuid.textContent);
    toast.success("Zkopírováno do schránky", {
      position: "bottom-right",
    });
  }
</script>

<Toaster />
<Navigation icon={raise} color="#00384d" ref="lightblue" pageName="Profil" />
<div class="main">
  <div class="container">
    <div class="card">
      <div class="profile">
        <div class="profilePicture desktopView">
          <img src={data.picture_url} alt="" />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span
            class="header small-text color-black not-selectable"
            bind:this={uuid}
            on:click={copyToClipboard}>{data.uuid}</span
          >
        </div>
        <div class="info">
          <div class="texts">
            <p class="name header color-black">
              {data.title_before}
              {data.first_name}
              {data.middle_name}
              {data.last_name}
              {data.title_after}
            </p>
            <p class="claim color-darkblue">
              {data.claim}
            </p>
          </div>
          <div class="grid-sections desktopView">
            <div class="bg-lightblue color-black section kontakt">
              <p class="header">kontaktní údaje</p>
              <div class="kontakt-section">
                <div class="phone-icon">
                  <img src={phone} alt="" />
                </div>
                <div class="numbers">
                  {#each data.contact.telephone_numbers as number}
                    <span class="small-text">{number.split(" ")[0]}</span>
                    {number.split(" ").slice(1).join(" ")}
                  {/each}
                </div>
                <div class="email-icon">
                  <span class="color-darkblue header">@</span>
                </div>
                <div class="emails color-black">
                  {#each data.contact.emails as email}
                    <span>{email}</span>
                  {/each}
                </div>
              </div>
            </div>
            <div class="bg-lightblue color-black section finance">
              <p class="header">finanční ohodnocení</p>
              <p class="section-description">
                {data.price_per_hour} Kč<span class="small-text">/hodina</span>
              </p>
            </div>
            <div class="bg-lightblue color-black section lokalita">
              <p class="header">lokalita</p>
              <p class="section-description">{data.location}</p>
            </div>
          </div>
          <div class="grid-sections middleView">
            <div class="bg-lightblue color-black section kontakt">
              <p class="header">kontaktní údaje</p>
              <div class="kontakt-section">
                <div class="phone-icon">
                  <img src={phone} alt="" />
                </div>
                <div class="numbers">
                  {#each data.contact.telephone_numbers as number}
                    <span class="small-text">{number.split(" ")[0]}</span>
                    {number.split(" ").slice(1).join(" ")}
                  {/each}
                </div>
                <div class="email-icon">
                  <span class="color-darkblue header">@</span>
                </div>
                <div class="emails color-black">
                  {#each data.contact.emails as email}
                    <span>{email}</span>
                  {/each}
                </div>
              </div>
            </div>
            <div class="bg-lightblue color-black section finance">
              <p class="header">finanční ohodnocení</p>
              <p class="section-description">
                {data.price_per_hour} Kč<span class="small-text">/hodina</span>
              </p>
            </div>
            <div class="bg-lightblue color-black section lokalita">
              <p class="header">lokalita</p>
              <p class="section-description">{data.location}</p>
            </div>
          </div>
          <div class="grid-sections mobileView">
            <div class="profilePicture mobileView">
              <img
                src="https://tourdeapp.cz/storage/images/2023_02_25/412ff296a291f021bbb6de10e8d0b94863fa89308843b/big.png.webp"
                alt=""
              />
            </div>
            <div class="bg-lightblue color-black section kontakt">
              <p class="header">kontaktní údaje</p>
              <div class="kontakt-section">
                <div class="phone-icon">
                  <img src={phone} alt="" />
                </div>
                <div class="numbers">
                  {#each data.contact.telephone_numbers as number}
                    <span class="small-text">{number.split(" ")[0]}</span>
                    {number.split(" ").slice(1).join(" ")}
                  {/each}
                </div>
                <div class="email-icon">
                  <span class="color-darkblue header">@</span>
                </div>
                <div class="emails color-black">
                  {#each data.contact.emails as email}
                    <span>{email}</span>
                  {/each}
                </div>
              </div>
            </div>
            <div class="bg-lightblue color-black section finance">
              <p class="header">finanční ohodnocení</p>
              <p class="section-description">
                {data.price_per_hour} Kč<span class="small-text">/hodina</span>
              </p>
            </div>
            <div class="bg-lightblue color-black section lokalita">
              <p class="header">lokalita</p>
              <p class="section-description">{data.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bio">
        <div class="section bg-lightblue">
          <p class="header">Autobiografie</p>
          <p class="small-text biografie">
            {@html data.bio}
          </p>
        </div>
        <div class="tags">
          {#each data.tags as tag}
            <Tag
              text={"#" + tag.name.toLowerCase()}
              backgroundColor="#74C7D3"
            />
          {/each}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <span
          class="mobileView header small-text color-lightblue"
          bind:this={uuid}
          on:click={copyToClipboard}>{data.uuid}</span
        >
      </div>
    </div>
  </div>
</div>
<p class="page-name-rotated desktopView">Profil</p>

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

  .bg-lightblue {
    background-color: rgba(116, 199, 211, 0.1);
  }

  .color-darkblue {
    color: #00384d;
  }

  .color-lightblue {
    color: rgb(116, 199, 211);
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

  .page-name-rotated {
    font-family: "Lalezar", sans-serif;
    font-size: 13.333rem;
    color: rgba(116, 199, 211, 0.1);
    transform: rotate(-90deg);
    position: fixed;
    bottom: 0;
    right: -60px;
    transform-origin: top;
    z-index: -1;
    transition: opacity 0.25s ease-in-out;
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
    justify-content: space-evenly;
    flex-direction: column;
    padding-bottom: 1rem;
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
    color: #74c7d3;
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
    height: 100vh;
    align-items: center;
    justify-items: center;
    font-family: "Open Sans", sans-serif;
  }
  .middleView,
  .mobileView {
    display: none;
  }

  @media (max-width: 1200px) {
    .page-name-rotated {
      opacity: 0;
    }
  }

  @media (max-width: 700px) {
    .grid-sections {
      display: none;
    }

    .texts {
      padding-top: 1rem;
    }

    .texts > .header {
      font-size: 1.8rem;
    }

    .texts > .claim {
      font-size: 1rem;
    }

    .numbers {
      font-size: 1.06666rem;
    }

    .numbers span {
      font-size: 0.8666rem;
    }

    .middleView {
      display: flex;
      flex-direction: column;
    }

    .profile {
      display: grid;
      grid-template-areas: "profilePicture texts";
      grid-auto-rows: auto;
      grid-auto-columns: 1fr;
      gap: 1rem;
    }

    .profilePicture {
      grid-area: profilePicture;
    }

    .profilePicture img {
      max-width: 100%;
    }

    .profilePicture > span {
      text-align: center;
    }

    .info {
      grid-area: texts;
    }
  }

  @media (max-width: 400px) {
    .grid-sections {
      display: grid;
      grid-template-areas: "profile kontakt" "lokalita finance";
      grid-auto-rows: auto;
      grid-auto-columns: 1fr 1fr;
      column-gap: 0.73333rem;
      row-gap: 1rem;
    }

    .profilePicture {
      grid-area: profile;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .profilePicture > img {
      width: 100%;
      border-radius: 25px;
    }

    .middleView,
    .desktopView {
      display: none;
    }

    .profile {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .main {
      height: 90vh;
    }

    .page-name {
      font-size: 2.666rem;
    }
    .container {
      display: flex;
      flex-direction: column;
    }

    .profile {
      flex-direction: column;
      gap: 1rem;
    }
    .emails {
      grid-auto-flow: row;
      grid-template-rows: auto;
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

    .card {
      gap: 1rem;
    }

    .bio > span {
      padding-top: 0.75rem;
      display: flex;
    }
  }
</style>
