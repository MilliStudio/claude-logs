@echo off
title Back up Claude logs
rem Copies Claude Code conversation logs (*.jsonl) and memory notes (*.md)
rem for every project into this folder. Only new and changed files are
rem copied; nothing here is ever deleted, even after Claude Code removes
rem its own old logs.

set "SOURCE=%USERPROFILE%\.claude\projects"
set "TARGET=%~dp0projects"

if not exist "%SOURCE%" (
  echo No Claude Code logs found in %SOURCE%.
  pause
  exit /b 1
)

robocopy "%SOURCE%" "%TARGET%" *.jsonl *.md /S /XO /R:2 /W:2 /NP /NFL /NDL
if errorlevel 8 (
  echo.
  echo Something went wrong while copying. See the messages above.
  pause
  exit /b 1
)
echo.
echo Done. Logs and memory notes are backed up in:
echo %TARGET%
echo This window closes in 3 seconds.
timeout /t 3 /nobreak >nul
