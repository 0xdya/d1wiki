git add .  >/dev/null 2>&1
read -p "commit: " commit
git commit -m "$commit"  >/dev/null 2>&1
git push origin main  >/dev/null 2>&1