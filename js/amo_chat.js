document.addEventListener("DOMContentLoaded", function () {
	(function (a, m, o, c, r, m) {
		a[m] = {
			id: "423601",
			hash: "5e1245c59b2c7e42feddd8d1304e9c638a091105b38dac4610c8270c27c1ee32",
			locale: "ru",
			inline: true,
			setMeta: function (p) {
				this.params = (this.params || []).concat([p])
			}
		};
		a[o] = a[o] || function () {
			(a[o].q = a[o].q || []).push(arguments)
		};
		a[o + 'Config'] = a[o + 'Config'] || {};
		a[o + 'Config'].hidden = !0;
		var d = a.document,
			s = d.createElement('script');
		s.async = true;
		s.id = m + '_script';
		s.src = 'https://gso.amocrm.ru/js/button.js';
		d.head && d.head.appendChild(s);
	}(window, 0, 'amoSocialButton', 0, 0, 'amo_social_button'));
});
