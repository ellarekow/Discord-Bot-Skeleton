// Require the necessary discord.js classes
import { Client, Intents } from "discord.js";
import { config as loadEnvironmentVariables } from "dotenv";

loadEnvironmentVariables();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    switch (commandName) {
        case "ping": {
            await interaction.reply("Pong!");

            break;
        }
        case "server": {
            await interaction.reply("Server info.");

            break;
        }
        case "user": {
            await interaction.reply("User info.");

            break;
        }
        // No default
    }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
