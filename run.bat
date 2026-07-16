@echo off

cd /d "%~dp0"

set "PATH=%CD%\.runtime\node;%PATH%"

call npm install

call npm run dev

pause