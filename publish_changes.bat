@echo off
echo ===================================================
echo   ORION LOG — AUTOMATIC VERCEL PUBLISHER
echo ===================================================
echo.

set /p msg="Enter a message for your update (e.g. Added new blog post): "
if "%msg%"=="" set msg="Updated blog content"

echo.
echo [1/3] Staging local file changes...
git add .

echo [2/3] Committing changes...
git commit -m "%msg%"

echo [3/3] Pushing to GitHub & Syncing Vercel...
git push

echo.
echo ===================================================
echo SUCCESS! Your changes have been pushed to GitHub.
echo Vercel is now updating your live website automatically!
echo ===================================================
pause
