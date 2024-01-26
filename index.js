import psn from 'psn-api'
import Discord from 'discord.js'
import { handleCommands } from './commands'
import registerCommands from './helpers/registerCommands'

const token = 123 //discord
const npsso = 456 //psn

const client = new Discord.Client({ intents })

// GENERAL INFO
// client      - bot instance
// guild       - server instance
// intents     - needs to be provided as a permission that bot will be using
// npsso       - psn token
// interaction - slash command


// GENERAL TODO:
// 0. Env variables for secrets and tokens
// 1. DB handling
// 2. Connect
// 3. Better logs than console.logs
// 4. Web UI

// Fired on bot start once
// TODO:
// 1. Keep psn token alive
// 2. Set interval for reminders (could be done differently idk, this is replit apporach)
// 3. Get all reactionMessages from cache so app can listen to this (and add roles for ex.)
// 4. Add bot statsus
// 5. When registerCommands adds too many commands later ones arent addded, also this slows down startup so try to add something to check if its already added
client.once('ready', async () => {
    console.log(`Logged in!`)

    registerCommands(client)
})

// Debug, probably wont be used. There was retry mechanism for replit issues
client.on("debug", function (info) {

})

// Log for app quit
client.on('disconnect', () => {
    console.log(client.user.username + ' disconnected!')
})

// When reaction is added to any comment
// TODO:
// 1. Remove reaction if admin is muted
// 2. Check and proceed roulette
// 3. Add roles if its roleMessage
client.on('messageReactionAdd', async (reaction, user) => {
    
})

// When reaction is removed to any comment
// TODO:
// 1. Remove role when its roleMessage
client.on('messageReactionRemove', async (reaction, user) => {

})

// User related changes, ex. username or role update
// TODO:
// 1. Username change detection to admin channel 
client.on('guildMemberUpdate', (oldMember, newMember) => {

})

// Detects user status changes, ex. current game
// TODO:
// 1. Add roles related to current game
client.on('presenceUpdate', async (oldPresence, newPresence) => {
    
})

// Handling commands
// To use interaction it has to be registered in READY
client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) return

    try {
        // Set "Thinking" messasge - if reply takes longer it will give an error "interaction not found" - try to always use editReply with defer
        await interaction.deferReply()
        await handleCommands(interaction, client)
    } catch (err) {
        console.log(err)
    }
})

// Creating messages not related to commands
// TODO:
// 1. Inline commands
// 2. Ban patterns - forbidden words
// 3. Moving messages
// 4. Exp
// 5. Mute admins
client.on('messageCreate', async (msg) => {

})

// On message delete (self explainatory)
// TODO:
// 1. Send deleted message to admin channel
client.on('messageDelete', (deletedMsg) => {

})

// On message edit
// TODO:
// 1. Send changed message to admin channel\
// 2. Add banned words mechanism to prevent exploits 
client.on('messageUpdate', async (prevMsg, newMsg) => {

})

// When new member enters
// TODO:
// 1. Welcome
// 2. Add [not connected] role
// 3. Add entry to warn records
client.on("guildMemberAdd", (member) => {

})

// When member leaves
// TODO:
// 1. Say goodbye
// 2. Add entry to warn records
client.on("guildMemberRemove", (member) => {

})

// Function to connect bot to  discord
client.login(token).catch(e => console.error(e));