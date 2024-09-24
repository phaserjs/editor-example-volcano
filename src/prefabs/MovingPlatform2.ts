
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface MovingPlatform2 {

	 body: Phaser.Physics.Arcade.Body;
}

export default class MovingPlatform2 extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.checkCollision.down = false;
		this.body.checkCollision.left = false;
		this.body.checkCollision.right = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setOffset(7, 8);
		this.body.setSize(368, 17, false);

		// p3
		const p3 = scene.add.image(0, 0, "volcano", "Volcano Level Set_Platformer - Wooden Bridge.png");
		p3.setOrigin(0, 0);
		this.add(p3);

		// p2
		const p2 = scene.add.image(128, 0, "volcano", "Volcano Level Set_Platformer - Wooden Bridge.png");
		p2.setOrigin(0, 0);
		this.add(p2);

		// p1
		const p1 = scene.add.image(256, 0, "volcano", "Volcano Level Set_Platformer - Wooden Bridge.png");
		p1.setOrigin(0, 0);
		this.add(p1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
