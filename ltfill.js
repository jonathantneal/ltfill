// polyfill list titles
export function observe(scope, rawtag) {
	const tag = rawtag ? rawtag.toLowerCase() : 'x-lt';

	// polyfill existing list titles
	[].forEach.call(
		scope.getElementsByTagName(tag),
		polyfillListTitle
	);

	// polyfill new list titles
	(new MutationObserver(
		(mutations) => mutations.forEach(
			(mutation) => {
				[].forEach.call(
					mutation.addedNodes,
					(node) => {
						if (tag === node.nodeName.toLowerCase()) {
							polyfillListTitle(node);
						} else if (node.getElementsByTagName) {
							[].forEach.call(
								node.getElementsByTagName(tag),
								polyfillListTitle
							);
						}
					}
				);
			}
		)
	)).observe(
		scope,
		{
			childList: true,
			subtree: true
		}
	);

	// polyfill a list title
	function polyfillListTitle(lt) {
		if (!lt.hasAttribute('aria-hidden')) {
			lt.setAttribute('aria-hidden', true);
		}

		const parent = lt.parentNode;

		if (parent) {
			// if the parent is a list and does not already contain the aria-labelledby attribute
			if (/^(DL|MENU|OL|UL)$/.test(parent.nodeName) && !parent.hasAttribute('aria-labelledby')) {
				if (!lt.hasAttribute('id')) {
					lt.id = `__ltfill${ ++uuid }`;
				}

				// set aria-labelledby on the list title parent
				parent.setAttribute('aria-labelledby', lt.id);

				// save the list title parent as a property of the list title
				lt.__ltfillParent = parent;
			}
		} else if (lt.__ltfillParent) {
			// conditionally remove the aria-labelledby attribute on the list title parent
			lt.__ltfillParent.removeAttribute('aria-labelledby');
		}
	}

}

// style list titles
export function style(scope, rawtag, cssText) {
	const tag = rawtag ? rawtag.toLowerCase() : 'x-lt';

	if (scope.querySelector('style#ltfill-style')) {
		return;
	}

	const ltstyle = document.createElement('style');

	ltstyle.setAttribute('id', 'ltfill-style');

	ltstyle.textContent = `${ tag }{${ cssText || 'display:block;font-weight:bold' }}`;

	scope.appendChild(ltstyle);
}

// list title unique id
let uuid = -1;
