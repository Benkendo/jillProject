// Specify the URL of your PDF file
const pdfUrl ='/home/benard/project 24th/Jill/OnlineLibrary/src/pdf_container.js';

// Fetch the PDF file
const loadingTask = pdfjsLib.getDocument (pdfUrl);

loadingTask.promise.then (function (pdf) {
  // Render the PDF using PDF.js
  pdf.getPage (1).then (function (page) {
    const scale = 1.5;
    const viewport = page.getViewport ({scale: scale});

    // Prepare canvas using PDF.js
    const canvas = document.createElement ('canvas');
    const context = canvas.getContext ('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Append canvas to the div
    document.getElementById ('pdfViewer').appendChild (canvas);

    // Render PDF page into canvas
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    page.render (renderContext);
  });
});
