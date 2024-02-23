import Database from "db-quickly-js";
import { reinitializeDB } from "$lib/server/db/db.js";
import { onMount } from 'svelte';
import transporter from '$lib/server/nodemailer/nodemailer.js';


  // Setup email data with unicode symbols

export const GET = async () => {
 
  try {
    reinitializeDB();

    const cluster = Database.getClusterByName("Tags");

    return new Response(JSON.stringify(cluster.data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return new Response({
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
};
