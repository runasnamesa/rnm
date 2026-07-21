@echo off
setlocal

cd /d "%~dp0"

rem Usa o Node local do projeto quando estiver presente.
if exist ".runtime\node\node.exe" (
    set "PATH=%CD%\.runtime\node;%PATH%"
)

rem Garante que o npm esteja disponível no PATH.
where npm >nul 2>nul
if errorlevel 1 (
    echo npm nao foi encontrado no PATH. Instale o Node.js ou ajuste o PATH do sistema.
    pause
    exit /b 1
)

rem Instala as dependencias do projeto em qualquer ambiente novo.
call npm install

rem Inicia o servidor de desenvolvimento do Astro.
call npm run dev

pause