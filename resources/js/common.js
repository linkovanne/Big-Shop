// A...
let Ajax = {
	csrf: function () {
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
			}
		});
	},
};

let Action = {
	links: function () {
		let self = this;
		$('.js-prevent').click(function (e) {
			self.prevent(e);
		});
	},
	prevent: function (event) {
		event.preventDefault();
	},
};

let Footer = {
	DEF: {
		object: '.footer',
		fixed: 'footer_attached-bottom',
	},
	object: null,
	fixed: null,
	init: function () {
		this.object = $(this.DEF.object);
		this.fixed = this.DEF.fixed;
		return this.object.length == true;
	},
	fix: function (timeout) {
		let self = this;
		timeout = timeout == undefined ? 100 : timeout;

		if(!self.init()) {
			return false;
		}
		setTimeout(function () {
			let screen = $(window).innerHeight();
			let height = self.object.outerHeight();
			let body = self.object.offset().top + height;
			if(body <= screen) {
				self.object.addClass(self.fixed);
			}
		}, timeout);
	},
};

