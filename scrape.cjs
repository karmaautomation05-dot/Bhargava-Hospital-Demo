const https = require('https');
https.get('https://bmtckanpur.com/media/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const imgs = [];
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].includes('uploads')) {
        imgs.push(match[1]);
      }
    }
    console.log("Found images:", imgs);
  });
});
