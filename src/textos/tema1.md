# Tema 1: 1. Herramientas de control (Git, SVN)


<!-- 
RUTA DE ASSETS: @/assets/curso/tema1/
DISEÑO DE REFERENCIA: tema1.png
-->

## BLOQUE


Las herramientas de control de versiones, como Git y SVN (Subversion), son fundamentales en la gestión de software, ya que permiten llevar un registro detallado de los cambios realizados en el código a lo largo del tiempo (Guillamón Morales, 2013). Facilitan la colaboración entre múltiples desarrolladores, garantizando que cada contribución se integre de manera organizada y segura.

Git, ampliamente adoptado en entornos distribuidos, ofrece gran flexibilidad en la creación de ramas, fusiones y resolución de conflictos. Por su parte, SVN se basa en un modelo centralizado que sigue siendo útil en ciertos contextos empresariales. Dominar estas herramientas es clave para el trabajo en equipo y la trazabilidad de los proyectos de software.

//titulo-segundo
1.1.  Introducción al control de versiones

El control de versiones es una práctica esencial en el desarrollo de software, orientada a registrar, organizar y gestionar de manera sistemática los cambios realizados sobre archivos —principalmente código fuente— durante el ciclo de vida de un proyecto. Esta técnica permite mantener un historial detallado de cada modificación, facilitando así la trazabilidad, la colaboración y la recuperación ante errores (Guillamón Morales, 2013).

En esencia, el control de versiones actúa como una especie de “máquina del tiempo” para el desarrollo de software. Cada vez que un desarrollador realiza un cambio y lo registra en el sistema (proceso conocido como commit), se guarda una instantánea del estado del proyecto en ese momento. Esto hace posible revisar, comparar y restaurar versiones anteriores del código si fuera necesario, lo cual es invaluable para el mantenimiento y la evolución del software (Pérez Martínez, 2015). Los objetivos del control de versiones son: 

## BLOQUE: tarjetas-boton 3:3:3:3
//agrega un icono de fontawesome según versión manejada en el proyecto para cada tarjeta

Trazabilidad
Permite identificar quién realizó un cambio, cuándo lo hizo y cuál fue el motivo. Promueve la responsabilidad y la transparencia del equipo.

---

Recuperación ante errores
Si una modificación genera fallos o resultados no deseados, el sistema permite volver a un estado anterior estable del proyecto.

---

Colaboración eficiente
Varios desarrolladores pueden trabajar simultáneamente en diferentes funcionalidades sin sobrescribir el trabajo de los demás.

---

Auditoría del código
Facilita la revisión de cambios, análisis de contribuciones y documentación automática del progreso del desarrollo (Pérez Martínez, 2015).

## BLOQUE

## Tipos de control de versiones

Existen dos modelos principales de control de versiones, cada uno con características y aplicaciones específicas:

## BLOQUE: tarjetas-boton 4:4
//agrega un icono de fontawesome según versión manejada en el proyecto para cada tarjeta

**Centralizado (CVCS – Centralized Version Control System)**
Todos los cambios se gestionan desde un único servidor central. Herramientas como Subversion (SVN) siguen este modelo. Es más fácil de controlar, pero vulnerable a fallos del servidor central.

---

**Distribuido (DVCS – Distributed Version Control System)**
Cada desarrollador tiene una copia completa del repositorio, permitiendo trabajar localmente y sincronizar cambios después. Git es el ejemplo más representativo, destacando por su flexibilidad y capacidad de manejar proyectos grandes y distribuidos.


## BLOQUE

## Importancia del control de versiones en la industria

El control de versiones no solo es útil para los desarrolladores, sino que también aporta un valor significativo a nivel organizacional (Pérez Martínez, 2015). Equipos ágiles, metodologías DevOps, pruebas automatizadas y despliegues continuos dependen de una gestión robusta del código fuente. Herramientas como Git no solo permiten versionar archivos, sino también integrarse con sistemas de integración continua (CI), plataformas de revisión de código como GitHub o GitLab, y herramientas de gestión de proyectos.


**Los errores comunes al no usar control de versiones son:**

## BLOQUE: iconos-color 6:6
//agrega un icono de fontawesome según versión manejada en el proyecto para cada tarjeta 

Perder cambios por sobrescritura o eliminación accidental de archivos.

---

Dificultad para colaborar entre varios desarrolladores.


## BLOQUE: iconos-color 6:6
//agrega un icono de fontawesome según versión manejada en el proyecto para cada tarjeta

Ausencia de respaldo para identificar qué cambios introdujeron errores.

---

Falta de documentación de la evolución del proyecto.



## BLOQUE: titulo-segundo

1.2. Funcionamiento básico de Git

Git es un sistema de control de versiones distribuido que permite a los desarrolladores llevar un registro preciso y confiable de los cambios realizados en archivos, especialmente en proyectos de software (Guillamón Morales, 2013). Su funcionamiento se basa en la creación de un historial estructurado de modificaciones, con la capacidad de colaborar de forma eficiente sin perder información ni sobrescribir el trabajo de otros.

