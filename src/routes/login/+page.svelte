<script>
  import "sanitize.css";
  import { logo_black } from "$lib/assets/images.js";
  import { goto } from "$app/navigation";

  let username = "";
  let password = "";

  async function submitForm() {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (response.ok) {
      username = "";
      password = "";
      document.cookie = `auth=${result.password}; Secure; HttpsOnly; SameSite=Strict`;
      document.cookie = `uuid=${result.uuid}; Secure; HttpsOnly; SameSite=Strict`;
      goto("/app/info");
    } else {
      console.error("Login failed", result.error);
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
            required
            type="text"
            name="username"
            id=""
          />
          <label for="username" class="blue">username</label>
        </div>
        <div>
          <input
            bind:value={password}
            required
            type="password"
            name="username"
            id=""
          />
          <label for="username" class="blue">password</label>
        </div>
      </div>
      <div class="footer">
        <button on:click={submitForm}>Přihlásit se</button>
        <p>
          Zapomněli jste heslo? Klikněte <span class="blue">zde</span> pro řešení
        </p>
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
