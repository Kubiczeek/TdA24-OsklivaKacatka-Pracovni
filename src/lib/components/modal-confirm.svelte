<script>
  import { showModalAccept, modalData } from "$lib/stores.js";
  import { blur } from "svelte/transition";
  import toast from "svelte-french-toast";
  let place, message;

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      place: place.value,
      message: message.value,
      decision: true,
    };
    fetch(`/api/reservation/accept/${$modalData.uuid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      toast.success("Místo přidáno a schůzka úspěšně potvrzena", {
        style: "font-family: 'Open Sans', sans-serif;",
        position: "bottom-right",
      });
      showModalAccept.hide();
    });
  }
</script>

<div class="overlay" transition:blur={{ duration: 300 }}>
  <form class="modal" method="post" action="/api/reservation/accept/">
    <p class="ff-Lalezar">Potvrzení schůzky</p>
    <div class="time-date">
      <span>{$modalData.date}</span>
      <div />
      <span>{$modalData.timeStart} - {$modalData.timeEnd}</span>
    </div>
    <div class="name">
      <p class="text">
        Jméno: <span class="value"
          >{$modalData.clientName + " " + $modalData.clientSurname}</span
        >
      </p>
    </div>
    <div class="name">
      <p class="text">
        Email: <a class="value" href={"mailto:" + $modalData.clientEmail}
          >Email: {$modalData.clientEmail}</a
        >
      </p>
    </div>
    <div class="name">
      <p class="text">
        Telefonní číslo: <span class="value">{$modalData.telNumber}</span>
      </p>
    </div>
    <div class="name">
      <p class="text">Věk: <span class="value">{$modalData.clientAge}</span></p>
    </div>
    <div class="name">
      <p class="text">
        Téma: <span class="value">{$modalData.theme}</span>
      </p>
    </div>
    <div class="name">
      <p class="text">
        Poznámka klienta: <span class="value">{$modalData.clientNote}</span>
      </p>
    </div>
    <div class="name">
      <p class="bold-text">Místo:</p>
      <input
        type="text"
        name="place"
        bind:this={place}
        placeholder="Doplňte místo konání..."
        id=""
      />
    </div>
    <div class="special">
      <span>Zpráva:</span><input
        type="text"
        bind:this={message}
        placeholder="Vaše zpráva..."
        name="message"
      />
    </div>
    <div class="buttons">
      <button class="submit" type="submit" on:click={handleSubmit}
        >Přidat&nbsp;místo a potvrdit&nbsp;schůzku</button
      >
      <button type="button" class="cancel" on:click={showModalAccept.hide}
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

  input {
    border: 1px solid #b8b8b8;
    border-radius: 7px;
    padding: 3px 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    width: 100%;
  }

  a,
  span {
    font-weight: 600;
  }

  .modal > .special {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .time-date {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-evenly;
    width: 100%;
  }

  .time-date div {
    width: 2px;
    background-color: rgba(51, 51, 51, 0.17);
    border-radius: 50px;
    min-height: 20px;
  }

  .time-date span {
    font-size: 1rem;
    padding: 0 1rem;
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

  .bold-text {
    font-weight: 600;
  }

  @media screen and (max-width: 550px) {
    .modal {
      padding: 1rem;
    }
  }
</style>