A diferencia de los sistemas centralizados, Git permite que cada usuario tenga una copia completa del repositorio, incluyendo todo su historial, ramas y configuraciones. Esto significa que operaciones como consultar el historial, realizar cambios, crear ramas o comparar versiones pueden realizarse de forma local, sin conexión a internet. Posteriormente, los cambios se sincronizan con otros desarrolladores a través de servidores remotos.

Los conceptos fundamentales en el funcionamiento de Git son: 


## BLOQUE: infografia
//assets: infografia1.svg

Repositorio (repository)
Espacio donde se almacena el historial completo de un proyecto. Puede ser local (en el equipo del desarrollador) o remoto (en plataformas como GitHub o GitLab).

---

Área de trabajo (working directory)
Entorno local donde el desarrollador edita los archivos. Todos los cambios comienzan aquí.

---

Área de preparación (staging area)
Zona temporal donde se guardan los cambios seleccionados antes de confirmarlos. Es como una lista previa al commit.

---

Confirmación (commit)
Instantánea del proyecto en un momento específico. Registra qué se cambió, quién lo hizo y cuándo. 
Forma parte del historial del repositorio.

---

Rama (branch)
Línea independiente de desarrollo. La rama principal suele llamarse main o master. Se crean ramas secundarias para nuevas funciones o correcciones sin afectar el código principal.

---

Fusión (merge)
Proceso de integrar los cambios de una rama en otra, unificando distintas líneas de desarrollo.

---

Repositorio remoto (remote repository)
Copia del repositorio alojada en un servidor remoto. Facilita la colaboración entre múltiples desarrolladores. Se sincroniza con los comandos push (subir cambios) y pull (descargar cambios).

## BLOQUE:

## Flujo básico de trabajo en Git

El funcionamiento cotidiano de Git sigue un flujo simple y lógico:

//se sugiere colocar aqui un diseño tipo linea de tiempo vertical 
1. El desarrollador modifica archivos en su área de trabajo.
2. Agrega los archivos al área de preparación con git add.
3. Confirma los cambios con git commit.
4. Sube los cambios al repositorio remoto con git push.
5. Para traer cambios del repositorio remoto, usa git pull.

Este flujo permite un control granular sobre los cambios, facilita la colaboración y mantiene un historial ordenado del desarrollo.

### Ejemplo práctico del funcionamiento básico de Git

Imaginemos que una desarrolladora llamada Laura trabaja en un proyecto web y desea añadir una nueva funcionalidad a la página de contacto. Para ello, sigue un flujo básico de Git en su computadora local. A continuación, se describen los pasos que realiza:

//se sugiere colocar cada numeral en una tarjeta tipo card de boostrap ocupando 4 columnas cada u.
1. Inicialización del repositorio
Laura abre la terminal, se ubica en la carpeta del proyecto y ejecuta git init. Esto convierte la carpeta en un repositorio de Git, habilitado para llevar control de versiones.
2. Verificación del estado del repositorio
Ejecuta git status para verificar si hay archivos nuevos, modificados o listos para confirmar.
3. Agregar archivos al área de preparación
Laura crea el archivo formulario-contacto.html y lo agrega con git add formulario-contacto.html. El archivo se mueve al staging area.
4. Confirmación (commit)
Realiza la confirmación con git commit -m "Añadir formulario de contacto", guardando el estado del archivo junto con una descripción del cambio.
5. Conexión con repositorio remoto
Conecta su repositorio local a GitHub con git remote add origin https://github.com/laura/proyecto-web.git.
6. Envío de cambios al repositorio remoto
Usa git push -u origin main para subir los commits a la rama principal del repositorio remoto.
7. Descarga de cambios recientes
Ejecuta git pull origin main para actualizar su repositorio local con los cambios del equipo, evitando conflictos.

## BLOQUE: figura-completa
//assets: figura1.svg

Figura 1. Flujo de trabajo con Git

Villacis, G. (2024, julio 17). Tutorial de flujo de trabajo con Git: ¡Empieza a usar los comandos básicos de Git AHORA!. DEV Community.

## BLOQUE: icono-anexo
//agrega un icono de descargar en el espacio de la imagen.

## Control de versiones y plataformas colaborativas
Se invita a leer el documento Control de versiones y plataformas colaborativas, donde se aborda el uso estratégico de sistemas como Git y SVN para gestionar versiones de código fuente, así como su integración con plataformas colaborativas como GitHub, GitLab, Bitbucket, VisualSVN y Assembla. 


## BLOQUE: bloque-material-complementario

GitHub. (s.f.). Documentación de GitHub. https://docs.github.com/es

Demonassit Mino. (2023, 9 de marzo). Manejo de Ramas en Git [Vídeo]. YouTube. https://www.youtube.com/watch?v=Fv0M1-KuHAY  