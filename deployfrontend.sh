rsync -r src/ docs/
rsync  build/contracts/* docs/
git add .
git commit -m "smart token contract and ICO"
git remote add origin https://github.com/absonkab/ABSTK_Token_Sale.git
git push -u origin master