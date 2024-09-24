
// You can write more code here

/* START OF COMPILED CODE */

import { SpriteScript } from "@phaserjs/editor-scripts-quick";
import { ScriptNode } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FollowObjectScript extends SpriteScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public target!: Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	private offsetX = 0;
	private offsetY = 0;

	start() {

		if (this.target) {

			this.offsetX = this.gameObject.x - this.target.x;
			this.offsetY = this.gameObject.y - this.target.y;
		}
	}

	update() {

		if (this.target) {

			this.gameObject.x = this.target.x + this.offsetX;
			this.gameObject.y = this.target.y + this.offsetY;

			if (this.gameObject.body && this.target.body) {

				this.gameObject.body.velocity.x = this.target.body.velocity.x;
				this.gameObject.body.velocity.y = this.target.body.velocity.y;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
