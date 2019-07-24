/*jshint esversion: 6 */

module.exports = class Command {

    static parse (message) {
        if (this.match(message)) {
            this.action(message);
            console.log("🤖 " + message.author.tag  + " a dit " + message.content);
            message.delete();
            return true;
        }
        return false;
    }

    static match (message) {
        return false;
    }

    static action (message) {
    }

};
