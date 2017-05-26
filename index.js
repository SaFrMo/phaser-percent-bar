import Phaser from 'phaser'

export default class extends Phaser.Sprite {
	constructor (opts) {
		super(opts.game, opts.x || 0, opts.y || 0, opts.key || '', opts.frame || '')

        // add 1x1 white pixel to cache if necessary
		if (!opts.game.cache.checkImageKey('white1x1pixel')) {
            // loads 1x1 white gif from data URI
			opts.game.load.image('white1x1pixel', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=')
			opts.game.load.onLoadComplete.add(() => this.runCreation(opts))
			opts.game.load.start()
		} else {
			this.runCreation(opts)
		}
	}

    // this has to be in a separate function so that the white1x1pixel sprite can load asynchronously
	runCreation (opts) {
        // Background to progress bar
		this.bg = opts.host.addChild(this.game.make.sprite(0, opts.hasOwnProperty('yOffset') ? opts.yOffset : -25, 'white1x1pixel'))
		this.bg.width = opts.width || opts.host.width
		this.bg.height = opts.height || 10
		this.bg.tint = opts.hasOwnProperty('bgTint') ? opts.tint : 0x333333

        // Foreground
		this.bar = opts.host.addChild(this.game.make.sprite(0, opts.hasOwnProperty('yOffset') ? opts.yOffset : -25, 'white1x1pixel'))
		this.bar.width = this.bg.width
		this.bar.height = opts.height || 10
		this.bar.tint = opts.hasOwnProperty('barTint') ? opts.tint : 0x00cc00

        // Save options
		this.opts = opts
	}

	update () {
		super.update()
		if (this.opts.watch) {
			this.bar.width = this.bg.width * (this.opts.watch.host[this.opts.watch.value] / this.opts.watch.max)
		}
	}
}
