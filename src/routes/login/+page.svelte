<script>
    let username = '';
    let password = '';

    async function submitForm() {
        
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        if (response.ok) {
            username = '';
password = '';
document.cookie = `auth=${result.password}; Secure; HttpsOnly; SameSite=Strict`;
document.cookie = `uuid=${result.uuid}; Secure; HttpsOnly; SameSite=Strict`;


            // Handle successful login here (e.g., redirect to a profile page)
        } else {
            console.error('Login failed', result.error);
            // Handle login failure here (e.g., display an error message)
        }
    }
</script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
  
<form on:submit|preventDefault={submitForm}>
	<input bind:value={username} placeholder="username">
    <input bind:value={password} placeholder="password">
	<button type="submit">
		SUBmit
	</button>
</form>


</html>
