const https = require('https');
const fs = require('fs');
const path = require('path');

const newsUrls = [
  'https://bmtckanpur.com/wp-content/uploads/2020/10/99111649_277147117002329_6684065879719673856_o.jpg',
  'https://bmtckanpur.com/wp-content/uploads/2020/10/100044854_275514370498937_8031957248634781696_o.jpg',
  'https://bmtckanpur.com/wp-content/uploads/2020/10/117772076_124257869381172_4823095899291093253_o-916x1024.jpg'
];

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

const mkdirp = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const main = async () => {
  mkdirp('src/assets/news');
  mkdirp('src/assets/gallery');

  console.log('Downloading news images...');
  for (let i = 0; i < newsUrls.length; i++) {
    const url = newsUrls[i];
    const filename = `news_${i + 1}.jpg`;
    await downloadImage(url, path.join('src/assets/news', filename));
    console.log(`Downloaded ${filename}`);
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
          // Remove -150x150 thumbnail suffix to get full res
          url = url.replace(/-150x150(\.[a-zA-Z]+)$/, '$1');
          if (!imgs.includes(url)) {
            imgs.push(url);
          }
        }
      }

      console.log(`Found ${imgs.length} gallery images. Downloading...`);
      for (let i = 0; i < imgs.length; i++) {
        const url = imgs[i];
        let ext = url.split('.').pop() || 'jpg';
        if (ext.length > 4) ext = 'jpg';
        const filename = `gallery_${i + 1}.${ext}`;
        await downloadImage(url, path.join('src/assets/gallery', filename));
        console.log(`Downloaded ${filename}`);
      }
      console.log('All downloads complete!');
    });
  });
};

main();
