
// You can write more code here

/* START OF COMPILED CODE */

import ScrollFactorScript from "../script-nodes/ScrollFactorScript";
import PlayerControllerScript from "../script-nodes/PlayerControllerScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerButton extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 81, y ?? 72, texture || "ui", frame ?? "btn-up");

		// scrollFactorScript
		new ScrollFactorScript(this);

		// playerControllerScript
		const playerControllerScript = new PlayerControllerScript(this);

		this.playerControllerScript = playerControllerScript;

		/* START-USER-CTR-CODE */

		this.setInteractive();

		/* END-USER-CTR-CODE */
	}

	public playerControllerScript: PlayerControllerScript;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
