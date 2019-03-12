! function (t, s, i, e)
{
	function n(s, i)
	{
		this.element = s, this.settings = t.extend(
			{}, a, i), this.settings.fontSize || (this.settings.fontSize = this.settings.radius / 1.8), this
			.settings.strokeWidth || (this.settings.strokeWidth = this.settings.radius / 5), this._defaults =
			a, this._name = h, this._init()
	}
	var h = "countdown360"
		, a = {
			radius: 17.5
			, strokeStyle: "#271739"
			, strokeWidth: e
			, fillStyle: "#3b2751"
			, fontColor: "#477050"
			, fontFamily: "sans-serif"
			, fontSize: e
			, fontWeight: 600
			, autostart: !0
			, seconds: 10
			, label: ["second"
				, "seconds"]
			, startOverAfterAdding: !0
			, onComplete: function () {}
		}
	n.prototype = {
		extendTimer: function (t)
		{
			var s = parseInt(t)
				, i = Math.round(((new Date)
					.getTime() - this.startedAt.getTime()) / 1e3)
			this._secondsLeft(i) + s <= this.settings.seconds && this.startedAt.setSeconds(this
				.startedAt.getSeconds() + parseInt(t))
		}
		, addSeconds: function (t)
		{
			var s = Math.round((
				(new Date)
				.getTime() - this.startedAt.getTime()) / 1e3)
			this.settings.startOverAfterAdding ? (this.settings.seconds = this._secondsLeft(s) +
				parseInt(t), this.start()) : this.settings.seconds += parseInt(t)
		}
		, start: function ()
		{
			this.startedAt = new Date, this._drawCountdownShape(3.5 * Math.PI, !0), this
				._drawCountdownLabel(0), this.interval = setInterval(jQuery.proxy(this._draw, this),
					1e3)
		}
		, stop: function (t)
		{
			clearInterval(this.interval), t && t()
		}
		, _init: function ()
		{
			this.settings.width = 2 * this.settings.radius + 2 * this.settings.strokeWidth, this
				.settings.height = this.settings.width, this.settings.arcX = this.settings.radius +
				this.settings.strokeWidth, this.settings.arcY = this.settings.arcX, this._initPen(this
					._getCanvas()), this.settings.autostart && this.start()
		}
		, _getCanvas: function ()
		{
			var s = t('<canvas id="countdown360_' + t(this.element)
				.attr("id") + '" width="' + this.settings.width + '" height="' + this.settings
				.height +
				'"><span id="countdown-text" role="status" aria-live="assertive"></span></canvas>'
				)
			return t(this.element)
				.prepend(s[0]), s[0]
		}
		, _initPen: function (s)
		{
			this.pen = s.getContext("2d"), this.pen.lineWidth = this.settings.strokeWidth, this.pen
				.strokeStyle = this.settings.strokeStyle, this.pen.fillStyle = this.settings
				.fillStyle, this.pen.textAlign = "center", this.pen.textBaseline = "middle", this
				.ariaText = t(s)
				.children("#countdown-text"), this._clearRect()
		}
		, _clearRect: function ()
		{
			this.pen.clearRect(0, 0, this.settings.width, this.settings.height)
		}
		, _secondsLeft: function (t)
		{
			return this.settings.seconds - t
		}
		, _drawCountdownLabel: function (t)
		{
			this.ariaText.text(s), this.pen.font = this.settings.fontWeight + " " + this.settings
				.fontSize + "px " + this.settings.fontFamily
			var s = this._secondsLeft(t)
				, i = 1 === s ? this.settings.label[0] : this.settings.label[1]
				, e = this.settings.label && 2 === this.settings.label.length
				, n = this.settings.width / 2
			e ? y = this.settings.height / 2 - this.settings.fontSize / 6.2 : y = this.settings
				.height / 2, this.pen.fillStyle = this.settings.fillStyle, this.pen.fillText(s + 1, n,
					y), this.pen.fillStyle = this.settings.fontColor, this.pen.fillText(s, n, y), e &&
				(this.pen.font = "normal small-caps " + this.settings.fontSize / 3 + "px " + this
					.settings.fontFamily, this.pen.fillText(i, this.settings.width / 2, this.settings
						.height / 2 + this.settings.fontSize / 2.2))
		}
		, _drawCountdownShape: function (t, s)
		{
			this.pen.fillStyle = this.settings.fillStyle, this.pen.beginPath(), this.pen.arc(this
					.settings.arcX, this.settings.arcY, this.settings.radius, 1.5 * Math.PI, t, !1),
				this.pen.fill(), s && this.pen.stroke()
		}
		, _draw: function ()
		{
			var t = Math.round((
					(new Date)
					.getTime() - this.startedAt.getTime()) / 1e3)
				, s = 3.5 * Math.PI - 2 * Math.PI / this.settings.seconds * t
			this._clearRect(), this._drawCountdownShape(3.5 * Math.PI, !1), t < this.settings
				.seconds ? (this._drawCountdownShape(s, !0), this._drawCountdownLabel(t)) : (this
					._drawCountdownLabel(this.settings.seconds), this.stop(), this.settings
					.onComplete())
		}
	}, t.fn[h] = function (s)
	{
		var i
		return this.each(function ()
		{
			i = t.data(this, "plugin_" + h), i || (i = new n(this, s), t.data(this, "plugin_" + h,
				i))
		}), i
	}
}(jQuery, window, document)
