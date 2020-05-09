//> =================
//> tableLogger.js
//> logger.js


const tableLogger = {};

tableLogger.logTable = (table) => {
	if(table.data.length > 0 && console.table){
		console.log("\n\n\n" + table.name + ":");
		console.table(table.data, table.columns);
	}
};

tableLogger.logTables = (tableArr) => {
	tableArr.forEach(tableLogger.logTable);
};


tableLogger.logTable({
	name : "All loaded resources",
	data : data.allResourcesCalc,
	columns : [
			"name",
			"domain",
			"fileType",
			"initiatorType",
			"fileExtension",
			"loadtime",
			"isRequestToHost",
			"requestStartDelay",
			"dns",
			"tcp",
			"ttfb",
			"requestDuration",
			"ssl"
		]
});

tableLogger.logTables([
	{
		name : "Requests by domain",
		data : data.requestsByDomain
	},
	{
		name : "Requests by Initiator Type",
		data : data.initiatorTypeCounts,
		columns : ["initiatorType", "count", "perc"]
	},
	{
		name : "Requests by Initiator Type (host/external domain)",
		data : data.initiatorTypeCountHostExt,
		columns : ["initiatorType", "count", "perc"]
	},
	{
		name : "Requests by File Type",
		data : data.fileTypeCounts,
		columns : ["fileType", "count", "perc"]
	}
]);
