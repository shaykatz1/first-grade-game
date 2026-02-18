# אתר משחק לכיתה א'

אתר לימודי משחקי לילדי כיתה א' עם:
- מסלול שפה
- מסלול חשבון
- 24 שלבים מדורגים (12 לכל תחום)
- שמירת התקדמות בדפדפן (כוכבים, שלבים פתוחים ותשובות נכונות)

## הרצה מקומית

אפשר לפתוח את `index.html` ישירות בדפדפן, או להריץ שרת מקומי:

```bash
cd first-grade-game
python3 -m http.server 8080
```

ואז לגלוש לכתובת:

`http://localhost:8080`

## העלאה ל-GitHub ופריסה ל-GitHub Pages

1. יצירת ריפו חדש ב-GitHub בשם `first-grade-game` (ציבורי).
2. בתיקיית הפרויקט להריץ:

```bash
cd first-grade-game
git init
git add .
git commit -m "Initial first grade learning game site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/first-grade-game.git
git push -u origin main
```

3. ב-GitHub:
- להיכנס ל-`Settings`
- לבחור `Pages`
- תחת `Build and deployment` לבחור:
  - `Source`: `Deploy from a branch`
  - `Branch`: `main` ו-`/(root)`
- לשמור

4. אחרי דקה-שתיים האתר יהיה זמין בכתובת:

`https://<YOUR_USERNAME>.github.io/first-grade-game/`
