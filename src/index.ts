import * as dotenv from 'dotenv'
dotenv.config()
import { bot } from './bot'
import { reportErr } from './helpers/error'
import { setupBot } from './commands/start'
import { setupBack } from './commands/back'
import { setupPin } from './commands/pin'
import { setupLeave } from './commands/leave'

// Setup commands
setupBot(bot)
setupBack(bot)
setupPin(bot)
setupLeave(bot)

// bot.use(Telegraf.log())
bot.catch(reportErr)
bot.launch().then(() => console.info('Bot is running...')).catch(reportErr)