<script>
  import { showModal } from "$lib/stores.js";
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";
  import { goto } from "$app/navigation";
  let selected = -1;
  let date = "";
  let timeStart = "";
  let timeEnd = "";
  let lectorUuid = "";

  function handleButtonClick(i, timeRange) {
    selected = i;
    // Assuming the button text is in the format 'HH:MM - HH:MM'
    [timeStart, timeEnd] = timeRange.split(" - ");
  }
  // This function will be called whenever the date input changes
  function validateDate(event) {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part, to compare dates only
    if (selectedDate < today) {
      alert("Please select a date in the future.");
      date = "";
    }
  }

  // This function will be called when the component is initialized
  function getUuidFromUrl() {
    const url = new URL(window.location.href);
    lectorUuid = url.pathname.split("/").pop();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("/", {
      //TODO: FIX THIS
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      goto("/");
    } else {
      goto("/error");
    }
  }

  onMount(getUuidFromUrl);
</script>

<div class="overlay" transition:blur={{ duration: 300 }}>
  <form
    class="modal"
    method="post"
    action="/api/reservation"
    on:submit={handleSubmit}
  >
    <p class="ff-Lalezar">Rezervace schůzky</p>
    <div class="name">
      <div>
        <span>Jméno:</span><input
          required
          type="text"
          placeholder="Josef"
          name="clientName"
        />
      </div>
      <div>
        <span>Příjmení:</span><input
          required
          type="text"
          placeholder="Novák"
          name="clientSurname"
        />
      </div>
    </div>
    <div>
      <span>Email:</span><input
        required
        type="email"
        placeholder="muj.email@priklad.cz"
        name="clientEmail"
      />
    </div>
    <div>
      <span>Telefonní&nbspčíslo:</span><input
        required
        type="tel"
        placeholder="+420 123 456 789"
        name="phone"
      />
    </div>
    <div>
      <span>Věk:</span><input
        required
        type="number"
        placeholder="14"
        name="clientAge"
      />
    </div>
    <div>
      <span>Téma:</span><input
        required
        type="text"
        placeholder="Připrava na příjmací zkoušky - 9. třída"
        name="theme"
      />
    </div>
    <div>
      <span>Den:</span>
      <input
        required
        type="date"
        placeholder="10.02.2024"
        name="date"
        bind:value={date}
        on:change={validateDate}
      />
    </div>
    <div class="times">
      {#each Array(5) as _, i}
        <button
          type="button"
          class="time"
          class:selected={i === selected}
          on:click={() => handleButtonClick(i, "7:00 - 7:20")}
        >
          7:00 - 7:20
        </button>
      {/each}
    </div>
    <input
      type="text"
      name="timeStart"
      bind:value={timeStart}
      style="display: none;"
    />
    <input
      type="text"
      name="timeEnd"
      bind:value={timeEnd}
      style="display: none;"
    />
    <input
      type="text"
      name="lectorUuid"
      bind:value={lectorUuid}
      style="display: none;"
    />
    <div class="special">
      <span>Poznámka:</span><input
        type="text"
        placeholder="Vaše zpráva..."
        name="clientNote"
      />
    </div>
    <div class="buttons">
      <button class="submit" type="submit">Odeslat poptávku</button>
      <button type="button" class="cancel" on:click={showModal.hide}
        >Zrušit</button
      >
    </div>
  </form>
</div>

<style>
  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
    font-size: 2rem;
    align-self: center;
    line-height: 2rem;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #b8b8b880;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .modal {
    background-color: white;
    padding: 2rem 2rem 1rem 2rem;
    border-radius: 7px;
    gap: 10px;
    width: min(720px, 95%);
    height: auto;
    display: flex;
    flex-direction: column;
    z-index: 3;
  }

  .modal > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .modal > .name {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .name div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  input {
    border: 1px solid #b8b8b8;
    border-radius: 7px;
    padding: 3px 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    width: 100%;
  }

  input[type="date"] {
    width: auto;
  }

  span {
    font-weight: 600;
  }

  .modal > .times {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .time {
    background-color: #74c7d3;
    border-radius: 4px;
    font-size: 0.85rem;
    padding: 5px 10px;
    color: white;
    border: none;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .modal > .special {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .special input {
    width: 100%;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-evenly;
  }

  .buttons button {
    font-size: 1rem;
  }

  .submit {
    background-color: #74c7d3;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem;
  }

  .cancel {
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    color: #b8b8b8;
    padding: 0.5rem;
  }

  .time.selected {
    background-color: #00384d;
  }

  @media screen and (max-width: 550px) {
    .modal {
      padding: 1rem;
    }

    .modal > .name {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
