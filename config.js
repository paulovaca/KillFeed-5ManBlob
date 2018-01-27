/**
 * Discord Bot settings. These are mandatory and will affect what the bot
 *   posts about, and where it posts to.
 */

module.exports = {
  discord: {
    // The Discord token of the Bot to post through.
    token: "NDA2NDM0Mzg0NjQ4OTk0ODE2.DU5Oeg.VM_QpEphsj4cHSXKZ8GLFHD8gRU",
    // The ID of the discord channel to post battleboard infos to.
    feedChannelId: "406278182283640842",
    // The ID of the discord channel to post albion status infos to.
    statusChannelId: "406278182283640842",
  },
  guild: {
    // The name of your guild (or guilds, if the guild is large).
    guilds: "5Man Blob"
    ? "5Man Blob".split(',') : [],
    // The alliance your guild belongs to
    alliance:"EVER"
  },
  battle: {
    // Min players to report as battle
    minPlayers: 10,
    // Min guild players to report as battle
    minRelevantPlayers: 3
  },
  kill: {
    // Min killfame to report kill
    minFame: 25000
  }
};
