const initPDF = () => {
  const pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  pdfjsLib.getDocument("sample.pdf").promise.then( (pdfDoc) => {
    console.log(pdfDoc);
  }).catch((err) => {
    console.error(err);
  });
};

initPDF()