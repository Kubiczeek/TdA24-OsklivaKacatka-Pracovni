<script>
  import { showModal } from "$lib/stores.js";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  import { blur } from "svelte/transition";
  let selected = -1;
  let date = "";
  let timeStart = "";
  let timeEnd = "";
  let lectorUuid = "";
  let teaching = false;
  let timeBlocks = [];

  export let data;

  function handleButtonClick(i, timeRange) {
    selected = i;
    // Assuming the button text is in the format 'HH:MM - HH:MM'
    [timeStart, timeEnd] = timeRange.t.split(" - ");
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
    const dayNum = selectedDate.getDay();
    const dayName = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"];
    const day = dayName[dayNum];
    let fromTime = "";
    let toTime = "";
    let breakTime = 0;
    let lengthTime = 0;
    for (const dayObject of data.data.calendar) {
      if (day == dayObject.day) {
        fromTime = dayObject.from;
        toTime = dayObject.to;
        breakTime = dayObject.break;
        lengthTime = dayObject.length;
        teaching = dayObject.teaching || false;
      }
    }
    timeBlocks = getTimeBlocks(fromTime, toTime, lengthTime, breakTime);
    timeBlocks = timeBlocks.map((block) => block.join(" - "));
  }
  // Function to calculate the difference in minutes between two times
  function getMinFromTime(tA, tB) {
    const minA = parseInt(tA.split(":")[0]) * 60 + parseInt(tA.split(":")[1]);
    const minB = parseInt(tB.split(":")[0]) * 60 + parseInt(tB.split(":")[1]);

    // Calculate the time difference
    let diff = minA - minB;

    // Adjust for the next day if necessary
    if (diff > 0) {
      return 1440 - minA + minB;
    }

    // Return the absolute time difference
    return Math.abs(diff);
  }

  // Function to convert minutes to a formatted time string
  function getTimeFromMin(min) {
    // Check if the hours exceed 23
    if ((min - (min % 60)) / 60 > 23) {
      return (
        ((min - (min % 60)) / 60 - 24).toString() +
        ":" +
        (min % 60).toString().padStart(2, "0")
      );
    }

    // Return the formatted time string
    return (
      ((min - (min % 60)) / 60).toString() +
      ":" +
      (min % 60).toString().padStart(2, "0")
    );
  }

  // Function to calculate time blocks based on input parameters
  function getTimeBlocks(X, Y, A, B) {
    if (X === "" || Y === "" || A === "" || B === "") return [];
    if (X === Y) return [];

    // Calculate the total time in minutes
    let time = getMinFromTime(X, Y);

    // Initialize an array to store time blocks
    let timeBlocks = [];

    // Calculate the starting time in minutes
    let start = parseInt(X.split(":")[0]) * 60 + parseInt(X.split(":")[1]);

    // Loop to generate time blocks
    for (let i = 0; time >= A; i++) {
      // Create a block array to store start and end times
      let block = [];
      block[0] = getTimeFromMin(start + A * i + B * i);
      block[1] = getTimeFromMin(start + A * (i + 1) + B * i);

      // Update remaining time
      time = time - A - B;

      // Add the block to the array
      timeBlocks.push(block);
    }

    // Return the array of time blocks
    return timeBlocks;
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
    data.date = data.date.split("-").reverse().join(".");
    const response = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      showModal.hide();
      toast.success("Poptávka byla úspěšně odeslána! Zkontrolujte email.", {
        style: "font-family: 'Open Sans', sans-serif;",
        position: "bottom-right",
      });
    } else {
      showModal.hide();
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
        name="telNumber"
      />
    </div>
    <div>
      <span>Věk:</span><input
        required
        type="number"
        placeholder="14"
        min="1"
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
      {#if teaching}
        {#each timeBlocks as t, i}
          <button
            type="button"
            class="time"
            class:selected={i === selected}
            on:click={() => handleButtonClick(i, { t })}
          >
            {t}
          </button>
        {/each}
      {:else}
        <span style="font-weight: 400; font-size: 0.9rem">
          V tento den lektor neučí. Zvolte jiné datum.
        </span>
      {/if}
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
        required
        type="text"
        placeholder="Vaše zpráva..."
        maxlength="200"
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
