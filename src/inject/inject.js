chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Anno will change all text elements with BCE -> BC and CE -> AD");

		elementIterator(textElementTypes);
	}
	}, 10);
});

var textElementTypes = [
	'p',
	'b',
	'strong',
	'h1',
	'h2',
	'h3',
	'h4',
];

var elementIterator = function (list) {
	list.forEach(element => {
		const foundElements = document.querySelectorAll(element);
		foundElements.forEach((el) => {
			el = replaceText(el);
		});
	});
};

var replaceText = function (el) {
	if (el.textContent.includes('BCE')) {
		// console.log(`before changing: ${el.textContent}`);
		el.textContent = el.textContent.replace('BCE', 'BC');
		// console.log(`AFTER CHANGE: ${el.textContent}`);
	}
	if (el.textContent.includes('CE')) {
		// console.log(`before changing: ${el.textContent}`);
		el.textContent = el.textContent.replace('CE', 'AD');
		// console.log(`AFTER CHANGE: ${el.textContent}`);
	}
	return el;
}
