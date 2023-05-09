let pdfLink = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf";

let pdfjsLib = window["pdfjs-dist/build/pdf"];

pdfjsLib.GlobalWorkerOptions.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";

let loadingTask = pdfjsLib.getDocument(pdfLink);
loadingTask.promise.then( (pdf) => {
    console.log("PDF loaded successfully");
    
    // Fetch the first page of pdf
    let pageNumber = 1;
    
})