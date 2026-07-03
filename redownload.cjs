const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to get ${url} (${res.statusCode})`);
        res.resume();
        return resolve();
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      fs.unlink(dest, () => reject(err));
    });
  });
};

const main = async () => {
  const dir = 'src/assets/gallery';
  // clear directory
  const files = fs.readdirSync(dir);
  for (const file of files) {
    fs.unlinkSync(path.join(dir, file));
  }

  console.log('Fetching gallery links...');
  https.get('https://bmtckanpur.com/photos/', (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', async () => {
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      let match;
      const imgs = [];
      while ((match = imgRegex.exec(data)) !== null) {
        let url = match[1];
        if (url.includes('uploads') && !url.includes('logo')) {
          url = url.replace(/-150x150(\.[a-zA-Z]+)$/, '$1');
          if (!imgs.includes(url)) {
            imgs.push(url);
          }
        }
      }

      console.log(`Found ${imgs.length} gallery images. Downloading...`);
      for (let i = 0; i < imgs.length; i++) {
        const url = imgs[i];
        const filename = url.split('/').pop();
        await downloadImage(url, path.join(dir, filename));
        console.log(`Downloaded ${filename}`);
      }
      console.log('All downloads complete!');
    });
  });
};

main();
