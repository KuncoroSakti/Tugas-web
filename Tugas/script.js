function getData() {
  fetch('/data') // Mengirim permintaan GET ke endpoint '/data'
    .then(response => response.json())
    .then(data => {
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => {
      console.log('Terjadi kesalahan:', error);
    });
}