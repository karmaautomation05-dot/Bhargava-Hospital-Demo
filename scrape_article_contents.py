import urllib.request
import json
from bs4 import BeautifulSoup
from markdownify import markdownify as md

urls = [
    'https://bmtckanpur.com/slip-disc-vs-muscle-spasm-how-doctors-tell-the-difference/',
    'https://bmtckanpur.com/c-section-recovery-what-to-expect-in-the-first-6-weeks/',
    'https://bmtckanpur.com/ive-been-diagnosed-with-arthritis-what-should-i-do-first/',
    'https://bmtckanpur.com/pcos-and-high-risk-pregnancy-what-to-expect-2/',
    'https://bmtckanpur.com/what-to-do-after-knee-replacement-surgery-a-day-by-day-recovery-guide/',
    'https://bmtckanpur.com/can-pcos-be-cured-what-doctors-actually-say/',
    'https://bmtckanpur.com/spinal-cord-injury-after-accident-what-doctors-do-first/',
    'https://bmtckanpur.com/pcos-and-mental-health-anxiety-depression-mood-swings/',
    'https://bmtckanpur.com/how-to-choose-the-right-orthopedic-hospital-7-questions-to-ask/',
    'https://bmtckanpur.com/postpartum-back-pain-recovery-and-orthopedic-care/',
    'https://bmtckanpur.com/arthritis-in-young-people-yes-it-can-happen-at-30/',
    'https://bmtckanpur.com/pcos-and-high-risk-pregnancy-what-to-expect/',
    'https://bmtckanpur.com/cervical-cancer/',
    'https://bmtckanpur.com/long-life-knee-replacement/',
    'https://bmtckanpur.com/breast-cancer/'
]

results = []

for i, url in enumerate(urls):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        
        # Strip out elements we don't want like author bio boxes or social shares if they exist
        for elm in soup.find_all(class_=['elementor-share-buttons', 'author-box', 'post-tags']):
            elm.decompose()
            
        # Find the main content div
        content_div = soup.find('div', {'data-widget_type': 'theme-post-content.default'})
        if not content_div:
            content_div = soup.find('div', class_='elementor-widget-theme-post-content')
        if not content_div:
            content_div = soup.find('div', class_='entry-content')
            
        if content_div:
            raw_html = str(content_div)
            # Convert to markdown, ensuring good formatting
            markdown_text = md(raw_html, heading_style="ATX", bullet_style="-", strong_em_symbol="**").strip()
            
            # Clean up excessive newlines
            import re
            markdown_text = re.sub(r'\n{3,}', '\n\n', markdown_text)
            # Remove any trailing "developed by" text that got caught
            markdown_text = re.sub(r'\u00a9.*Growth Per Hour.*', '', markdown_text, flags=re.IGNORECASE).strip()
            
        else:
            markdown_text = "Content not found."
            
        results.append({
            "id": i + 1,
            "content": markdown_text
        })
        print(f"Scraped properly {url}")
        
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        results.append({
            "id": i + 1,
            "content": ""
        })

with open('scraped_article_content_formatted.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=4)
