$(document).ready(function(){
	
})

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

var NavBar = Backbone.View.extend({
	tagName: "nav",
	attributes: {
		class: "navigation"
	},
	template: _.template($("#navbar").html() ),
	initialize: function(){
		this.render()
	},
	render: function(){
		var navbar = this.$el.html( this.template )
		$(document.body).append(navbar)
	}
})


var WorkView = Backbone.View.extend({
	tagName: "div",
	attributes: {
		class: "work"
	},

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
	$("div.container").empty()
	navbar = new NavBar
	welcomePage = new WelcomePage


})
router.on("route:work", function(){
	$("div.container").empty()

})
router.on("route:about", function(){
	$("div.container").empty()

})
router.on("route:skills", function(){
	$("div.container").empty()

})
router.on("route:contact", function(){
	$("div.container").empty()


})

Backbone.history.start()