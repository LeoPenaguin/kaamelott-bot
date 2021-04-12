import Discord from 'discord.js'

// La classe Command sera la classe parente des
// autres commandes
export default class Command {
    // Les autres commandes hériteront de parse() qui vérifie
    // simplement que la commande entrée est celle qui
    // est attendue par la commande enfant.
    parse(message) {
        if (this.match(message)) {
            this.action(message)
            console.log(`🤖 ${message.author.tag} a dit ${message.content}`)
            
            const emojis = ['🤣','😁','😆','🥳','🤩','🤮','😀','😂','😍','😎','💩','🤡','🤪']

            const randomEmoji = Math.floor(
                Math.random() * emojis.length
            )

            message.react(emojis[randomEmoji])

            return true
        }
        return false
    }

    // On verra celle-ci dans la "commande fille"
    match() {
        return false
    }

    // Pareil pour cette fonction
    action() {}
}
