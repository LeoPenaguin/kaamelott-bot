import { playSound } from '../lib/player.js'
import Command from './command.js'

const soundsPath = './sounds/kaamelott/'

// Cette commande hérite de la classe Command
export default class Kaamelott extends Command {
    // Le bot exécute cette commande que si un
    // utilisateur a écrit un message qui commence avec "!kaamelott"
    match(message) {
        return message.content.startsWith('-kaamelott')
    }

    // Et voilà l'action qui est exécutée !
    action(message) {
        // On récupère l'utilisateur qui a demandé une action
        playSound(message, soundsPath)
    }
}
