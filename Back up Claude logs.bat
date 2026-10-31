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
echo This window closes in 1.5 seconds.
rem timeout counts only whole seconds, so PowerShell waits instead. It takes
rem about a quarter second to start, so it sleeps 1.25 seconds of the 1.5.
powershell -NoProfile -Command "Start-Sleep -Milliseconds 1250"
