// Image preview and saving athlete details
function previewImage() {
    const file = document.getElementById('athlete-image').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('athlete-image-preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
  }
  
  function saveAthleteDetails() {
    const name = document.getElementById('athlete-name').value;
    const age = document.getElementById('athlete-age').value;
    const height = document.getElementById('athlete-height').value;
    const sport = document.getElementById('athlete-sport').value;
    const achievements = document.getElementById('athlete-achievements').value;
    const address = document.getElementById('athlete-address').value;
    const phone = document.getElementById('athlete-phone').value;
  
    if (!name || !age || !height || !sport || !achievements || !address || !phone) {
        alert('Please fill out all fields.');
        return;
    }
  
    document.getElementById('athlete-success-message').textContent = 'Athlete details saved successfully!';
  }
  