rsync -r src/ docs/
rsync  build/contracts/* docs/
git add .
git commit -m "smart token contract and ICO - upgrade token rate name and symbol"
git push -u origin master