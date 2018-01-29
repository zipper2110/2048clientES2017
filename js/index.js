
import Game2048 from "./game/Game2048.js";

export default function createDefaultGame(element) {
    const game = new Game2048({element});
    game.run();
}