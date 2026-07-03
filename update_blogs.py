import json
import re

with open('scraped_article_content_formatted.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# We need to inject this content into our src/data/blogs.ts file
with open('src/data/blogs.ts', 'r', encoding='utf-8') as f:
    blogs_ts = f.read()

for item in data:
    if not item['content']: continue
    
    # Escape backticks in content and replace single quotes properly if needed
    # (Replacing single quote isn't strictly necessary since we use backticks for the template literal)
    # But we MUST escape backticks and ${}
    content_safe = item['content'].replace('`', '\\`').replace('${', '\\${')
    
    # The regex looks for: id: X, ... content: `...`
    pattern = r'(id:\s*' + str(item['id']) + r',.*?content:\s*`)(.*?)(`\s*\n\s*})'
    
    # We use a function to avoid backslash escaping issues in replacement string
    def repl(m):
        return m.group(1) + '\n' + content_safe + '\n    ' + m.group(3)
        
    blogs_ts, count = re.subn(pattern, repl, blogs_ts, flags=re.DOTALL)
    print(f"Replaced {count} times for ID {item['id']}")

with open('src/data/blogs.ts', 'w', encoding='utf-8') as f:
    f.write(blogs_ts)

print('Updated blogs.ts successfully')
