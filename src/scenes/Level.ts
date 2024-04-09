
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScrollFactorScript from "../script-nodes/ScrollFactorScript";
import MovingPlatform1 from "../prefabs/MovingPlatform1";
import HorizontalMoveScript from "../script-nodes/HorizontalMoveScript";
import MovingPlatform2 from "../prefabs/MovingPlatform2";
import Stone from "../prefabs/Stone";
import FollowObjectScript from "../script-nodes/FollowObjectScript";
import Ladder from "../prefabs/Ladder";
import Player from "../prefabs/Player";
import { OnAwakeScript } from "@phaserjs/editor-scripts-core";
import { CameraStartFollowActionScript } from "@phaserjs/editor-scripts-camera";
import FoodItem from "../prefabs/FoodItem";
import PlayerButton from "../prefabs/PlayerButton";
import { MoveInSceneActionScript } from "@phaserjs/editor-scripts-simple-animations";
import { DurationConfigComp } from "@phaserjs/editor-scripts-simple-animations";
import { DelayConfigComp } from "@phaserjs/editor-scripts-simple-animations";
import { FadeCameraActionScript } from "@phaserjs/editor-scripts-camera";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// backgroundLayer
		const backgroundLayer = this.add.layer();

		// background
		const background = this.add.image(0, 1, "Volcano Level Set_Background - Layer 00");
		background.scaleX = 1.1;
		background.scaleY = 1.1;
		background.setOrigin(0, 0);
		background.tintTopLeft = 16777215;
		background.tintTopRight = 16777215;
		background.tintBottomLeft = 16777215;
		background.tintBottomRight = 16777215;
		backgroundLayer.add(background);

		// scrollFactorScript_1
		const scrollFactorScript_1 = new ScrollFactorScript(background);

		// platformBottomItemsLayer
		const platformBottomItemsLayer = this.add.layer();

		// signpost1
		const signpost1 = this.add.image(1536, -344, "volcano", "Volcano Level Set_Environment - Signpost 01.png");
		platformBottomItemsLayer.add(signpost1);

		// platformsLayer
		const platformsLayer = this.add.layer();

		// movingPlatform2
		const movingPlatform2 = new MovingPlatform1(this, 890, 256);
		platformsLayer.add(movingPlatform2);

		// horizontalMoveScript_3
		const horizontalMoveScript_3 = new HorizontalMoveScript(movingPlatform2);

		// movingPlatform1
		const movingPlatform1 = new MovingPlatform2(this, 311, 577);
		platformsLayer.add(movingPlatform1);

		// horizontalMoveScript_2
		const horizontalMoveScript_2 = new HorizontalMoveScript(movingPlatform1);

		// p4
		const p4 = this.add.image(128, 768, "volcano", "Volcano Level Set_Platformer - Ground Additional 03.png");
		platformsLayer.add(p4);

		// p3
		const p3 = this.add.image(256, 640, "volcano", "Volcano Level Set_Platformer - Ground 12.png");
		platformsLayer.add(p3);

		// p2
		const p2 = this.add.image(128, 640, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platformsLayer.add(p2);

		// p1
		const p1 = this.add.image(0, 640, "volcano", "Volcano Level Set_Platformer - Ground 11.png") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(p1, false);
		p1.body.checkCollision.down = false;
		p1.body.checkCollision.left = false;
		p1.body.checkCollision.right = false;
		p1.body.pushable = false;
		p1.body.immovable = true;
		p1.body.setOffset(0, 8);
		p1.body.setSize(374, 32, false);
		platformsLayer.add(p1);

		// movingPlatform3
		const movingPlatform3 = new MovingPlatform1(this, 1920, 0);
		platformsLayer.add(movingPlatform3);

		// horizontalMoveScript_1
		const horizontalMoveScript_1 = new HorizontalMoveScript(movingPlatform3);

		// movingPlatform4
		const movingPlatform4 = new MovingPlatform2(this, 1882, 590);
		platformsLayer.add(movingPlatform4);

		// horizontalMoveScript
		const horizontalMoveScript = new HorizontalMoveScript(movingPlatform4);

		// p9
		const p9 = this.add.image(2880, 640, "volcano", "Volcano Level Set_Platformer - Ground Additional 03.png");
		p9.setOrigin(0, 0);
		platformsLayer.add(p9);

		// p8
		const p8 = this.add.image(2816, 640, "volcano", "Volcano Level Set_Platformer - Ground 10.png") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(p8, false);
		p8.body.checkCollision.down = false;
		p8.body.checkCollision.left = false;
		p8.body.checkCollision.right = false;
		p8.body.pushable = false;
		p8.body.immovable = true;
		p8.body.setOffset(10, 8);
		p8.body.setSize(541, 27, false);
		platformsLayer.add(p8);

		// p7
		const p7 = this.add.image(2944, 640, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platformsLayer.add(p7);

		// p6
		const p6 = this.add.image(3073, 640, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platformsLayer.add(p6);

		// p5
		const p5 = this.add.image(3200, 640, "volcano", "Volcano Level Set_Platformer - Ground 11.png");
		platformsLayer.add(p5);

		// p12
		const p12 = new Stone(this, 1536, 384);
		platformsLayer.add(p12);

		// p11
		const p11 = new Stone(this, 1536, -256);
		platformsLayer.add(p11);

		// p10
		const p10 = new Stone(this, 1664, -256);
		platformsLayer.add(p10);

		// p13
		const p13 = new Stone(this, 1792, -256);
		platformsLayer.add(p13);

		// platformTopItemsLayer
		const platformTopItemsLayer = this.add.layer();

		// endFlag
		const endFlag = this.add.image(2944, 526, "volcano", "Volcano Level Set_Environment - White Flag.png");
		platformTopItemsLayer.add(endFlag);

		// signpost
		const signpost = this.add.image(131, 519, "volcano", "Volcano Level Set_Environment - Signpost 01.png");
		platformTopItemsLayer.add(signpost);

		// skull1
		const skull1 = this.add.image(2093, -28, "volcano", "Volcano Level Set_Environment - Skull.png");
		platformTopItemsLayer.add(skull1);

		// followObjectScript_3
		const followObjectScript_3 = new FollowObjectScript(skull1);

		// lava2
		const lava2 = this.add.image(1059, 250, "volcano", "Volcano Level Set_Environment - Lava 02.png");
		platformTopItemsLayer.add(lava2);

		// followObjectScript_2
		const followObjectScript_2 = new FollowObjectScript(lava2);

		// lava1
		const lava1 = this.add.image(599, 576, "volcano", "Volcano Level Set_Environment - Lava 02.png");
		platformTopItemsLayer.add(lava1);

		// followObjectScript_1
		const followObjectScript_1 = new FollowObjectScript(lava1);

		// lava3
		const lava3 = this.add.image(233, 571, "volcano", "Volcano Level Set_Environment - Lava 02.png");
		platformTopItemsLayer.add(lava3);

		// laddersLayer
		const laddersLayer = this.add.layer();

		// ladder5
		const ladder5 = new Ladder(this, 1468, -150, "volcano", "Volcano Level Set_Platformer - Ladder.png");
		laddersLayer.add(ladder5);

		// ladder4
		const ladder4 = new Ladder(this, 1472, -272, "volcano", "Volcano Level Set_Platformer - Ladder.png");
		laddersLayer.add(ladder4);

		// ladder3
		const ladder3 = new Ladder(this, 1475, -22, "volcano", "Volcano Level Set_Platformer - Ladder.png");
		laddersLayer.add(ladder3);

		// ladder2
		const ladder2 = new Ladder(this, 1467, 106, "volcano", "Volcano Level Set_Platformer - Ladder.png");
		laddersLayer.add(ladder2);

		// ladder1
		const ladder1 = new Ladder(this, 1475, 208);
		laddersLayer.add(ladder1);

		// ladder6
		const ladder6 = new Ladder(this, 952, 321);
		laddersLayer.add(ladder6);

		// followObjectScript
		const followObjectScript = new FollowObjectScript(ladder6);

		// playerLayer
		const playerLayer = this.add.layer();

		// player
		const player = new Player(this, 104, 482, "player", "Idle_001");
		playerLayer.add(player);

		// onAwakeScript_4
		const onAwakeScript_4 = new OnAwakeScript(player);

		// cameraStartFollowActionScript
		new CameraStartFollowActionScript(onAwakeScript_4);

		// pickItemsLayer
		const pickItemsLayer = this.add.layer();

		// meet3
		const meet3 = new FoodItem(this, 1232, 33, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		pickItemsLayer.add(meet3);

		// meet2
		const meet2 = new FoodItem(this, 2250, 278, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		pickItemsLayer.add(meet2);

		// meet1
		const meet1 = new FoodItem(this, 747, 386);
		pickItemsLayer.add(meet1);

		// controlsLayer
		const controlsLayer = this.add.layer();

		// btn_left
		const btn_left = new PlayerButton(this, 880, 640, "ui", "btn-left");
		controlsLayer.add(btn_left);

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(btn_left);

		// moveInSceneActionScript_1
		const moveInSceneActionScript_1 = new MoveInSceneActionScript(onAwakeScript_1);

		// btn_right
		const btn_right = new PlayerButton(this, 1080, 640, "ui", "btn-right");
		controlsLayer.add(btn_right);

		// onAwakeScript_2
		const onAwakeScript_2 = new OnAwakeScript(btn_right);

		// moveInSceneActionScript_2
		const moveInSceneActionScript_2 = new MoveInSceneActionScript(onAwakeScript_2);

		// btn_up
		const btn_up = new PlayerButton(this, 126, 640);
		controlsLayer.add(btn_up);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(btn_up);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// debugLayer
		this.add.layer();

		// onAwakeScript_3
		const onAwakeScript_3 = new OnAwakeScript(this);

		// fadeCameraActionScript
		new FadeCameraActionScript(onAwakeScript_3);

		// lists
		const platforms = [p1, movingPlatform1, movingPlatform2, movingPlatform3, movingPlatform4, p8, p12, p13, p10, p11, ladder1, ladder2, ladder3, ladder5, ladder4, ladder6];
		const foodItems = [meet1, meet3, meet2];

		// scrollFactorScript_1 (prefab fields)
		scrollFactorScript_1.x = 0.1;

		// horizontalMoveScript_3 (prefab fields)
		horizontalMoveScript_3.horizVelocity = -50;
		horizontalMoveScript_3.minX = 540;
		horizontalMoveScript_3.maxX = 1170;

		// horizontalMoveScript_2 (prefab fields)
		horizontalMoveScript_2.horizVelocity = 100;
		horizontalMoveScript_2.minX = 310;
		horizontalMoveScript_2.maxX = 924;

		// horizontalMoveScript_1 (prefab fields)
		horizontalMoveScript_1.horizVelocity = -50;
		horizontalMoveScript_1.minX = 1900;
		horizontalMoveScript_1.maxX = 2224;

		// horizontalMoveScript (prefab fields)
		horizontalMoveScript.horizVelocity = 100;
		horizontalMoveScript.minX = 1720;
		horizontalMoveScript.maxX = 2360;

		// followObjectScript_3 (prefab fields)
		followObjectScript_3.target = movingPlatform3;

		// followObjectScript_2 (prefab fields)
		followObjectScript_2.target = movingPlatform2;

		// followObjectScript_1 (prefab fields)
		followObjectScript_1.target = movingPlatform1;

		// followObjectScript (prefab fields)
		followObjectScript.target = movingPlatform2;

		// player (prefab fields)
		player.platforms = platforms;
		player.foodItems = foodItems;

		// btn_left.playerControllerScript (prefab fields)
		btn_left.playerControllerScript.player = player;
		btn_left.playerControllerScript.direction = "left";

		// moveInSceneActionScript_1 (prefab fields)
		moveInSceneActionScript_1.from = "BOTTOM";

		// moveInSceneActionScript_1 (components)
		const moveInSceneActionScript_1DurationConfigComp = new DurationConfigComp(moveInSceneActionScript_1);
		moveInSceneActionScript_1DurationConfigComp.duration = 750;
		const moveInSceneActionScript_1DelayConfigComp = new DelayConfigComp(moveInSceneActionScript_1);
		moveInSceneActionScript_1DelayConfigComp.delay = 750;

		// btn_right.playerControllerScript (prefab fields)
		btn_right.playerControllerScript.player = player;
		btn_right.playerControllerScript.direction = "right";

		// moveInSceneActionScript_2 (prefab fields)
		moveInSceneActionScript_2.from = "BOTTOM";

		// moveInSceneActionScript_2 (components)
		const moveInSceneActionScript_2DurationConfigComp = new DurationConfigComp(moveInSceneActionScript_2);
		moveInSceneActionScript_2DurationConfigComp.duration = 750;
		const moveInSceneActionScript_2DelayConfigComp = new DelayConfigComp(moveInSceneActionScript_2);
		moveInSceneActionScript_2DelayConfigComp.delay = 750;

		// btn_up.playerControllerScript (prefab fields)
		btn_up.playerControllerScript.player = player;
		btn_up.playerControllerScript.direction = "up";

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "BOTTOM";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 750;
		const moveInSceneActionScriptDelayConfigComp = new DelayConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDelayConfigComp.delay = 750;

		this.player = player;

		this.events.emit("scene-awake");
	}

	private player!: Player;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.cameras.main.setBounds(0, -800, 3000, 750 + 800);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
