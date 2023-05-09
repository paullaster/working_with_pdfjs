const initPDF = () => {
  const pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

  pdfjsLib.getDocument("sample2.pdf").promise.then((pdfDoc) => {
    let pages = pdfDoc._pdfInfo.numPages;
    for (let i = 0; i < pages; i++) {
      pdfDoc.getPage(1).then((page) => {
        const canvas = document.createElement("canvas");
        const canvasContext = canvas.getContext("2d");
        const viewPort = page.getViewport({scale: 2});
        canvas.height = viewPort.height;
        canvas.width = viewPort.width;
  
        document.getElementById("pdfViewer").appendChild(canvas);
        page.render({
          canvasContext,
          viewport: viewPort,
        });
        console.log(viewPort)
        console.log(page);
      }).catch((error) => {
        console.log(error);
      });
    }
   
  
  }).catch((err) => {
    console.error(err);
  });
};

initPDF()