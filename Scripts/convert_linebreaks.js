/**
 * Converts all linebreaks in the document to the chosen type
 */

action.performWithContext = function(context, outError) {
	// Default to Unix
	var type = 'unix';
	if (typeof action.setup.type !== 'undefined') {
		type = action.setup.type.toLowerCase();
	}
	var target, replacement;
	if (type === 'unix') {
		target = /(?:\r\n|\r)/g;
		replacement = '\n';
	} else if (type === 'mac') {
		target = /(?:\r\n|\n)/g;
		replacement = '\r';
	} else if (type === 'windows') {
		target = /(?:\r|\n)/g;
		replacement = '\r\n';
	}
	var bounds = new Range(0, context.string.length);
	var text = context.string.replace(target, replacement);
	var recipe = new CETextRecipe();
	recipe.replaceRange(bounds, text);
	return context.applyTextRecipe(recipe);
};