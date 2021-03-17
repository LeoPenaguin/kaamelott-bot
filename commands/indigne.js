import { playSound } from '../lib/player.js'
import Command from './command.js'

const soundsPath = './sounds/memes/'

// Cette commande hérite de la classe Command
export default class Indigne extends Command {
    // Le bot exécute cette commande que si un
    // utilisateur a écrit un message qui commence avec "!indigne"
    match(message) {
        return message.content.startsWith('-indigne')
    }

    // Et voilà l'action qui est exécutée !
    action(message) {
        // On récupère l'utilisateur qui a demandé une action
        playSound(message, soundsPath)
    }
}
