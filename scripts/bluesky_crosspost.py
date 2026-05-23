import os
import re
import sys
from datetime import datetime
from atproto import Client, client_utils

def get_latest_post(posts_dir):
    posts = [f for f in os.listdir(posts_dir) if f.endswith('.md') or f.endswith('.markdown')]
    if not posts:
        return None
    # Jekyll posts follow YYYY-MM-DD-title.md
    posts.sort(reverse=True)
    return os.path.join(posts_dir, posts[0])

def parse_post(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title from YAML frontmatter
    title_match = re.search(r'^title:\s*["\']?(.*?)["\']?\s*$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else "New Post"
    
    # Extract date from filename (YYYY-MM-DD)
    filename = os.path.basename(file_path)
    date_match = re.search(r'^(\d{4}-\d{2}-\d{2})', filename)
    date_str = date_match.group(1) if date_match else datetime.now().strftime('%Y-%m-%d')
    
    # Construct URL (assumes permalink style /YYYY/MM/DD/title.html or similar)
    slug = filename[11:].replace('.md', '').replace('.markdown', '')
    url = f"https://www.sremington.com/{date_str.replace('-', '/')}/{slug}/"
    
    return title, url

def main():
    bsky_handle = os.environ.get('BSKY_HANDLE')
    bsky_password = os.environ.get('BSKY_PASSWORD')
    posts_dir = os.path.join(os.getcwd(), '_posts')

    if not bsky_handle or not bsky_password:
        print("Missing BSKY_HANDLE or BSKY_PASSWORD environment variables.")
        sys.exit(1)

    latest_post_path = get_latest_post(posts_dir)
    if not latest_post_path:
        print("No posts found.")
        return

    title, url = parse_post(latest_post_path)
    
    # Initialize Client
    print(f"Connecting to Bluesky as {bsky_handle}...")
    client = Client()
    client.login(bsky_handle, bsky_password)
    
    # Build the rich text with "read more" hyperlink
    text_builder = client_utils.TextBuilder()
    text_builder.text(f"{title}\n\n")
    text_builder.link("read more", url)
    
    print(f"Posting: {title} with 'read more' link")
    client.send_post(text_builder)
    print("Successfully posted to Bluesky!")

if __name__ == "__main__":
    main()
