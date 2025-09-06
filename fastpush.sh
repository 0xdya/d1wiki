

# ========== fastpush ==========

ascii_logo() {
cat << "EOF"
░█▀▀░█▀█░█▀▀░▀█▀░░░█▀█░█░█░█▀▀░█░█
░█▀▀░█▀█░▀▀█░░█░░░░█▀▀░█░█░▀▀█░█▀█
░▀░░░▀░▀░▀▀▀░░▀░░░░▀░░░▀▀▀░▀▀▀░▀░▀
        by @0xdya
EOF
}

check_dep() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "$1 غير مثبت. ثبته أولاً كي تواصل."
    exit 1
  fi
}

ascii_logo
check_dep git
check_dep node
check_dep npm

if [ ! -d .git ]; then
  echo "المشروع غير مربوط بعد."
  git init

  read -p "ادخل رابط مستودع GitHub: " repo
  git remote add origin "$repo"

  read -p "اسم الفرع (عادة main): " branch
  git branch -M "$branch"
fi

git add .
read -p "commit: " msg
git commit -m "$msg"
git push -u origin "$(git branch --show-current)"
