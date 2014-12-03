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




// Router
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
	}
})
var router = new Router;

router.on("route:home", function(){
	welcomePage = new WelcomePage
	console.log("home route")
})


Backbone.history.start()