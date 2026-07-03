import urllib.request
import re

url = 'https://bmtckanpur.com/blogs/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Extract articles
    titles = re.findall(r'<h[1-6][^>]*class="[^"]*title[^"]*"[^>]*>(.*?)</h[1-6]>', html, re.DOTALL | re.IGNORECASE)
    images = re.findall(r'<div class="elementor-post__thumbnail">\s*<a[^>]*>\s*<img[^>]*src="([^"]+)"', html, re.DOTALL | re.IGNORECASE)
    excerpts = re.findall(r'<div class="elementor-post__excerpt">\s*<p>(.*?)</p>', html, re.DOTALL | re.IGNORECASE)
    dates = re.findall(r'<span class="elementor-post-date">\s*(.*?)\s*</span>', html, re.DOTALL | re.IGNORECASE)
    
    # Limit to 15
    titles = titles[:15]
    
    for i in range(len(titles)):
        print(f"BLOG {i+1}:")
        print(f"Title: {re.sub('<[^<]+?>', '', titles[i]).strip() if i < len(titles) else ''}")
        print(f"Date: {dates[i].strip() if i < len(dates) else ''}")
        print(f"Image: {images[i].strip() if i < len(images) else ''}")
        print(f"Excerpt: {re.sub('<[^<]+?>', '', excerpts[i]).strip() if i < len(excerpts) else ''}")
        print("-" * 40)
except Exception as e:
    print('Error:', e)
