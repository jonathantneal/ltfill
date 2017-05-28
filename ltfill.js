// polyfill the selective dom scope
export function observe(scope) {
	// update any pre-existing list titles
	Array.prototype.forEach.call(
		scope.querySelectorAll('lt'),
		updateListTitle
	);

	// watch for and update list titles
	(new MutationObserver(
		(mutations) => mutations.forEach(
			(mutation) => Array.prototype.filter.call(
				[].concat(
					mutation.addedNodes, mutation.removedNodes
				),
				(node) => /^lt$/i.test(node.nodeName)
			).forEach(updateListTitle)
		)
	)).observe(
		scope,
		{
			childList: true,
			subtree: true
		}
	);
}

export function style(scope, cssText) {
	if (scope.querySelector('style#ltfill-style')) {
		return;
	}

	const ltstyle = document.createElement('style');

	ltstyle.setAttribute('id', 'ltfill-style');

	ltstyle.textContent = `lt{${cssText || 'display:block;font-weight:bold'}}`;

	scope.appendChild(ltstyle);
}

// list title unique id
let uuid = -1;

// update a list title
function updateListTitle(lt) {
	const parent = lt.parentNode;

	if (parent) {
		// if the parent is a list and does not already contain an aria-labelledby attribute
		if (/^(DL|MENU|OL|UL)$/.test(parent.nodeName) && !parent.hasAttribute('aria-labelledby')) {
			if (!lt.hasAttribute('id')) {
				lt.id = `__ltfill${++uuid}`;
			}

			// set aria-labelledby on the list title parent
			parent.setAttribute('aria-labelledby', lt.id);

			// save the list title parent as a property of the list title
			lt.__ltfillParent = parent;
		}
	} else if (lt.__ltfillParent) {
		// conditionally remove aria-labelledby on the list title parent
		lt.__ltfillParent.removeAttribute('aria-labelledby');
	}
}
