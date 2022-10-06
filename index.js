import { Client, Collection, GatewayIntentBits } from "discord.js";
import { token, commandsPath, commandFiles } from "./constants.js";
import path from "path";

try {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.commands = new Collection();

  for (const file of commandFiles) {
    const filePath = path.join("file:///", commandsPath, file);
    const { command } = await import(filePath);

    client.commands.set(command.data.name, command);
  }

  client.once("ready", () => {
    console.log("Ready!");
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });

  client.login(token);
} catch (e) {
  console.log(e);
}
