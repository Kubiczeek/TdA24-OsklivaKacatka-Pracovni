<script>
  import Button from "./Button.svelte";
  import Vector from "$lib/assets/Vector.svg";
  import Logo from "$lib/assets/logo-black.svg";
  import gear from "$lib/assets/gear-icon.svg";
  import raise from "$lib/assets/raise-icon.svg";
  import book from "$lib/assets/book-icon.svg";
  import pc from "$lib/assets/pc-icon.svg";
  import talk from "$lib/assets/talk-icon.svg";

  import { onMount } from "svelte";
  let main;
  onMount(() => {
    main.style.backgroundImage = `url(${Vector})`;
  });
</script>

<div class="main" bind:this={main} />
<div class="gradient" />
<div class="content">
  <div class="logo">
    <img src={Logo} alt="" />
  </div>
  <div class="text">
    <p class="header">TEACHER DIGITAL AGENCY</p>
    <p class="description">
      Teacher digital Agency je mladá společnost zaměřená na <b
        >vyhledávání špičkových odborníků z řad učitelů, lektorů a tutorů.</b
      > Sestavujeme exkluzivní databázi těchto specialistů, abychom mohli efektivně
      propojovat klienty s ideálními odborníky dle jejich přání a specifických potřeb.
      Vaše vzdělávání je u nás v dobrých rukou.
    </p>
  </div>
  <div class="images">
    <img src={pc} alt="" />
    <img src={raise} alt="" />
    <img src={book} alt="" />
    <img src={talk} alt="" />
    <img src={gear} alt="" />
  </div>
  <div class="buttons">
    <Button text="Vyhledat učitele" redirect="/lecturers"></Button>
  </div>
</div>

<style>
  .images {
    width: 37%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 2px solid #333333;
  }

  p {
    margin: 0;
  }

  .text {
    width: 50%;
  }

  .header {
    font-size: 2.5rem;
    text-align: center;
    font-family: "Lalezar", sans-serif;
    color: #333333;
  }

  .description {
    color: #333333;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    font-family: "Open Sans", sans-serif;
  }

  .content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .content * {
    z-index: 3;
  }

  .logo {
    max-width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo > img {
    max-width: 100%;
    height: auto;
  }

  .gradient {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: linear-gradient(
      117deg,
      rgba(255, 255, 255, 0) -2000%,
      rgb(255, 255, 255) 100%
    );
    top: 0;
    left: 0;
  }

  .main {
    width: 100%;
    height: 100vh;
    background-repeat: repeat;
    background-size: 175%;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
