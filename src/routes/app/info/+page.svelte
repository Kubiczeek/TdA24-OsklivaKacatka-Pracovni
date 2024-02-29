<script>
  import { logo_black, hamburger, cross } from "$lib/assets/images.js";
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";

  export let data;

  let open = false;
  let nTels = 1;
  let nEmails = 1;

  let firstName,
    middleName,
    lastName,
    preTitle,
    postTitle,
    claim,
    city,
    online,
    price,
    bio;
  let tags = [];
  let tels = [];
  let emails = [];

  onMount(() => {
    firstName.value = data.first_name;
    middleName.value = data.middle_name;
    lastName.value = data.last_name;
    preTitle.value = data.title_before;
    postTitle.value = data.title_after;
    claim.value = data.claim;
    city.value = data.location;
    online.checked = data.online;
    price.value = data.price_per_hour;
    bio.value = data.bio;
    tags = data.tags;
    tels = data.contact.telephone_numbers;
    emails = data.contact.emails;
  });

  function saveChanges() {
    const newData = {
      first_name: firstName.value,
      middle_name: middleName.value,
      last_name: lastName.value,
      title_before: preTitle.value,
      title_after: postTitle.value,
      claim: claim.value,
      location: city.value,
      online: online.checked,
      price_per_hour: price.value,
      bio: bio.value,
      tags: tags.map((tag) => {
        return { name: tag.name };
      }),
      contact: {
        telephone_numbers: tels,
        emails: emails,
      },
    };

    fetch(`/api/lecturers/${data.uuid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
      },
      body: JSON.stringify(newData),
    }).then((res) => {
      toast.success("Změny byly úspěšně uloženy!", {
        style: "font-family: 'Open Sans', sans-serif;",
        position: "bottom-right",
      });
    });
  }
</script>

<svelte:head>
  <title>TdA - Lektorský Portál - Info</title>
</svelte:head>

<Toaster />
<nav>
  <img src={logo_black} alt="" />
  <button on:click={() => (open = true)}>
    <img src={hamburger} alt="" />
  </button>
</nav>
<div class="sidebar-m" class:open>
  <button class="close" on:click={() => (open = false)}>
    <img src={cross} alt="" />
  </button>
  <a href="/app/reservation">Rezervace</a>
  <a href="/app/settings">Nastavení rezervací</a>
  <a href="/app/info">Osobní informace</a>
  <a href="/logout">Odhlásit se</a>
</div>
<div class="wrapper">
  <div class="sidebar">
    <div class="top-side">
      <a href="/">
        <img src={logo_black} alt="" />
      </a>
      <div class="links">
        <a class="ff-Lalezar" href="/app/reservation">Rezervace</a>
        <a class="ff-Lalezar" href="/app/settings">Nastavení&nbsp;rezervací</a>
        <a class="ff-Lalezar active" href="/app/info">Osobní&nbsp;informace</a>
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
        <input
          bind:this={firstName}
          required
          type="text"
          class="text"
          placeholder="Josef"
        />
      </div>
      <div class="div-input">
        <p class="input-name">Druhé jméno</p>
        <input
          bind:this={middleName}
          type="text"
          class="text"
          placeholder="Adam"
        />
      </div>
      <div class="div-input">
        <p class="input-name">
          Příjmení&ThinSpace;<span class="required">*</span>
        </p>
        <input
          bind:this={lastName}
          required
          type="text"
          class="text"
          placeholder="Novák"
        />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Titul před jménem</p>
        <input
          bind:this={preTitle}
          type="text"
          class="text"
          placeholder="Mgr, et Mgr."
        />
      </div>
      <div class="div-input">
        <p class="input-name">Titul za jménem</p>
        <input
          bind:this={postTitle}
          type="text"
          class="text"
          placeholder="WcDr."
        />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Claim</p>
        <input
          bind:this={claim}
          type="text"
          class="text"
          placeholder="Do houskových knedlíků se nedávají housky!"
        />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Město</p>
        <input bind:this={city} type="text" class="text" placeholder="Praha" />
      </div>
      <div class="div-input checkbox">
        <p class="input-name">Vyučuji&NonBreakingSpace;online?</p>
        <input bind:this={online} type="checkbox" />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">
          Telefonní čísla&ThinSpace;<span class="required">*</span>
        </p>
        {#each tels as t, i}
          <input
            required
            type="tel"
            class="text"
            placeholder="+420 123 456 789"
            value={t}
            on:focusout={(e) => {
              if (i === nTels - 1 && i != 0 && e.target.value == "") nTels--;
            }}
          />
        {/each}
        <button on:click={() => nTels++} class="add-field"
          >+&nbsp;Přidat&nbsp;další&nbsp;pole</button
        >
      </div>
      <div class="div-input">
        <p class="input-name">
          Emailové adresy&ThinSpace;<span class="required">*</span>
        </p>
        {#each emails as e, i}
          <input
            required
            type="email"
            class="text"
            value={e}
            on:focusout={(e) => {
              if (i === nEmails - 1 && i != 0 && e.target.value == "")
                nEmails--;
            }}
            placeholder="pepik.schenk@gmail.com"
          />
        {/each}
        <button on:click={() => nEmails++} class="add-field"
          >+&nbsp;Přidat&nbsp;další&nbsp;pole</button
        >
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">
          Cena&ThickSpace;<span class="small-text">(kč/h)</span>
        </p>
        <input bind:this={price} type="number" class="text" placeholder="250" />
      </div>
    </div>
    <div class="name">
      <div class="div-input">
        <p class="input-name">Autobiografie</p>
        <input
          bind:this={bio}
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
          on:focusout={(e) => {
            if (e.target.value != "") {
              tags = [...tags, { name: e.target.value }];
              e.target.value = "";
            }
          }}
          on:keydown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value != "") {
                tags = [...tags, { name: e.target.value }];
                e.target.value = "";
              }
            }
          }}
          placeholder="Napište název dovednosti pro přidání..."
        />
        <div class="tags">
          {#each tags as s, i}
            <button
              on:click={() => {
                tags = tags.filter((_, j) => j != i);
              }}
              class="tag"
              ><span class="small-text">x</span>&ThickSpace;{s.name}</button
            >
          {/each}
        </div>
      </div>
    </div>
    <button class="saveChanges" on:click={saveChanges}>Uložit změny</button>
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
    height: auto;
    min-height: 100vh;
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
    text-align: left;
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
    background-color: #74c7d3;
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

  .saveChanges {
    background-color: #74c7d3;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem;
    align-self: flex-start;
    width: fit-content;
    margin-top: 1rem;
  }

  nav,
  .sidebar-m {
    display: none;
  }

  @media (max-width: 1000px) {
    .sidebar {
      height: auto;
    }

    .name {
      flex-direction: column;
    }

    .checkbox {
      padding: 0;
    }

    .add-tag {
      width: 100%;
    }

    .content {
      padding: 2rem 1.5rem;
    }
  }

  @media (max-width: 656px) {
    nav {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }

    nav > img {
      width: 70px;
    }

    nav > button > img {
      width: 34px;
    }

    .sidebar {
      display: none;
    }

    .sidebar-m {
      display: flex;
      position: fixed;
      flex-direction: column;
      align-items: flex-end;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100vh;
      font-weight: 700;
      font-size: 1.4rem;
      padding: 1rem 2rem;

      backdrop-filter: blur(3px);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    .sidebar-m > button {
      display: block;
      border: none;
      background-color: transparent;
      width: auto;
      padding: 1rem 0;
    }

    .sidebar-m > button img {
      width: 30px;
    }

    .open {
      opacity: 1;
      left: 0;
    }
  }
</style>
