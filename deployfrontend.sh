rsync -r src/ docs/
rsync  build/contracts/* docs/
git add .
git commit -m "Texacoin ICO test1"
git push -u origin master