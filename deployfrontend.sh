rsync -r src/ docs/
rsync  build/contracts/* docs/
git add .
git commit -m "smart token contract and ICO - set token price calcul"
git push -u origin master