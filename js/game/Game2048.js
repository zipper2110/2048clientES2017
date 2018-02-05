export default class Game2048 {
    constructor({element}) {
        element.innerHTML = "ok the game is here";
        // TODO: use the width of the container and make the height the same
        // TODO: and put listeners on page resize to update the game size

        // 1. create events house and empty ui
        // (init root ui component - pass the container element)
        // events house gets the root ui component and calls its' api

        // 2. init state (singleton?) and the actions house
        // actions house gets the state and calls its' api

        // 3. subscribe for user input
        // create input handler

        // when you need to fire an action you just basically call the "fire" method
        // of the actions house and pass an Action object as a parameter
        // the same goes with the events
    }

    run() {

    }
}