
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface FoodItem {

	 body: Phaser.Physics.Arcade.Body;
}

export default class FoodItem extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 72, y ?? 70, texture || "volcano", frame ?? "Volcano Level Set_Collectable Object - Meat.png");

		scene.physics.add.existing(this, false);
		this.body.setSize(128, 128, false);

		/* START-USER-CTR-CODE */

		this.idleTween = this.scene.tweens.add({
			targets: this,
			scaleX: 0.8,
			scaleY: 0.8,
			angle: "-= 30",
			yoyo: true,
			repeat: -1,
			duration: 1000 + Math.random() * 1000
		});

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private idleTween: Phaser.Tweens.Tween;

	taken() {

		this.body.setEnable(false);

		this.idleTween.remove();

		this.scene.add.tween({
			targets: this,
			duration: 500,
			scaleX: 0.6,
			scaleY: 0.6,
			angle: 360,
			alpha: 0,
			y: "-=50",
			ease: Phaser.Math.Easing.Linear,
			onComplete: () => {
				this.destroy();
			},
			onCompleteScope: this
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
