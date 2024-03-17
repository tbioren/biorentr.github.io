function downloadResume(f) {
    const element = document.createElement('foo');
    element.setAttribute('download', f);
    document.body.apppendChild(element);
    element.click();
    document.body.removeChild(element);
}

function main() {
    document.getElementById("downloadButton").onclick = () => {
        downloadResume("ThomasBiorenResume.pdf");
    }
}

main();