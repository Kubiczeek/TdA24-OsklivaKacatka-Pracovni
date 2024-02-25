// Import necessary modules and functions
import Database from "db-quickly-js";
import {
    reinitializeDB,
    findTagsUuid,
    findTagsName,
    lecturerSchema,
} from "$lib/server/db/db.js";
import { validatePassword, hashPassword } from "../../../lib/server/hash/hash";

// Function to find password by username in the provided data
function findPasswordByUsername(username, data) {
    for (const obj of data) {
        if (obj.username === username) {
            return obj.password;
        }
    }
    return false; // Return false if username is not found
}

// Handle POST request
export const POST = async ({ request }) => {
    // Initialize the database
    reinitializeDB();

    try {
        // Parse the JSON payload from the request body
        const obj = await request.json();

        // Get the cluster of lecturers from the database
        const lecturers = Database.getClusterByName("Lecturers");

        // Find the hashed password for the provided username
        let hashPass = findPasswordByUsername(obj.username, lecturers.data);

        if (!hashPass) {
            // Return 400 Bad Request if username or password is wrong
            return new Response(
                JSON.stringify({ code: 400, message: "Wrong username or password" }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    status: 400,
                }
            );
        } else {
            // Validate the provided password against the hashed password
            const validation = await validatePassword(hashPass, obj.password);

            if (validation) {
                // Hash the provided password and return the modified object with status 200
                obj.password = hashPass;
                return new Response(JSON.stringify(obj), {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    status: 200,
                });
            } else {
                // Return 400 Bad Request if username or password is wrong
                return new Response(
                    JSON.stringify({ code: 400, message: "Wrong username or password" }),
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        status: 400,
                    }
                );
            }
        }
    } catch (error) {
        // Handle any unexpected errors
        console.error("An error occurred:", error);
        return new Response(
            JSON.stringify({ code: 500, message: "Internal Server Error" }),
            {
                headers: {
                    "Content-Type": "application/json",
                },
                status: 500,
            }
        );
    }
};
