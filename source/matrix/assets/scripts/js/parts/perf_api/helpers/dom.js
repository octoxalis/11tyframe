//> =================
//> dom.js

const dom = {}
/**
 * @param  {string} text
 * @returns {Text}
 */
dom.newTextNode = (text) => {
	return document.createTextNode(text);
};



/**
 * creats a html tag
 *
 * @param  {string} tagName
 * @param  {Object} settings
 * @param  {string} css
 * @return {HTMLElement} new HTMLElement tag
 */
dom.newTag = (tagName, settings, css) => {
	settings = settings || {};
	const tag = document.createElement(tagName);
	for(let attr in settings){
		if(attr != "text"){
			tag[attr] = settings[attr];
		}
	}
	if(settings.text){
		tag.textContent = settings.text;
	}else if(settings.childElement){
		if(typeof settings.childElement === "object"){
			//if childNodes NodeList is passed in
			if(settings.childElement instanceof NodeList){
				//NodeList is does not inherit from array
				Array.prototype.slice.call(settings.childElement,0).forEach((childNode) => {
					tag.appendChild(childNode);
				});
			}else{
				tag.appendChild(settings.childElement);
			}
		}else{
			tag.appendChild(dom.newTextNode(settings.childElement));
		}
	}
	if(settings.class){
		tag.className = settings.class;
	}
	if ( css ) tag.style.cssText = css;
	return tag;
};

/**
 * Helper to create a table
 *
 * @param  {string} id - id of holder
 * @param  {function} headerBuilder
 * @param  {function} rowBuilder
 * @returns {HTMLDivElement} `table` wrapped in a holder `div`
 */
dom.tableFactory = (id, headerBuilder, rowBuilder) => {
	const tableHolder = dom.newTag("div", {
		id : id || "",
		class : "table-holder"
	});
	const table = dom.newTag("table");
	const thead = dom.newTag("thead");

	thead.appendChild(headerBuilder(dom.newTag("tr")));
	table.appendChild(thead);
	table.appendChild(rowBuilder(dom.newTag("tbody")));
	tableHolder.appendChild(table);
	return tableHolder;
};

/**
 * Combines 2 nodes into a wrapper `div`
 *
 * @param  {Element|string} a - fist node
 * @param  {Element|string} b - second node
 * @returns {HTMLDivElement}
 */
dom.combineNodes = (a, b) => {
	const wrapper = document.createElement("div");
	if(typeof a === "object"){
		wrapper.appendChild(a);
	}else if(typeof a === "string"){
		wrapper.appendChild(dom.newTextNode(a));
	}
	if(typeof b === "object"){
		wrapper.appendChild(b);
	}else if(typeof b === "string"){
		wrapper.appendChild(dom.newTextNode(b));
	}
	return wrapper.childNodes;
};

/**
 * Adds CSS classname to `el`
 *
 * @param  {HTMLElement} el
 * @param  {string} className
 * @returns {HTMLElement} returns `el` again for chaining
 */
dom.addClass = (el, className) => {
	el.classList.add(className);
	return el;
};

/**
 * Removes CSS classname from `el`
 *
 * @param  {HTMLElement} el
 * @param  {string} className
 * @returns {HTMLElement} returns `el` again for chaining
 */
dom.removeClass = (el, className) => {
  el.classList.remove(className);
	return el;
};
