//> =================
//> init.js

const onIFrameReady =
(addComponentFn) =>
{
	[
		summaryTilesComponent.init(),
		navigationTimelineComponent.init(),
		pieChartComponent.init(),
		tableComponent.init(),
		resourcesTimelineComponent.init(),
		legendComponent.init(),
		pageMetricComponent.init()
	].forEach((componentBody) => {addComponentFn(componentBody) })
}

iFrameHolder.setup();
