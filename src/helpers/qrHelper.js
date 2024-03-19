import { jsPDF } from "jspdf"

export function downloadQRCode(id, name) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${id}&size=500x500`

  // Fetch the QR code image
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.blob()
      } else {
        throw new Error("Network response was not ok")
      }
    })
    .then(blob => {
      // Create a URL for the blob
      const imageUrl = URL.createObjectURL(blob)

      // Create a new PDF document
      const doc = new jsPDF()

      // Calculate the aspect ratio of A4 size
      const aspectRatio = 210 / 297 // A4 dimensions: 210mm x 297mm
      const qrSize = 160 // Adjust the QR code height as needed
      const qrHeight = qrSize * aspectRatio
      
      // Calculate center position for QR code
      const qrX = (doc.internal.pageSize.width - qrSize) / 2
      const qrY = (doc.internal.pageSize.height - qrHeight) / 2

      // Add the QR code image to the PDF
      doc.addImage(imageUrl, "PNG", qrX, qrY, qrSize, qrHeight)

      // Add name below the QR code
      const nameX = qrX
      const nameY = qrY + qrHeight + 10 // Adjust the vertical spacing

      doc.text(name, nameX, nameY)

      // Save the PDF with the QR code
      doc.save("QRCode-" + name + ".pdf")

      // Revoke the object URL to free up memory
      URL.revokeObjectURL(imageUrl)
    })
}
