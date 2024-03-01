<script>
  import { logo_black, hamburger, cross } from "$lib/assets/images.js";
  import toast, { Toaster } from "svelte-french-toast";
  import { showModalAccept, showModalDecline, modalData } from "$lib/stores.js";
  import ModalConfirm from "$lib/components/modal-confirm.svelte";
  import ModalDecline from "$lib/components/modal-decline.svelte";
  import Reservation from "$lib/components/reservation.svelte";
  import { onMount } from "svelte";

  export let data;

  let check;

  const removeDenied = data.reservation?.filter((item) => {
    return item.status != "denied";
  });

  const removeExpired = removeDenied?.filter((item) => {
    return new Date(item.date.split(".").reverse().join("-")) > new Date();
  });

  const sortedReservations = removeExpired?.sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));

    return dateA - dateB;
  });

  const reservation = sortedReservations?.filter((item) => {
    return item.lectorUuid == data.data.uuid;
  });

  function saveActive() {
    const d = { active: check.checked };
    fetch(`/api/lecturers/${data.data.uuid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
      },
      body: JSON.stringify(d),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Příjmání nových rezervací bylo změněno", {
            style: "font-family: 'Open Sans', sans-serif;",
            position: "bottom-right",
          });
        } else {
          toast.error("Něco se pokazilo", {
            style: "font-family: 'Open Sans', sans-serif;",
            position: "bottom-right",
          });
        }
      })
      .catch((err) => {
        toast.error("Něco se pokazilo", {
          style: "font-family: 'Open Sans', sans-serif;",
          position: "bottom-right",
        });
      });
  }

  let open = false;

  onMount(() => {
    check.checked = data.data.active;
  });
</script>

<svelte:head>
  <title>TdA - Lektorský Portál - Info</title>
</svelte:head>

<Toaster />
{#if $showModalAccept}
  <ModalConfirm />
{/if}
{#if $showModalDecline}
  <ModalDecline />
{/if}
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
        <a class="ff-Lalezar active" href="/app/reservation">Rezervace</a>
        <a class="ff-Lalezar" href="/app/settings">Nastavení&nbsp;rezervací</a>
        <a class="ff-Lalezar" href="/app/info">Osobní&nbsp;informace</a>
      </div>
    </div>
    <div class="bot-side">
      <a href="/logout" class="ff-Lalezar">Odhlásit&nbsp;se</a>
    </div>
  </div>
  <div class="content">
    <h1 class="ff-Lalezar">Naplánované schůzky</h1>
    <div class="inline">
      <div class="allow-reservations">
        <label for="allowReservations">Aktivní systém rezervací:</label>
        <input
          type="checkbox"
          id="allowReservations"
          on:change={saveActive}
          bind:this={check}
        />
      </div>
      <button class="export">Export to .ical</button>
    </div>
    <!-- <div class="sort">
      <label for="select">Seřadit podle:</label>
      <select name="select" id="" class="sort">
        <option value="1">Abecedně A-Z</option>
        <option value="2">Abecedně Z-A</option>
        <option value="3">Nejnovější</option>
        <option value="4">Nejstarší</option>
      </select>
    </div> -->
    <div class="reservations">
      {#each reservation as item}
        <Reservation info={item} />
      {/each}
    </div>
  </div>
</div>

<style>
  h1 {
    padding: 0;
    margin: 0;
  }

  .content h1 {
    font-size: 3rem;
    width: 100%;
    text-align: left;
    color: #333333;
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

  nav,
  .sidebar-m {
    display: none;
  }

  select {
    border: none;
    font-size: 1rem;
    width: fit-content;
  }

  select:focus {
    outline: none;
  }

  option {
    font-family: "Open Sans", sans-serif;
  }

  input,
  label {
    font-size: 1.15rem;
    font-family: "Open Sans", sans-serif;
    color: #333;
    font-weight: 700;
  }

  .allow-reservations {
    display: flex;
    gap: 1rem;
  }

  .sort select,
  .sort label {
    font-weight: 400;
    font-size: 1rem;
    color: #b8b8b8;
  }

  .reservations {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .export {
    background-color: #74c7d3;
    color: white;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
    width: fit-content;
  }

  .inline {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    .sidebar {
      height: auto;
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

    label {
      font-size: 0.9rem;
    }
  }
</style>
