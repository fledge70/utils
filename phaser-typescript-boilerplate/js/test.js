"use strict";
/// <reference path="./phaser.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import "phaser";
// game class
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(config) {
        return _super.call(this, config) || this;
    }
    return Game;
}(Phaser.Game));
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, {
            key: "BootScene"
        }) || this;
    }
    BootScene.prototype.preload = function () {
        this.load.image("logo", "./assets/logo.png");
    };
    BootScene.prototype.create = function () {
        this.testSprite = this.add.sprite(400, 300, "logo");
    };
    return BootScene;
}(Phaser.Scene));
// Start of code that runs on launch
// main game configuration
var config = {
    width: 256,
    height: 256,
    type: Phaser.CANVAS,
    parent: "game",
    scene: BootScene,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 }
        }
    }
};
// when the page is loaded, create the game instance
window.onload = function () {
    var game = new Game(config);
};
