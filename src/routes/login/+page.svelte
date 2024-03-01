<script>
  import "sanitize.css";
  import { logo_black } from "$lib/assets/images.js";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  let isResponseOk = true;

  async function submitForm() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("TdA:d8Ef6!dGG_pv")}`,
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      username = "";
      password = "";
      document.cookie = `auth=${result.password}; Secure; HttpsOnly; SameSite=Strict`;
      document.cookie = `uuid=${result.uuid};`;
      goto("/app/reservation");
    } else {
      isResponseOk = false;
      setTimeout(() => {
        isResponseOk = true;
      }, 1500);
    }
  }
</script>

<svelte:head>
  <title>TdA - Lektorský Portál - Login</title>
</svelte:head>

<a href="/">
  <img src={logo_black} alt="" />
</a>
<div class="wrapper">
  <div class="login">
    <p class="ff-Lalezar">TDA - Lektorský Portál</p>
    <div class="form-login">
      <div class="credentials">
        <div>
          <input
            bind:value={username}
            class:error={!isResponseOk}
            required
            type="text"
            name="username"
          />
          <label class:error2={!isResponseOk} for="username" class="blue"
            >username</label
          >
        </div>
        <div>
          <input
            bind:value={password}
            class:error={!isResponseOk}
            required
            type="password"
            name="username"
          />
          <label class:error2={!isResponseOk} for="username" class="blue"
            >password</label
          >
        </div>
      </div>
      <div class="footer">
        <button on:click={submitForm}>Přihlásit se</button>
        <p>
          Zapomněli jste heslo? <span class="blue">Smolík,</span> my to resetovat
          nebudem.
        </p>
        <a
          href="/"
          style="width:fit-content; align-self: center; text-decoration: underline"
          >Návrat do hlavního menu</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  img {
    width: 86px;
    position: absolute;
    top: 1.3rem;
    left: 1.3rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    min-height: 90vh;
    width: min(95%, 500px);
    margin: 0 auto;
    padding: 2rem 0;
  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 1.5rem 3rem;
    width: auto;
    border-radius: 15px;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }

  .form-login {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .credentials {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    background-color: #74c7d3;
    color: white;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .credentials div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  input {
    border-bottom: 1px solid #74c7d3;
    padding: 0.2rem;
    min-width: 400px;
    font-size: 1.2rem;
  }

  label {
    font-family: "Open Sans", sans-serif;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    transition: all 0.3s;
    padding-left: 2px;
    z-index: -1;
  }

  input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-1rem);
    font-size: 0.8rem;
  }

  p {
    text-align: center;
  }

  .blue {
    color: #74c7d3;
  }

  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
    font-size: 2.5rem;
  }

  .error {
    border-bottom: 1px solid #e46464;
    animation: shake 0.5s;
  }

  .error2 {
    color: #e46464;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  @media screen and (max-width: 500px) {
    .credentials div {
      width: 100%;
    }
    input {
      min-width: 100%;
    }

    .ff-Lalezar {
      font-size: 2rem;
    }
  }
</style>
