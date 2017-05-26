## What
This is part of the [Phaser Component Library](https://github.com/SaFrMo/phaser-component-library).

A percentage bar is a self-contained, self-updating bar with solid foreground and background colors. It can be attached to a sprite or created in a static location on the camera.

## How
`npm install phaser-percent-bar`

Then, in your Phaser source code

```js
import HealthBar from 'phaser-percent-bar'

// Sprite to track
const sprite = this.game.add.sprite(0, 0, 'your-key')

// Set health and max-health values
sprite.health = 100
sprite.maxHealth = 100

// Create percentage bar as health bar
const healthBar = this.game.add.existing(new HealthBar({
    game: this.game,
    host: sprite,
    watch: {
        host: sprite,
        value: 'health',
        max: sprite.maxHealth
    }
}))
```

This will create a functioning, auto-updating health bar and attach it to the given sprite. When the sprite's health changes, the bar will update to reflect that.

## API

### `new PercentBar( { options } )`

#### options

##### `barTint`

Type: `hex`<br>
Default: `0x333333`

Hex value of the tint of the percentage bar's background.

##### `bgTint`

Type: `hex`<br>
Default: `0x00cc00`

Hex value of the tint of the percentage bar's foreground (the bar itself).

##### `game`

Required<br>
Type: `Phaser.Game`

Host game for the percent-bar.

##### `height`

Type: `number`<br>
Default: `10`

The height, in pixels, of the percentage bar.

##### `host`

Required<br>
Type: `Phaser.Sprite`

The parent sprite for this percentage bar.

##### `watch`

Recommended<br>
Type: `Object`<br>
Default: none

The values that the percentage bar will represent. Requires the following properties:

* `host` - Object containing the value to watch.
* `value` - String with the name of the property to watch.
* `max` - Number indicating the maximum value of the progress bar.

Example implementation:

```js
new PercentBar({
    // ...
    watch: {
        host: hostSprite,
        value: 'health',
        max: 100
    }
    // ...
})
```

##### `width`

Type: `number`<br>
Default: `width` of `host`

The width, in pixels, of the percentage bar.

##### `yOffset`

Type: `number`<br>
Default: `-25`

Number of pixels to offset from the host sprite.
