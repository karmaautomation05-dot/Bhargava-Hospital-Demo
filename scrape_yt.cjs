const https = require('https');

https.get('https://bmtckanpur.com/patient-testimonials/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const ytRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;
    let match;
    const ids = new Set();
    while ((match = ytRegex.exec(data)) !== null) {
      ids.add(match[1]);
    }
    console.log("YouTube Video IDs found:", Array.from(ids));
  });
});
