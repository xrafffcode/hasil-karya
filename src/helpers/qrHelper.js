export function downloadQRCode(id) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${id}&size=500x500`

  const win = window.open(url, '_blank')

  if (win) {
    win.focus()
  } else {
    alert('Please allow popups for this website')
  }

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.blob()
      } else {
        throw new Error('Network response was not ok')
      }
    })
    .then(blob => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.href = url
      a.download = 'qr-code-' + id + '.png'
      a.click()

      URL.revokeObjectURL(url)
    })

  win.close()
}
