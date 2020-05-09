//> =================
//> iFrameHolder.js

/**
 * iFrame to contain perf-bookmarklet's diagrams
 * @type {HTMLIFrameElement}
 */
let iFrameEl;

/**
 * Holder element
 * @type {HTMLDivElement}
 */
let outputHolder;

/** @type {HTMLDivElement}  */
let outputContent;

/**
 * Holder document for perf-bookmarklet (in iFrame)
 * @type {Document}
 */
let outputIFrame;

/** setup iFrame overlay */
const initHolderEl = () => {
	// find or create holder element
	if (!outputHolder) {
		outputHolder = dom.newTag("div", { id: "perfbook-holder" });
		outputContent = dom.newTag("div", { id: "perfbook-content" });
		outputHolder.appendChild(outputContent);
	} else {
		outputContent = outputIFrame.getElementById("perfbook-content");
		//clear existing data
		while (outputContent.firstChild) {
			outputContent.removeChild(outputContent.firstChild);
		}
	}
};

let addComponent = (domEl) => {
	outputContent.appendChild(domEl);
};


const iFrameHolder =
{
	setup:
	() =>
	{
		//XX iFrameEl = document.getElementById("perfbook-iframe");

		const finalize =
		() =>
		{ 
			initHolderEl();
			onIFrameReady(addComponent);
			outputIFrame.body.appendChild(outputHolder);
			if (getComputedStyle(document.body).overflow != "hidden") {
				iFrameEl.style.height = (outputHolder.clientHeight + 36) + "px";
			} else {
				iFrameEl.style.height = "100%";
			}
		}

		const adopt_e = document.querySelector( '[data--=performance]' )    // //... document.body.appendChild(iFrameEl);
		iFrameEl = dom.newTag("iframe",
		{
			id: "perf_report_iframe",
			onload:
			() =>
			{
				outputIFrame = iFrameEl.contentWindow.document;
				finalize();
        adopt_e
          .appendChild( document.adoptNode( ( iFrameEl.contentDocument.body||iFrameEl.contentDocument ).children[0] ) )
				iFrameEl.remove()
			}
		} )
		adopt_e.appendChild(iFrameEl)
	},

	getOutputIFrame:
	() => outputIFrame,
}
