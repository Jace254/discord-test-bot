import { REST, Routes } from "discord.js";
import { clientId, guildId, token, commandsPath, commandFiles } from "./constants.js";
import path from "path";

const commands = [];

for (const file of commandFiles) {
  const filePath = path.join("file:///", commandsPath, file);

  const { command } = await import(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
