//> =================
//> svg.js

const svg = {}

/**
 * Create new SVG element
 *
 * @param  {string} tagName
 * @param  {Object} settings
 * @param  {string} css
 */
svg.newEl = (tagName, settings, css) => {
	const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
	settings = settings || {};
	for(let attr in settings) if(attr != "text") el.setAttribute(attr, settings[attr]);
	el.textContent = settings.text||"";
	if ( css ) el.style.cssText = css
	return el;
};


/**
 * Creates a new SVG `text` element
 *
 * @param  {string} text
 * @param  {number} y
 * @param  {string} css
 * @returns {SVGTextElement}
 */
svg.newTextEl = (text, y, css) => {
	return svg.newEl("text", {
			fill : "#111",
			y : y,
			text : text
		}, (css||""))
};

/**
 * Calculates the with of a SVG `text` element
 *
 * _needs access to iFrame, since width depends on context_
 *
 * @param  {SVGTextElement} textNode
 * @returns {number} width of `textNode`
 */
svg.getNodeTextWidth = (textNode) => {
	const tmp = svg.newEl("svg", {}, "visibility:hidden;");    // EDITED svg:svg
	tmp.appendChild(textNode);
	iFrameHolder.getOutputIFrame().body.appendChild(tmp);

	const nodeWidth = textNode.getBBox().width;
	tmp.parentNode.removeChild(tmp);
	return nodeWidth;
};
