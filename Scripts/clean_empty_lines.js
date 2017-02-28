/**
 * Removes all whitespace from lines that are empty
 */

action.performWithContext = function(context, outError) {
	var bounds = new Range(0, context.string.length),
		text = context.string.replace(/^[ \t]+(\r\n|\r|\n|$)/mg, '$1');
	if (text.length < context.string.length) {
		var recipe = new CETextRecipe();
		
		recipe.replaceRange(bounds, text);
		
		return context.applyTextRecipe(recipe);
	}
	return false;
};
