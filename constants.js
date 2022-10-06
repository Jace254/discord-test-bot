import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const commandsPath = path.join(__dirname, "commands");
export const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
export const token = process.env.TOKEN;// get this from your developer portal on Bot Token ID(reset and copy if not shown)
export const clientId = process.env.CLIENT_ID;// get this from your developer portal on app ID
export const guildId = process.env.GUILD_ID;// get this from your discord server or user id(enable developer mode and "Copy ID")

