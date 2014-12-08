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


var AboutView = Backbone.View.extend({
	tagName: "div",
	attributes: {
		class: "about",
		display: "none"
	},
	template: _.template($("#about").html() ),
	initialize: function(){
		this.render()
	},
	render: function(){
		var about = this.$el.html( this.template )
		$("div.container").append(about)
		about.fadeIn("slow")
	}
})

var WorkView = Backbone.View.extend({
	tagName: "div",
	attributes: {
		class: "work"
	},
	template: _.template($("#workView").html() ),
	initialize: function(){
		this.render()
	},
	render: function(){
		var work = this.$el.html( this.template )
		$("div.container").append(work)
		work.fadeIn("slow")
	}
})

// var SkillsView = Backbone.View.extend({
// 	tagName: "div",
// 	attributes: {
// 		class: "skills"
// 	},
// 	template: _.template($("#skillsView").html() ),
// 	initialize: function(){
// 		this.render()
// 	},
// 	render: function(){
// 		var skills = this.$el.html( this.template )
// 		$("div.container").append(skills)
// 		skills.fadeIn("slow")
// 	}
// })

// Router
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"work":"work",
		"about":"about",
	}
})
var router = new Router;

router.on("route:home", function(){
	if ($(".about") != [] || $(".about")[0] != undefined && $(".about")[0].style.display == "none"){
		$(".about").fadeOut("fast")
		$("nav ul li:nth-child(2)").first().children().removeClass("active")
	}
	if ($(".work") != [] || $(".work")[0] != undefined && $(".work")[0].style.display == "none"){
		$(".work").fadeOut("fast")
		$("nav ul li:nth-child(1)").first().children().removeClass("active")
	}


	if ($(".welcome") == [] || $(".welcome")[0] != undefined && $(".welcome")[0].style.display == "none") {
		$(".welcome").fadeIn("slow")
		$("nav ul li:nth-child(3)").first().children().addClass("active")
	} else {
		welcomePage = new WelcomePage
		$("nav ul li:nth-child(3)").first().children().addClass("active")
	}
})

router.on("route:work", function(){
	if ($(".welcome") != [] || $(".welcome")[0] != undefined && $(".welcome")[0].style.display == "none"){
		$(".welcome").fadeOut("fast")
		$("nav ul li:nth-child(3)").first().children().removeClass("active")
	}
	if ($(".about") != [] || $(".about")[0] != undefined && $(".about")[0].style.display == "none"){
		$(".about").fadeOut("fast")
		$("nav ul li:nth-child(2)").first().children().removeClass("active")
	}



	if ($(".work") == [] || $(".work")[0] != undefined && $(".work")[0].style.display == "none") {
		$(".work").fadeIn("slow")
		$("nav ul li:nth-child(1)").first().children().addClass("active")
	} else {
		var workView = new WorkView
		$("nav ul li:nth-child(1)").first().children().addClass("active")
	}

})



router.on("route:about", function(){
	if ($(".welcome") != [] || $(".welcome")[0] != undefined && $(".welcome")[0].style.display == "none"){
		$(".welcome").fadeOut("fast")
		$("nav ul li:nth-child(3)").first().children().removeClass("active")
	}
	if ($(".work") != [] || $(".work")[0] != undefined && $(".work")[0].style.display == "none"){
		$(".work").fadeOut("fast")
		$("nav ul li:nth-child(1)").first().children().removeClass("active")
	}



	if ($(".about") == [] || $(".about")[0] != undefined && $(".about")[0].style.display == "none") {
		$(".about").fadeIn("slow")
		$("nav ul li:nth-child(2)").first().children().addClass("active")
	} else {
		var aboutView = new AboutView
		$("nav ul li:nth-child(2)").first().children().addClass("active")
	}
	
})





Backbone.history.start()