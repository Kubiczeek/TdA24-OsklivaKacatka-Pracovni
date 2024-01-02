<script>
  import Button from "./Button.svelte";
  import Vector from "$lib/assets/Vector.svg";
  import Logo from "$lib/assets/logo-color.svg";
  import Moon from "$lib/assets/moon.svg";
  import Dark from "$lib/assets/dark.svg";
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
  <div class="buttons">
    <Button text="Vyhledat učitele"></Button>
    <Button text="O nás" redirect="/about"></Button>
    <button><img src={Dark} alt="" /></button>
  </div>
</div>

<style>
  button {
    background: none;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-weight: bolder;
    color: #999999;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .content {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .buttons {
    margin-top: -4rem;
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
