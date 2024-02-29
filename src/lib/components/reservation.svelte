<script>
  import { chevron } from "$lib/assets/images.js";
  import { showModalAccept, showModalDecline, modalData } from "$lib/stores.js";

  export let info;

  let more = false;
</script>

<div class="container" class:more>
  <button class="showMore" class:more on:click={() => (more = !more)}
    ><img class="chevron" src={chevron} alt="" /></button
  >
  <div class="always">
    <p class="ff-Lalezar">{info.clientName + " " + info.clientSurname}</p>
    <div class="time-date">
      <span>{info.date}</span>
      <div />
      <span>{info.timeStart} - {info.timeEnd}</span>
    </div>
    <p class="sub">
      Místo:
      {#if info.place != "" && info.place != null && info.place != undefined && info.place}
        {info.place}
      {:else}
        <button
          on:click={() => {
            showModalAccept.show();
            modalData.set(info);
          }}
          class="red-text">Určit místo (klikni)</button
        >
      {/if}
    </p>
    <p class="sub">Téma: {info.theme}</p>
    <p class="sub">Věk: {info.clientAge}</p>
  </div>
  <div class="optional">
    <p class="ff-Lalezar">kontaktní údaje</p>
    <a class="sub" href={"mailto:" + info.clientEmail}
      >Email: {info.clientEmail}</a
    >
    <p class="sub" href="">Telefonní číslo: {info.telNumber}</p>
    <div class="note">
      <p>Poznámka:</p>
      <p class="note-text">
        {info.clientNote}
      </p>
    </div>
    <div class="buttons">
      <button
        class="accept"
        on:click={() => {
          showModalAccept.show();
          modalData.set(info);
        }}>Potvrdit schůzku</button
      >
      <button
        class="cancel"
        on:click={() => {
          showModalDecline.show;
          modalData.set(info);
        }}>Zrušit schůzku</button
      >
    </div>
  </div>
</div>

<style>
  button {
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
  }

  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
    font-size: 1.25rem;
  }

  .showMore {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background-color: white;
    border: none;
    cursor: pointer;
    width: auto;
    transition: transform 0.3s;
  }

  .showMore.more {
    transform: rotate(180deg);
  }

  .chevron {
    width: 1.3rem;
  }

  .red-text {
    color: #ff4040;
  }

  .container {
    position: relative;
    display: flex;
    padding: 0.33rem 1.33rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-height: 150px;
    overflow: hidden;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    border-radius: 8px;
    transition: all 0.3s;
  }

  .always {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.33rem;
  }

  .time-date {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .time-date div {
    width: 2px;
    background-color: rgba(51, 51, 51, 0.17);
    border-radius: 50px;
  }

  .time-date span {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .always .sub {
    font-size: 0.9rem;
    width: 100%;
  }

  .optional {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.33rem;
  }

  .optional .ff-Lalezar {
    font-size: 1rem;
    width: 100%;
  }

  .optional .sub {
    width: 100%;
    font-size: 0.9rem;
  }

  .note {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    padding: 0.3rem;
    gap: 0.33rem;
  }

  .note-text {
    width: 100%;
    text-wrap: wrap;
    font-size: 0.9rem;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 0.3rem;
  }

  .buttons button {
    padding: 0.1rem 0.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .accept {
    background-color: #74c7d3;
    color: white;
  }

  .cancel {
    background-color: #e46464;
    color: white;
  }

  .container.more {
    max-height: 1000px;
  }
</style>
