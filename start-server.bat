@echo off
TITLE Abhranil Pal Portfolio Server (0.0.0.0:3000)
echo ====================================================
echo  Starting Portfolio Server on 0.0.0.0:3000
echo ====================================================
echo.
echo Local URL:   http://localhost:3000
echo Network URL: http://0.0.0.0:3000
echo.
npm run dev -- --host 0.0.0.0 --port 3000
pause

