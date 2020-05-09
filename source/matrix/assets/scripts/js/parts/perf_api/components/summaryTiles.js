//> =================
//> summaryTiles.js


const summaryTilesComponent = {};

	summaryTilesComponent.init = function () {

		var createTile = function createTile(title, value) {
			let titleClass = ( typeof title === 'string' ) && ( title.includes( 'Requests' ) || title.includes( 'Domains' ) || title.includes( 'Subdomains' ) ) ? 'request_tile' : 'time_tile'
			if ( typeof title === 'string'  && title === 'TOTAL' ) titleClass = 'total_tile'
			var dl = dom.newTag("dl", { "class": "summary-tile " + titleClass});
			dl.appendChild(dom.newTag("dt", { childElement: title }));
			dl.appendChild(dom.newTag("dd", { childElement: value }));
			return dl;
		};
	
	const createAppendixDefValue = (a, definition, value) => {
		a.appendChild(dom.newTag("dt", {childElement : definition}));
		a.appendChild(dom.newTag("dd", {text : value}));
	};

	const tilesHolder = dom.newTag("section", {
		class : "tiles-holder chart-holder"
	});
	const appendix = dom.newTag("dl", {
		class : "summary-tile-appendix"
	});

	[
		createTile("Domains", data.requestsByDomain.length || "0"),
	  createTile("Subdomains", data.hostSubdomains || "0"),
		createTile("Requests", data.requestsOnly.length || "0"),
	  createTile("Requests to Host", data.hostRequests || "0"),
		createTile("Requests to Top & Subdomains", data.currAndSubdomainRequests || "0"),
		
	  createTile("Time to First Byte", data.perfTiming.responseStart - data.perfTiming.navigationStart),
	  createTile(dom.newTag("span", { text: "DOM Content Loading", title: "domLoading to domContentLoadedEventStart" }), data.perfTiming.domContentLoadedEventStart - data.perfTiming.domLoading),
	  createTile(dom.newTag("span", { text: "DOM Processing", title: "domLoading to loadEventStart" }), data.perfTiming.domComplete - data.perfTiming.domLoading),
	  createTile("TOTAL", data.perfTiming.loadEventEnd - data.perfTiming.navigationStart)
].forEach(tile => {
		tilesHolder.appendChild(tile);
	});

	if (data.allResourcesCalc.length > 0) {
		tilesHolder.appendChild(createTile(dom.newTag("span", { title: data.slowestCalls[0].name, text: "Slowest Call" }), Math.floor(data.slowestCalls[0].duration) ));
		tilesHolder.appendChild(createTile("Average Call", data.average));
	}

	createAppendixDefValue(appendix, dom.newTextNode("Top Level Domain", location.host.split(".").slice(-2).join(".")));
	createAppendixDefValue(appendix, dom.newTextNode("host"), location.host);
	createAppendixDefValue(appendix, dom.newTextNode("document domain"), document.domain);
	
	var connection = navigator.connection;
	if (connection) {
		createAppendixDefValue(appendix, dom.newTextNode("Navigator connection"), "");
		for (var key in connection) {
			var value = connection[key];
			if (value && typeof value != "function") {
				createAppendixDefValue(appendix, dom.newTextNode(key), value);
			}
		}
	}
	tilesHolder.appendChild(appendix);
	return tilesHolder;
};
