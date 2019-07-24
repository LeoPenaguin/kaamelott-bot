
// La classe Command sera la classe parente des
// autres commandes 
module.exports = class Command {

    // Les autres commandes hériteront de parse() qui vérifie 
    // simplement que la commande entrée est celle qui 
    // est attendue par la commande enfant.
    static parse(message) {
        if (this.match(message)) {
            this.action(message);
            console.log("🤖 " + message.author.tag + " a dit " + message.content);
            message.delete();
            return true;
        }
        return false;
    }

    // On verra celle-ci dans la "commande fille"
    static match(message) {
        return false;
    }

    // Pareil pour cette fonction
    static action(message) {}

};
