
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import FoodItem from "./FoodItem";
/* END-USER-IMPORTS */

export default interface Player {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 290.96234741048465, y ?? 207.0022148582068, texture || "player", frame ?? "Idle_001");

		this.setOrigin(0.5, 0.8096661022845779);
		scene.physics.add.existing(this, false);
		this.body.gravity.y = 1400;
		this.body.allowDrag = false;
		this.body.setOffset(99.5, 124);
		this.body.setSize(81, 87, false);

		// leftKey
		const leftKey = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// spaceKey
		const spaceKey = this.scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// platformsCollider
		const platformsCollider = scene.physics.add.collider(this, []);

		// foodsCollider
		const foodsCollider = scene.physics.add.overlap(this, [], this.playerVsFood, undefined, this);

		this.platformsCollider = platformsCollider;
		this.foodsCollider = foodsCollider;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.spaceKey = spaceKey;

		/* START-USER-CTR-CODE */

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.updatePlayer, this);

		/* END-USER-CTR-CODE */
	}

	private platformsCollider: Phaser.Physics.Arcade.Collider;
	private foodsCollider: Phaser.Physics.Arcade.Collider;
	private leftKey: Phaser.Input.Keyboard.Key;
	private rightKey: Phaser.Input.Keyboard.Key;
	private upKey: Phaser.Input.Keyboard.Key;
	private spaceKey: Phaser.Input.Keyboard.Key;
	public platforms: Phaser.GameObjects.GameObject[] = [];
	public foodItems: FoodItem[] = [];

	/* START-USER-CODE */

	private leftDown = false;
	private rightDown = false;
	private upDown = false;
	private jumpsCount = 0;
	private lastWalkTime = 0;

	start() {

		// physics

		this.platformsCollider.object2 = this.platforms;
		this.foodsCollider.object2 = this.foodItems;

		// animation

		this.play("player-Idle");

		// controller

		this.jumpsCount = 0;

		this.lastWalkTime = 0;

		// sound
	}

	private playerVsFood(player: any, foodItem: any): void {

		(foodItem as FoodItem).taken();
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	updatePlayer(time: number, delta: number) {

		this.leftDown = this.leftDown || this.isKeyDown(this.leftKey);
		this.rightDown = this.rightDown || this.isKeyDown(this.rightKey);
		this.upDown = this.upDown || this.isKeyDown(this.upKey) || this.isKeyDown(this.spaceKey);

		const body = this.body;

		const xVelocity = 300;
		const yVelocity = -820;

		const touchingDown = body.touching.down;

		if (touchingDown) {

			this.jumpsCount = 0;

			if (time - this.lastWalkTime > 400) {

				body.velocity.x = 0;
			}
		}

		if (this.leftDown) {

			body.velocity.x = -xVelocity;

			if (touchingDown) {

				this.lastWalkTime = time;
			}

			this.flipX = true;
		}

		if (this.rightDown) {

			body.velocity.x = xVelocity;

			if (touchingDown) {

				this.lastWalkTime = time;
			}

			this.flipX = false;
		}


		if (this.upDown) {

			if (touchingDown || body.velocity.y > 0) {

				if (this.jumpsCount < 2) {

					this.jumpsCount++;
					body.velocity.y = yVelocity;
				}
			}
		}

		if (body.touching.down) {

			if (body.velocity.x === 0) {

				this.play("player-Idle", true);

			} else {

				this.play("player-Running", true);
			}
		} else {

			const current = this.anims.currentAnim;

			if (current) {

				if (current.key === "player-Jump Start") {

					if (!this.anims.isPlaying) {

						this.play("player-Jump Loop", true);
					}
				} else {

					if (current.key !== "player-Jump Loop") {

						this.play("player-Jump Start", true);
					}
				}
			}
		}

		this.leftDown = this.rightDown = this.upDown = false;

		// check bounds

		const bounds = this.scene.cameras.main.getBounds();

		if (this.x < bounds.x) {

			this.x = 0;
		}

		if (this.x > bounds.x + bounds.width) {

			this.x = bounds.x + bounds.width;
		}

		if (this.y < bounds.y) {

			this.y = bounds.y;
		}

		if (this.y > bounds.y + bounds.height + 200) {

			this.setPosition(130, 360);
		}
	}

	pressButton(direction: "left" | "right" | "up") {

		switch (direction) {
			case "left":
				this.leftDown = true;
				break;

			case "right":
				this.rightDown = true;
				break;

			case "up":
				this.upDown = true;
				break;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
