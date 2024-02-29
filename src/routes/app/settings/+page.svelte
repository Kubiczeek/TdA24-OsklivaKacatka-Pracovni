<script>
  import { logo_black, hamburger, cross } from "$lib/assets/images.js";
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";

  export let data;

  console.log(data);

  let open = false;
  let selectedDay = "Po";

  let from, to, breakTime, length;

  function change(day) {
    for (const dayObject of data.calendar) {
      if (dayObject.day == day) {
        from.value = dayObject.from;
        to.value = dayObject.to;
        breakTime.value = dayObject.break;
        length.value = dayObject.length;
      }
    }
  }

  function saveChanges() {
    console.log(data.calendar);
    const modifiedCalendar = data.calendar.map((dayObject) => {
      if (dayObject.day === selectedDay) {
        dayObject.from = from.value;
        dayObject.to = to.value;
        dayObject.break = breakTime.value;
        dayObject.length = length.value;
      }
      return dayObject;
    });
    data.calendar = modifiedCalendar;
    console.log(data.calendar);
    console.log(data.calendar);
    fetch(`/api/lecturers/${data.uuid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      toast("Změny byly úspěšně uloženy!", {
        style: "font-family: 'Open Sans', sans-serif;",
        position: "bottom-right",
      });
    });
  }

  onMount(() => {
    change(selectedDay);
  });
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
        <a class="ff-Lalezar active" href="/app/settings"
          >Nastavení&nbsp;rezervací</a
        >
        <a class="ff-Lalezar" href="/app/info">Osobní&nbsp;informace</a>
      </div>
    </div>
    <div class="bot-side">
      <a href="/logout" class="ff-Lalezar">Odhlásit&nbsp;se</a>
    </div>
  </div>
  <div class="content">
    <h1 class="ff-Lalezar">Nastavení rezervací</h1>
    <div class="calendar">
      <button
        class:day-select={selectedDay === "Po"}
        class="day"
        on:click={() => {
          selectedDay = "Po";
          change(selectedDay);
        }}>Po</button
      >
      <button
        class:day-select={selectedDay === "Út"}
        class="day"
        on:click={() => {
          selectedDay = "Út";
          change(selectedDay);
        }}>Út</button
      >
      <button
        class:day-select={selectedDay === "St"}
        class="day"
        on:click={() => {
          selectedDay = "St";
          change(selectedDay);
        }}>St</button
      >
      <button
        class:day-select={selectedDay === "Čt"}
        class="day"
        on:click={() => {
          selectedDay = "Čt";
          change(selectedDay);
        }}>Čt</button
      >
      <button
        class:day-select={selectedDay === "Pá"}
        class="day"
        on:click={() => {
          selectedDay = "Pá";
          change(selectedDay);
        }}>Pá</button
      >
      <button
        class:day-select={selectedDay === "So"}
        class="day"
        on:click={() => {
          selectedDay = "So";
          change(selectedDay);
        }}>So</button
      >
      <button
        class:day-select={selectedDay === "Ne"}
        class="day"
        on:click={() => {
          selectedDay = "Ne";
          change(selectedDay);
        }}>Ne</button
      >
    </div>
    <div class="input-area">
      <label for="start">Začátek v:</label>
      <input type="time" id="start" name="start" bind:this={from} />
    </div>
    <div class="input-area">
      <label for="end">Konec do:</label>
      <input type="time" id="end" name="end" bind:this={to} />
    </div>
    <div class="input-area">
      <label for="length">Délka jedné schůze (min):</label>
      <input
        type="number"
        id="length"
        name="length"
        min="1"
        placeholder="50"
        bind:this={length}
        on:change={(e) => {
          if (e.target.value < 1) {
            e.target.value = 1;
          }
        }}
      />
    </div>
    <div class="input-area">
      <label for="break">Délka přestávky mezi schůzkami (min):</label>
      <input
        type="number"
        id="break"
        name="break"
        min="0"
        placeholder="10"
        bind:this={breakTime}
        on:change={(e) => {
          if (e.target.value < 0) {
            e.target.value = 0;
          }
        }}
      />
    </div>
    <button class="saveChanges" on:click={saveChanges}>Uložit změny</button>
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

  .calendar {
    display: flex;
    gap: 0.33rem;
    flex-direction: row;
  }

  .day {
    font-size: 1rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    width: 40px;
    color: #fff;
    background-color: #74c7d3;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .day-select {
    background-color: #00384d;
  }

  .input-area {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
  }

  label,
  input {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
  }

  label {
    font-weight: 600;
    font-size: 1.1rem;
  }

  input {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid #b8b8b8;
    border-radius: 6px;
    width: auto;
  }

  input::placeholder {
    color: #b8b8b8;
    opacity: 1;
    font-size: 0.8rem;
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
