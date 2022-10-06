import { SlashCommandBuilder } from "discord.js";

export const command = {
  data: new SlashCommandBuilder()
    .setName("foo")
    .setDescription("Replies with Bar!"),
  async execute(interaction) {
    await interaction.reply("Bar!");
  },
};

