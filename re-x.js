if (!0 == autoshort)
{
	function a(a)
	{
		return window.btoa(a)
	}

	function b()
	{
		var b = window.location.hostname;
		"" == protected_links || protected_links.match(b) ? "" == protected_links && (protected_links = b) : protected_links += ", " + b;
		var g = ""
			, h = []
			, j = 0;
		g = document.getElementsByTagName("a"), a_to_va = g.length, h = f(), j = h.length;
		for (var k = !1, m = 0, p = "", q = 0; a_to_va > q; q++)
		{
			for (k = !1, m = 0; 0 == k && j > m;) p = g[q].href, !p.match(h[m]) && p && p.match("http") || (k = !0), m++;
			if (0 == k)
			{
				var s = a(p);
				g[q].href = extra_short_link + "?url=" + s, g[q].rel = "nofollow", a_to_vb++, a_to_vc += q + ":::" + g[q].href + "\n"
			}
		}
		var d = document.getElementById("anonyminized")
			, l = document.getElementById("found_links");
		d && (d.innerHTML += a_to_vb), l && (l.innerHTML += a_to_va)
	}

	function f()
	{
		var a = [];
		return protected_links = protected_links.replace(" ", ""), a = protected_links.split(",")
	}
	var encode = document.getElementById("encode")
		, decode = document.getElementById("decode")
		, output = document.getElementById("output")
		, input = document.getElementById("input")
		, User_ID = ""
		, protected_links = ""
		, a_to_va = 0
		, a_to_vb = 0
		, a_to_vc = "";
	protected_links = extra_protected
		, function ()
		{
			b()
		}()
}
$(".itheric-com-redirect")
	.each(function ()
	{
		var a = $(this);
		$(this)
			.html("<div class=\"timer\"><div id=\"counter\"></div><div class=\"file\">" + waittext + "</div></div>");
		var b = {};
		document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function ()
		{
			function a(a)
			{
				return decodeURIComponent(a.split("+")
					.join(" "))
			}
			b[a(arguments[1])] = a(arguments[2])
		});
		var c = b.url;
		history.replaceState(null, "", "" + window.location.pathname + ""), c ? ! function ()
		{
			var b = document.createElement("script");
			b.src = "https://rawcdn.githack.com/MohammadQt/ither/55e65c1cea5395810f8d7c9dae3a95603e5015f9/countdown360.js", b.onload = function ()
			{
				$(document)
					.ready(function ()
					{
						var b = $("#counter")
							.countdown360(
							{
								radius: 50
								, seconds: secondswait
								, fillStyle: fillStyle
								, strokeStyle: strokeStyle
								, fontFamily: fontFamily
								, fontColor: fontColor
								, strokeWidth: 7
								, label: secondstext
								, autostart: !1
								, onComplete: function ()
								{
									$("#counter,.timer")
										.remove(), a.html("<div class=\"file\">" + redirecttext + "</div>"), window.setTimeout(function ()
										{
											window.location.href = window.atob(c)
										}, 1e3)
								}
							});
						b.start()
					})
			}, document.body.append(b)
		}() : ($(this)
			.html("<div class=\"box-redirect-quick\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i><div class=\"tools-quick\"><input class=\"short-input\" name=\"url\" placeholder=\"" + urltextinput + "\" required=\"\" type=\"text\"><textarea  class=\"result-redirect-url\" id=\"result-redirect-url\"></textarea><button class=\"get-url-redirect-now\" type=\"submit\" ><i class=\"fa fa-shield\"></i> " + textgeturl + "</button></div></div>"), $(".get-url-redirect-now")
			.click(function (a)
			{
				a.preventDefault(), $(".result-redirect-url")
					.val($($("html")
							.html())
						.filter("meta[property=\"og:url\"]")
						.attr("content") + "?url=" + window.btoa($(".short-input")
							.val()))
					.addClass("done")
			}), document.getElementById("result-redirect-url")
			.onclick = function ()
			{
				this.select(), document.execCommand("copy")
			})
	});
