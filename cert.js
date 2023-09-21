// Get the "Download Certificate" link element
const downloadButton = document.getElementById("downloadCertificate");

// Add a click event listener to trigger the download
downloadButton.addEventListener("click", () => {
    // Get the image source URL
    const imageUrl = "cert.jpg"; // Replace with the actual image URL

    // Create an anchor element for the download
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = "certificate.png"; // Specify the desired file name

    // Trigger a click event on the anchor element to start the download
    downloadLink.click();
});
