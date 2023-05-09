let pdfLink = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf";

let pdfjsLib = window["pdfjs-dist/build/pdf"];

pdfjsLib.GlobalWorkerOptions.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";

let loadingTask = pdfjsLib.getDocument(pdfLink);
loadingTask.promise.then( (pdf) => {
    console.log("PDF loaded successfully");
    
    // Fetch the first page of pdf
    let pageNumber = 1;
    pdf.getPage(pageNumber).then( (page) => {
        console.log("Page loaded successfully");
        let scale = 2;
        let viewport = page.getViewport({scale});

        // Preparing canvas usign pdfjs dimentions
        let canva = document.getElementById("the-canvas");
        let context = canva.getContext("2d");
        canva.height = viewport.height;
        canva.width = viewport.width;

        // Render pdf in canva context

        let renderContext = {
            canvasContet: context,
            viewport,
        }

        let renderTask = page.render(renderContext);
        renderTask.promise.then(() => console.log("Task rendered successfully"));
    });
},
(error) => {
    // PDF Loading Error
    console.log("PDF Loading Error");
});