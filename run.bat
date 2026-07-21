@echo off
setlocal EnableExtensions

cd /d "%~dp0"

if /i "%1"=="stop" (
    call npm run astro -- dev stop
    exit /b 0
)

if /i "%1"=="status" (
    call npm run astro -- dev status
    exit /b 0
)

set "ROOT=%CD%"
set "RUNTIME=%ROOT%\.runtime\node"

rem Prefere o npm do sistema, que e mais confiavel em maquinas novas.
where npm >nul 2>nul
if errorlevel 1 (
    rem Se o npm do sistema nao existir, tenta usar o runtime local do projeto.
    if exist "%RUNTIME%\node.exe" (
        set "PATH=%RUNTIME%;%PATH%"
    )

    where npm >nul 2>nul
    if errorlevel 1 (
        echo npm nao foi encontrado no PATH. Instale o Node.js ou ajuste o PATH do sistema.
        pause
        exit /b 1
    )
)

rem Instala as dependencias do projeto em qualquer ambiente novo.
call npm install

rem Inicia o servidor de desenvolvimento do Astro.
echo Pressione Ctrl+C na janela do console para encerrar manualmente o servidor local.
call npm run dev

pause
exit /b 0