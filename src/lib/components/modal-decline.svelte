<script>
  import { showModalDecline, modalData } from "$lib/stores.js";
  import toast from "svelte-french-toast";
  import { blur } from "svelte/transition";

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      place: "Nic",
      message: "xd",
      decision: false,
    };
    fetch(`/api/reservation/accept/${$modalData.uuid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      toast.success("Schůzka byla zrušena!", {
        style: "font-family: 'Open Sans', sans-serif;",
        position: "bottom-right",
      });
      showModalDecline.hide();
    });
  }
</script>

<div class="overlay" transition:blur={{ duration: 300 }}>
  <form class="modal">
    <p class="ff-Lalezar">Potvrzení schůzky</p>
    <p class="description">
      Právě se chystáte zrušit následující schůzku. Změny jsou nevratné, proto
      zkontrolujte, zda chcete zrušit správnou schůzku.
    </p>
    <div class="time-date">
      <span>10.02.2024</span>
      <div />
      <span>7:30 - 8:30</span>
    </div>
    <div class="name">
      <p class="text">Jméno: <span class="value">Adam Mikulič</span></p>
    </div>
    <div class="name">
      <p class="text">
        Email: <a href="mailto:" class="value">amik@gmail.com</a>
      </p>
    </div>
    <div class="name">
      <p class="text">
        Telefonní číslo: <span class="value">+420 123 456 789</span>
      </p>
    </div>
    <div class="name">
      <p class="text">Věk: <span class="value">14</span></p>
    </div>
    <div class="name">
      <p class="text">
        Téma: <span class="value">Příprava na příjmací zkoušky - 9. třída</span>
      </p>
    </div>
    <div class="name">
      <p class="text">
        Poznámka klienta: <span class="value"
          >Syn možná přijde o pár minut později</span
        >
      </p>
    </div>
    <div class="buttons">
      <button class="submit" type="submit" on:click={handleSubmit}
        >Zrušit&nbsp;schůzku</button
      >
      <button type="button" class="cancel">Ponechat&nbsp;schůzku</button>
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

  .description {
    font-size: 1rem;
    font-weight: 800;
    color: #333333;
    text-align: center;
    margin-bottom: 1rem;
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

  a,
  span {
    font-weight: 600;
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
    background-color: #e46464;
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

  @media screen and (max-width: 550px) {
    .modal {
      padding: 1rem;
    }
  }
</style>
