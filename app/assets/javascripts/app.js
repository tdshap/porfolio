var WelcomePage = Backbone.View.extend({ 
	tagName: "div", 
	attributes: {
		class: "welcome col-xs-12 col-sm-12 col-md-12 col-lg-12",
	},
	template: _.template($("#welcome").html() ),
	initialize: function(){
		this.render()
	},
	render: function(){
		var welcome = this.$el.html( this.template )
		$("div.container").append(welcome)
	}

})


var WorkView = Backbone.View.extend({
	tagName: "div",
	attributes: {
		class: "work"
	},

})


var AboutView = Backbone.View.extend({
	tagName: "div",
	attributes: {
		class: "about"
	},
	template: _.template($("#about").html() ),
	initialize: function(){
		this.render()
	},
	render: function(){
		var about = this.$el.html( this.template )
		$("div.container").append(about)
	}
})

var ContactView = Backbone.View.extend({

})


// Router
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"work":"work",
		"about":"about",
		"skills":"skills",
		"contact":"contact"
	}
})
var router = new Router;

router.on("route:home", function(){
	if ($(".about") != [] || $(".about")[0] != undefined && $(".about")[0].style.display == "none"){
		$(".about").fadeOut("slow")
	}

	if ($(".welcome") == [] || $(".welcome")[0] != undefined && $(".welcome")[0].style.display == "none") {
		$(".welcome").fadeIn("slow")
	} else {
		welcomePage = new WelcomePage
	}


})
router.on("route:work", function(){
	$("div.container").fadeOut("slow")


})
router.on("route:about", function(){
	if ($(".welcome") != [] || $(".welcome")[0] != undefined && $(".welcome")[0].style.display == "none"){
		$(".welcome").fadeOut("slow")
	}

	aboutView = new AboutView

})
router.on("route:skills", function(){
	$("div.container").fadeOut("slow")


})
router.on("route:contact", function(){
	$("div.container").fadeOut("slow")



})

Backbone.history.start()