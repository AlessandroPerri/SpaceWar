rem Grazie a questo bat il gioco si avvierà
rem Ricordarsi di aggiungere la cartella di phyton 
rem cambiare il percorso del server.py in caso la posizione sia diversa.

@echo off
setlocal
rem python -m SimpleHTTPServer 8080
start "" http://localhost:8000
set SCRIPT_PATH=%~dp0
cd SpaceWar\5_SpaceWar
rem cd 5_SpaceWar
"%SCRIPT_PATH%python38\python" server.py

endlocal