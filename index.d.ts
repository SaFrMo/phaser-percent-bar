declare module 'phaser-percent-bar' {
    export default class HealthBar {
        constructor (opts: {
            game: Phaser.Game,
            host: Phaser.Sprite,
            bgSprite?: string,
            bgTint?: number,
            fgSprite?: string,
            fgTint?: number,
            frame?: any,
            height?: number,
            key?: string,
            resize?: boolean,
            sprite?: Phaser.Sprite,
            watch?: { host: Phaser.Sprite, value: string, max: number },
            width?: number,
            x?: number,
            xOffset?: number,
            y?: number,
            yOffset?: number,
        });

        hide(): void;

        setAlpha(newAlpha: number): void;

        show(): void;
    }
}