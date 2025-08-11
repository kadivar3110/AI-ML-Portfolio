
import urllib.request
from bs4 import BeautifulSoup

# Example: Retrieve book titles from books.toscrape.com
url = 'https://books.toscrape.com/catalogue/category/books_1/index.html'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as response:
    html = response.read().decode()

soup = BeautifulSoup(html, 'html.parser')
titles = soup.find_all('h3')
print('Book Titles:')
for t in titles:
    a_tag = t.find('a')
    if a_tag and a_tag.get('title'):
        print('-', a_tag['title'])
