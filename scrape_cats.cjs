const https = require('https');

https.get('https://bmtckanpur.com/photos/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    // We want to find headings or text that acts as categories.
    // Usually these are h2, h3, h4 tags.
    const h3Regex = /<h3[^>]*>(.*?)<\/h3>/g;
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/g;
    const h4Regex = /<h4[^>]*>(.*?)<\/h4>/g;
    
    let match;
    console.log("H2s:");
    while ((match = h2Regex.exec(data)) !== null) console.log(match[1]);
    console.log("H3s:");
    while ((match = h3Regex.exec(data)) !== null) console.log(match[1]);
    console.log("H4s:");
    while ((match = h4Regex.exec(data)) !== null) console.log(match[1]);
  });
});
