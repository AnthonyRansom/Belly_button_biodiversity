// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples
    // Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = data.metadata.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
    var samplesResults = samplesArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadataResults = metadataArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var samplesOTUID = samplesResults.otu_ids;
    var samplesValues = samplesResults.sample_values;
    var samplesLabels = samplesResults.otu_labels;

    // 3. Create a variable that holds the washing frequency.
    var wfreqFloat = parseFloat(metadataResults.wfreq);

    // Create the yticks for the bar chart.
    var yticks = samplesOTUID.slice(0,10).reverse().map(otuid => `OTU ${otuid}`);

    // Use Plotly to plot the bar data and layout.
    var barData = [{
      x: samplesValues.slice(0,10).reverse(),
      y: yticks,
      text: samplesLabels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    // Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };
    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
