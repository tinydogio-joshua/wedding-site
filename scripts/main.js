function streamCheck() {
  console.log('Checking for stream...');

  $.ajax({
    cache: false,
    url: './data.json',
    dataType: 'json',
    success: function(data) {
      if (data.video) {
        window.location = data.video;
      } else {
        console.log('Video NOT Found :-(');
      }
    }
  });
}

setInterval(streamCheck, 5000);
streamCheck();
