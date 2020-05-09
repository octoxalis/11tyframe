//> =================
//> legends.js


const legendComponent = {};


const createLegend =
(className, title, dlArray) =>
{
	const legendHolder = dom.newTag("div", { class : "legend-holder" });
	legendHolder.appendChild(dom.newTag("h4", { text : title }));


	const ul = dom.newTag("ul", { class : "legend_color " + className });
	dlArray.forEach((definition) => {
		ul.appendChild(dom.newTag("li", { title: definition[0], style:'background-color:' + definition[1]  })); 
	});
	legendHolder.appendChild(ul);
	return legendHolder;
};


//Legend
legendComponent.init =
() =>
{
	const chartHolder = dom.newTag("section", { class : "resource-timing chart-holder" });
	chartHolder.appendChild(dom.newTag("h3", { text : "Legend" }));
	const legendsHolder = dom.newTag("div", { class : "legends-group " });

	legendsHolder.appendChild(createLegend("initiator-type-legend", "Initiator Type", [
		["link", "#6bc7b8"],
		["font", "#6ba8c7"],
		["stylesheet", "#6b7ac7"],
		["JavaScript", "#8a6bc7"],
		["iframe", "#b86bc7"],
		["img", "#c78a6b"],
		//["swf", "#4db3ba"],
		["xmlhttprequest", "#c76b8a"]
	]));

	legendsHolder.appendChild(createLegend("navigation-legend", "Navigation Timing", [
		["Redirect", "#e25336"],  // #ffff60
		["App Cache","#e2a936"],
		["DNS Lookup", "#c5e236"],
		["TCP","#36e253"],
		["SSL Negotiation","#36c5e2"],
		["Time to First Byte", "#366fe2"],
		["Content Download", "#9f8fef"],
		["DOM Processing", "#bc63e9"],
		["DOM Content Loaded", "#e236c5"],
		["On Load", "#e2366f"]
	]));

	legendsHolder.appendChild(createLegend("resource-legend", "Resource Timing", [
		["Stalled/Blocking", "#ff3344"],
		["Redirect", "#e25336"],  // #ffff60
		["App Cache","#e2a936"],
		["DNS Lookup", "#c5e236"],
		["TCP","#36e253"],
		["SSL Negotiation","#36c5e2"],
		["Initial Connection (TCP)", "#36e253"],
		["Time to First Byte", "#366fe2"],
		["Content Download", "#9f8fef"]
	]));

	chartHolder.appendChild(legendsHolder);

	return chartHolder;
};
