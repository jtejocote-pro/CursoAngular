

"# CursoAngular" comandos de git para actualizar cambiarse de ramas y subir archvos

clonar un repositorios git

git clone URL_DEL_REPOSITORIO

mostrara remotos de repositorio

git remote

mostrara remotos de repositorio y url del remoto

git remote -v

Agregar un remoto

git remote add NOMBRE_A_DAR_DEL_REMOTO URL_DEL_REMOTO

ejemplo: git remote add upstream https://github.com/ShefuTex/CursoAngular.git

Eliminar remoto

git remote rm NOMBRE_DEL_REMOTO_A_ELIMINAR

ejemplo git remote rm upstream

Bajar Cambios de los remoteo sin afectar al repositorio

git fetch NOMBRE_DEL_REPOSITORIO_REMOTO

Actualizar ultimos cambios del repositorio remoto

git merge NOMBRE_DEL_REPOSITORIO_REMOTO/NOMBRE_DE_RAMA_RESPECTIVA

Revisar en que ramas del repositorio y sobre que ramas me puedo switchar

git branch

Crear una rama local

git branch NOMBRE_DE_LA_RAMA

Cambiarte de rama local/remota

git checkout NOMBRE_DE_LA_RAMA

NOTA: la rama que se crea aqui de manera local no sera visible en github o el servidor del repositorio hatsa haber realizado el push

Comando basicos:

visualizar cambios pendientes: git status

visualizar los comits realizados en consola: git log

preprara todos archivos para commit: git add .

preparar un archivo para commit: git add RUTA_DEL_ARCHIVO

quitar todos archivos para commit: git rm .

quitar un archivo para commit: git rm RUTA_DEL_ARCHIVO

agregar comenatios a commit: git commit -m "texto que quiera colocar en el commit"

enviar cambios a repositorio remoto: git push NOMBRE_DEL_REMOTO RAMA_LOCAL_O_REMOTA

NOTA: no es necesario el nombre de repositorio remoto pero cuando la rama no existe en en el repositorio remoto y solo de manera local se debe de colocar, git push por si solo de manara automatica subira el cambio al reopisotio remoto
