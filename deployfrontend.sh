rsync -r src/ docs/
rsync  build/contracts/* docs/
git add .
git commit -m "smart token contract and ICO - Convert token price to BNB"
git push -u origin master