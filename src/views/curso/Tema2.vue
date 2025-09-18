<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Creación de ramas y fusiones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Introducción con iconografía Git mejorada
    p(data-aos="fade-right").mb-5 La creación de ramas y fusiones constituye una práctica fundamental en la gestión moderna del software, ya que permite a los equipos trabajar de forma paralela sin interferir en el código principal. Mediante las ramas, los desarrolladores pueden implementar nuevas funcionalidades, corregir errores o experimentar con mejoras de manera aislada. Posteriormente, gracias al proceso de fusión, estos cambios se integran al proyecto principal, consolidando el trabajo colaborativo y reduciendo riesgos. Esta estrategia mejora la organización del código, fortalece la colaboración y garantiza una mejor trazabilidad del desarrollo (Chacon & Straub, 2014).



    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de ramificación (branching)

    p(data-aos="fade-left").mb-5 La ramificación es un pilar esencial en los sistemas de control de versiones modernos como Git y SVN. Esta práctica permite crear trayectorias independientes de desarrollo a partir de una base común, facilitando el trabajo simultáneo en distintas funcionalidades, correcciones o pruebas sin afectar el código principal (Pérez Martínez, 2015).

    p(data-aos="fade-left").mb-5 Las estrategias de branching en Git y SVN son: 

    // Tarjetas comparativas Git vs SVN mejoradas
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-create
            .row.align-items-center
              .col-auto
                i.fab.fa-git-alt.fa-3x
              .col
                h4.mb-0 Git
                small Sistema Distribuido
          .p-4
            p.mb-3 Diseñado desde su núcleo para facilitar una estrategia de ramificación liviana y eficiente. Cada rama es un puntero a un commit. Ejemplo:
            
            .git-command-block.mb-3
              code.text-success git checkout -b feature/buscador
            
            p.mb-3 Desde ese momento, todos los cambios se registran en la nueva rama. Para fusionarla con main:
            
            .git-command-block.mb-2
              code.text-success git checkout main
            .git-command-block.mb-3
              code.text-success git merge feature/buscador
            
            p.mb-0.small Git permite trabajar con múltiples ramas en paralelo, como en Git Flow, donde se crean ramas específicas para desarrollo, producción, hotfixes y características.

      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-merge
            .row.align-items-center
              .col-auto
                i.fas.fa-folder-tree.fa-3x
              .col
                h4.mb-0 SVN
                small Sistema Centralizado
          .p-4
            p.mb-3 Implementa ramas como directorios dentro del repositorio, usando convenciones como trunk, branches y tags. Ejemplo de creación de rama:
            
            .git-command-block.mb-3
              code.text-info svn copy http://repositorio/proyecto/trunk http://repositorio/proyecto/branches/funcion_login -m "Creación de rama para función de login"
            
            p.mb-0 Los cambios pueden fusionarse al trunk, pero el proceso suele requerir más intervención manual y seguimiento de revisiones.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Creación y gestión de ramas

    p(data-aos="fade-left").mb-5 La creación y gestión de ramas representa una estrategia clave en los sistemas de control de versiones, ya que permite organizar el trabajo en diferentes líneas de desarrollo sin comprometer la integridad del código principal. Herramientas como Git y SVN ofrecen mecanismos distintos pero eficaces para implementar esta estrategia (Chacon & Straub, 2014).


    h2(data-aos="flip-up") Creación y gestión de ramas en Git

    p(data-aos="fade-left").mb-5 En Git, las ramas permiten trabajar de forma paralela con eficiencia y flexibilidad, facilitando flujos de trabajo colaborativos y ordenados.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-create
            i.fas.fa-plus.fa-2x.mb-2
            h5.mb-0 Creación de ramas
          .p-4
            p.mb-3 Crear una rama en Git es rápido y eficiente, ya que no genera copias completas del código, sino que crea un puntero a un commit específico. Ejemplo:
            .git-command-block.mb-3
              code.text-success git checkout -b feature/notificaciones
            p.mb-0.small.text-muted Desde ese momento, los cambios se almacenan en esa rama de forma aislada.

      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .enhanced-card.h-100
          .card-header.git-merge
            i.fas.fa-code-branch.fa-2x.mb-2
            h5.mb-0 Fusión de ramas
          .p-4
            p.mb-3 Al terminar una funcionalidad, se puede fusionar con la rama principal y eliminar para mantener ordenado el repositorio:
            .git-command-block.mb-3
              code.text-info git checkout main<br>git merge feature/notificaciones<br>git branch -d feature/notificaciones

      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-manage
            i.fas.fa-list.fa-2x.mb-2
            h5.mb-0 Comandos útiles
          .p-4
            .git-command-block.mb-2
              code.text-warning git branch
            small.d-block.text-muted.mb-3 Lista ramas locales
            .git-command-block.mb-2
              code.text-warning git branch -r  
            small.d-block.text-muted.mb-3 Lista ramas remotas
            .git-command-block.mb-2
              code.text-warning git branch -D nombre-rama
            small.d-block.text-muted Elimina una rama local obsoleta


    // Sección Git Flow con iconografía mejorada
    .bg-full-width.git-flow-section.mb-5
      .px-4.px-md-5.py-5
        .row.align-items-center
          .col-lg-3.text-center.mb-4.mb-lg-0
            .git-flow-icon
              i.fab.fa-git-alt.fa-5x.mb-3
              h4 Git Flow
          .col-lg-9
            h3.mb-4 Git Flow - Ramas especializadas
            p(data-aos="fade-left").mb-5 Es importante seguir una convención clara en los nombres y evitar una proliferación excesiva. Git Flow es una convención de ramificación que propone una estructura específica para el desarrollo de software, facilitando la colaboración y la gestión de cambios. Git Flow propone ramas como:
            .row
              .col-md-6.mb-3
                .enhanced-card.bg-transparent.border.border-white
                  .p-3
                    .d-flex.align-items-center.mb-2
                      i.fas.fa-code-branch.text-git-secondary.me-3.fa-lg
                      strong.text-white main/master
                    small.text-light Producción
              .col-md-6.mb-3
                .enhanced-card.bg-transparent.border.border-white
                  .p-3
                    .d-flex.align-items-center.mb-2
                      i.fas.fa-code-branch.text-info.me-3.fa-lg
                      strong.text-white develop
                    small.text-light Desarrollo
              .col-md-6.mb-3
                .enhanced-card.bg-transparent.border.border-white
                  .p-3
                    .d-flex.align-items-center.mb-2
                      i.fas.fa-code-branch.text-warning.me-3.fa-lg
                      strong.text-white feature/*
                    small.text-light Nuevas características
              .col-md-6.mb-3
                .enhanced-card.bg-transparent.border.border-white
                  .p-3
                    .d-flex.align-items-center.mb-2
                      i.fas.fa-code-branch.text-danger.me-3.fa-lg
                      strong.text-white hotfix/*
                    small.text-light Correcciones urgentes
              .col-md-6.mb-3
                .enhanced-card.bg-transparent.border.border-white
                  .p-3
                    .d-flex.align-items-center.mb-2
                      i.fas.fa-code-branch.text-purple-light.me-3.fa-lg
                      strong.text-white release/*
                    small.text-light Versiones listas para producción




    // Sección SVN con diseño mejorado

    h2.mb-3 Creación y gestión de ramas en SVN
    p.mb-5 En Subversion (SVN), las ramas se implementan mediante directorios completos dentro del repositorio, lo que requiere una gestión más estructurada.

    // Tarjetas de procesos SVN
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-merge
            i.fas.fa-folder-plus.fa-2x.mb-2
            h4.mb-0 Creación de ramas
          .p-4
            p.mb-3 En SVN, las ramas son directorios completos dentro del repositorio. Para crear una rama:
            
            .git-command-block.mb-3
              code.text-info svn copy http://servidor/repositorio/trunk http://servidor/repositorio/branches/nueva-funcionalidad -m "Creación de rama de prueba"
            
            p.mb-0.small Luego, los desarrolladores cambian su copia de trabajo a esta nueva rama.

      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-manage
            i.fas.fa-cogs.fa-2x.mb-2
            h4.mb-0 Gestión de ramas
          .p-4
            p.mb-3 Requiere seguir buenas prácticas en el nombre y llevar un registro manual de revisiones, ya que SVN no rastrea automáticamente las fusiones.
            
            //- p.mb-3 Un ejemplo de estructura de repositorio en SVN sería:
            
            //- .bg-color-1.p-3.rounded.text-center
            //-   i.fas.fa-sitemap.fa-2x.text-primary.mb-2
            //-   small.d-block Estructura jerárquica de directorios

    p.mb-4 Un ejemplo de estructura de repositorio en SVN sería:
    
    .titulo-figura.mb-2
      h5 Figura 2. 
      span Estructura SVN
    
    figure.bg-color-sintesis.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema2/figura2.png", data-aos="zoom-in", style="max-width: 328px").mx-auto
    

    h2 Buenas prácticas para crear y gestionar ramas

    p(data-aos="fade-left").mb-5 Aplicar buenas prácticas en el uso de ramas es fundamental para evitar conflictos, mejorar la trazabilidad y facilitar la colaboración.

    // Tarjetas de buenas prácticas
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-create
            i.fas.fa-tag.fa-2x.mb-2
            h5.mb-0 Nomenclatura y Organización
          .p-4
            ul.lista-ul--color.mb-0
              li.mb-2
                i.fas.fa-check.text-success
                | Nombrar las ramas de forma descriptiva y coherente (ej. feature/login, bugfix/header).
              li.mb-0
                i.fas.fa-check.text-success
                | Eliminar ramas que ya han sido fusionadas para mantener el orden.

      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-merge
            i.fas.fa-shield-alt.fa-2x.mb-2
            h5.mb-0 Gestión y Documentación
          .p-4
            ul.lista-ul--color.mb-0
              li.mb-2
                i.fas.fa-check.text-success
                | Evitar ramas prolongadas sin fusión para prevenir conflictos complejos.
              li.mb-0
                i.fas.fa-check.text-success
                | Documentar el propósito y estado de cada rama, especialmente en equipos grandes.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Flujos de trabajo con ramas

    p(data-aos="fade-left").mb-5 Los flujos de trabajo con ramas representan una estrategia fundamental en la gestión colaborativa del código fuente. Estas metodologías permiten organizar el desarrollo de software de forma eficiente, manteniendo entornos de trabajo aislados para nuevas características, correcciones, pruebas o despliegues. Cada sistema de control de versiones, como Git o SVN, adopta estos flujos con distintos grados de flexibilidad, siendo Git el más versátil en el manejo de ramificaciones complejas (Chacon & Straub, 2014).

    h2.mb-2 Git y la evolución de los flujos de trabajo
    p.mb-4 Git permite múltiples enfoques gracias a su estructura distribuida y liviana. A continuación, se presentan los flujos más utilizados:

    // Sección Git Workflows con fondo atractivo
    .bg-full-width.git-flow-section.mb-5
      .px-4.px-md-5.py-5
        //- .row.align-items-center.mb-4
        //-   .col-lg-auto.text-center.mb-4.mb-lg-0
        //-     i.fab.fa-git-alt.fa-5x.mb-3
           
        //-   .col-lg
        //-     h3.mb-2 Git y la evolución de los flujos de trabajo
        //-     p.mb-0 Git permite múltiples enfoques gracias a su estructura distribuida y liviana. A continuación, se presentan los flujos más utilizados:

        // Tarjetas de flujos Git
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4.text-center
                i.fas.fa-code-branch.fa-3x.text-git-secondary.mb-3
                h4.text-white.mb-3 Git Flow
                p.text-light.mb-3 Propone una estructura rígida con ramas principales (main, develop) y ramas auxiliares (feature, release, hotfix). Es útil en proyectos con ciclos de desarrollo bien definidos.
                
                .git-command-block.mb-2.text-left
                  code.text-success git checkout develop
                .git-command-block.mb-3.text-left
                  code.text-success git checkout -b feature/sistema-de-reportes
                
                p.text-light.small.mb-0 Tras pruebas, se fusiona en develop y luego en main.

          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4.text-center
                i.fab.fa-github.fa-3x.text-info.mb-3
                h4.text-white.mb-3 GitHub Flow
                p.text-light.mb-3 Más simple, se basa en ramas creadas desde main, con revisiones mediante pull requests. Es ideal para proyectos ágiles con despliegue continuo.
                
                .bg-color-white.p-3.rounded.mb-3
                  i.fas.fa-code-branch.text-primary.me-2
                  code.text-dark fix/captcha-error
                
                p.text-light.small.mb-0 Ejemplo: Un colaborador trabaja en la rama #[b fix/captcha-error], la sube y abre una pull request.

          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4.text-center
                i.fab.fa-gitlab.fa-3x.text-warning.mb-3
                h4.text-white.mb-3 GitLab Flow
                p.text-light.mb-3 Integra Git Flow con prácticas de entrega continua. Permite ramificaciones por entorno (desarrollo, pruebas, producción) y seguimiento de issues.
                
                .d-flex.justify-content-center.mb-3
                  .me-2
                    i.fas.fa-arrow-right.text-success
                    small.d-block.text-light Dev
                  .me-2
                    i.fas.fa-arrow-right.text-warning
                    small.d-block.text-light Test
                  div
                    i.fas.fa-arrow-right.text-danger
                    small.d-block.text-light Prod
                
                p.text-light.small.mb-0 Muy usado en entornos DevOps.

        p.mb-0.text-muted Estos flujos mejoran la colaboración, trazabilidad y control de calidad en el desarrollo.

    // Sección SVN Workflows
    h2.mb-3 Flujos de trabajo en SVN
    p.mb-4 Aunque SVN no posee la flexibilidad de Git, también permite estructuras organizadas mediante convenciones de carpetas. A continuación, se resumen sus estrategias comunes:

    // Tarjetas de estrategias SVN
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-create
            i.fas.fa-tree.fa-2x.mb-2
            h4.mb-0 Trunk-Based Development
          .p-4
            p.mb-3 La mayoría del trabajo se realiza sobre el trunk. Las ramas se utilizan para tareas específicas o versiones.
            
            //- .alert.bg-color-6.p-3.rounded.mb-3.text-center
            //-   i.fas.fa-code-branch.text-primary.fa-2x.mb-2
            //-   small.d-block Desarrollo centralizado en trunk

      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-merge
            i.fas.fa-project-diagram.fa-2x.mb-2
            h4.mb-0 Ramas por funcionalidad
          .p-4
            p.mb-3 Se crean subdirectorios en branches, como branches/login-nuevo. Tras terminar, se fusionan manualmente al trunk.
            
            p.mb-2.small.text-muted Ejemplo:
            .git-command-block.mb-3
              code.text-info svn copy http://repositorio/trunk http://repositorio/branches/ajuste-notificaciones
            

    p.mb-5 Estas prácticas requieren disciplina y control manual, especialmente al fusionar los cambios.


    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Fusiones (mergers) y sus tipos

    p(data-aos="fade-left").mb-4 La fusión, también conocida como merge, es una operación esencial en los sistemas de control de versiones. Permite integrar los cambios realizados en diferentes ramas dentro de una misma línea de desarrollo. Este proceso asegura que las contribuciones paralelas del equipo converjan en un historial coherente, preservando las aportaciones individuales y permitiendo una evolución controlada del código (Chacon & Straub, 2014).

    // Introducción con diseño atractivo
    .alert.alert-info.mb-5.tarjeta.p-4
      p.mb-0 Tanto en #[b Git] como en #[b SVN], la fusión puede variar en complejidad según el volumen de cambios, la sincronización entre ramas y el flujo de trabajo adoptado. Sin embargo, Git ofrece una mayor variedad y control sobre los tipos de fusión aplicables.

    // Sección Git Merges con fondo atractivo

    h2.mb-2 Tipos de fusiones en Git
    p.mb-4 Git proporciona diversos enfoques de fusión. A continuación se resumen sus características y ejemplos más representativos:


    .bg-full-width.git-flow-section.mb-5
      .px-4.px-md-5.py-5
        //- .row.align-items-center.mb-4
        //-   .col-lg-auto.text-center.mb-4.mb-lg-0
        //-     i.fab.fa-git-alt.fa-5x.mb-3
            
        //-   .col-lg
        //-     h2.mb-2 Tipos de fusiones en Git
        //-     p.mb-0 Git proporciona diversos enfoques de fusión. A continuación se resumen sus características y ejemplos más representativos:

        // Tarjetas de tipos de fusión Git
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4
                .text-center.mb-3
                  i.fas.fa-fast-forward.fa-3x.text-git-secondary.mb-2
                  h4.text-white Merge automático (fast-forward merge)
                
                p.text-light.mb-3 Se produce cuando la rama de destino no ha tenido cambios desde que se creó la rama de origen. Git simplemente "avanza" el puntero sin crear un nuevo commit.
                
                p.text-light.small.mb-2 Ejemplo:
                .git-command-block.mb-2
                  code.text-success git checkout main
                .git-command-block.mb-0
                  code.text-success git merge feature/nueva-interfaz

          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4
                .text-center.mb-3
                  i.fas.fa-project-diagram.fa-3x.text-info.mb-2
                  h4.text-white Merge con commit de fusión (three-way merge)
                
                p.text-light.mb-3 Sucede cuando ambas ramas han tenido desarrollos independientes. Git crea un commit de fusión que une los cambios.
                
                p.text-light.small.mb-2 Ejemplo:
                .git-command-block.mb-2
                  code.text-success git checkout develop
                .git-command-block.mb-0
                  code.text-success git merge feature/autenticacion

          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4
                .text-center.mb-3
                  i.fas.fa-exclamation-triangle.fa-3x.text-warning.mb-2
                  h4.text-white Fusión con conflictos
                
                p.text-light.mb-3 Ocurre si ambas ramas modificaron las mismas líneas de un archivo. Git solicita que el usuario resuelva el conflicto manualmente.
                
                p.text-light.small.mb-2 Ejemplo:
                .git-command-block.mb-2
                  code.text-warning CONFLICT (content): Merge conflict in main.js
                p.text-light.small.mb-2 Resolución:
                .git-command-block.mb-2
                  code.text-success git add main.js
                .git-command-block.mb-0
                  code.text-success git commit

          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .enhanced-card.bg-transparent.border.border-white.h-100
              .p-4
                .text-center.mb-3
                  i.fas.fa-history.fa-3x.text-purple-light.mb-2
                  h4.text-white Fusión por rebase
                
                p.text-light.mb-3 Reescribe el historial al aplicar los commits de una rama sobre otra, uno a uno. Útil para mantener un historial lineal.
                
                p.text-light.small.mb-2 Ejemplo:
                .git-command-block.mb-2
                  code.text-success git checkout feature/estadisticas
                .git-command-block.mb-4
                  code.text-success git rebase main
                
                .alert.alert-warning.p-2.mb-0
                  small
                    i.fas.fa-exclamation-circle.me-1
                    | Advertencia: no usar en ramas compartidas sin coordinación.


    .titulo-figura.mb-2
      h5 Figura 3. 
      span Flujo de trabajo con Git
    
    figure.bg-color-sintesis.p-4.p-md-5
      img(src="@/assets/curso/tema2/figura3.svg", data-aos="zoom-in", style="max-width: 695px").mx-auto
    figcaption.mt-2.text-center.mb-5 Nota. Atlassian. (s.f.). Git merge. Atlassian.
    



    h2.mb-3 Fusiones en SVN
    p.mb-4 En #[b Subversion], el proceso de fusión es más manual. Se realiza mediante el comando svn merge, especificando la fuente y destino de los cambios. Antes de fusionar, el desarrollador debe actualizar su copia local del trunk y luego aplicar los cambios de la rama:

    // Sección SVN Merges
    //- .bg-full-width.git-commands-section.mb-5
    //-   .px-4.px-md-5.py-4
        //- .row.align-items-center.mb-4
        //-   .col-lg-auto
        //-     i.fas.fa-folder-tree.fa-5x.text-white.mb-3
        //-   .col-lg
        //-     h2.mb-3 Fusiones en SVN
        //-     p.mb-0 En Subversion, el proceso de fusión es más manual. Se realiza mediante el comando svn merge, especificando la fuente y destino de los cambios. Antes de fusionar, el desarrollador debe actualizar su copia local del trunk y luego aplicar los cambios de la rama:

    // Tarjeta proceso SVN
    .bg-full-width.bg-color-purple-light.mb-5
      .px-4.px-md-5.py-5
        .row.justify-content-center
          .col-lg-10
            .enhanced-card.bg-transparent.bg-color-white-light
              .p-4
                .row.align-items-center.mb-3
                  .col-auto
                    .tool-icon-container.bg-purple-light
                      i.fas.fa-terminal.fa-2x.text-purple
                  .col
                    h2.mb-0.text-purple Proceso de fusión SVN
                    p.small.mb-0 Secuencia de comandos típica

                p.text-light.small.mb-2 Ejemplo:
                .git-command-block.mb-2
                  code.text-info svn checkout https://repositorio.com/proyecto/trunk
                .git-command-block.mb-2
                  code.text-info cd trunk
                .git-command-block.mb-4
                  code.text-info svn merge https://repositorio.com/proyecto/branches/nueva-funcionalidad

                p.mb-0 Una vez realizada la fusión, es necesario revisar los archivos afectados, resolver conflictos si los hay y confirmar los cambios con un commit.

 
    

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Resolución de conflictos en fusiones

    p(data-aos="fade-left").mb-4 En entornos colaborativos donde múltiples desarrolladores trabajan sobre una misma base de código, los conflictos durante la fusión de ramas son inevitables. La resolución de conflictos en fusiones es el proceso mediante el cual se detectan, analizan y solucionan las discrepancias generadas al intentar integrar cambios que afectan las mismas líneas de código (Pérez Martínez, 2015).

    p(data-aos="fade-left").mb-5 Estos conflictos surgen cuando dos ramas modifican de forma distinta una misma porción de código. En tales casos, el sistema de control de versiones no puede fusionar automáticamente, por lo que el desarrollador debe intervenir para decidir qué versión conservar, combinar o descartar.


    .row.align-items-center.mb-4
      .col-auto
        i.fas.fa-exclamation-circle.fa-2x.text-danger
      .col
        h2.mb-0 ¿Cómo identificar un conflicto?

    p.mb-4 En Git y SVN, los conflictos se manifiestan al ejecutar una fusión, recibiendo un mensaje de advertencia. Los archivos afectados se marcan con delimitadores especiales:

    .git-command-block.mb-4
      code.text-warning <<<<<<< HEAD <br>
      code.text-success print("Mensaje desde rama principal") <br>
      code.text-yellow ======= <br>
      code.text-info print("Mensaje desde rama secundaria") <br> 
      code.text-warning >>>>>>> rama-secundaria

    .bg-yellow-50.p-4.mb-0.rounded-lg.mb-5
      p.mb-0.text-yellow-700 Aquí, #[b HEAD] representa el contenido de la rama actual y la parte inferior muestra los cambios traídos desde la otra rama. El desarrollador debe editar el archivo para dejar una única versión válida y coherente.

    

    //- .row.align-items-center.mb-4
    //-   .col-auto
    //-     i.fas.fa-code.fa-2x.text-danger
    //-   .col
    //-     
    h2.mb-2 Procesos de resolución de conflictos

    p(data-aos="fade-left").mb-5 A continuación se presenta una comparación del proceso en Git y SVN:


    // Tarjetas comparativas Git vs SVN mejoradas
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-create
            .row.align-items-center
              .col-auto
                i.fab.fa-git-alt.fa-3x
              .col
                h4.mb-0 Git
                small Resolución de conflictos
          .p-4
            p.mb-2 #[strong 1. Detectar conflicto]
            p.mb-2 Al ejecutar git merge aparece el mensaje de conflicto.
            .git-command-block.mb-4
              code.text-success $ git merge feature/login 
              code.text-success $ CONFLICT (content): Merge conflict in app.js


            p.mb-2 #[strong 2. Editar archivo]
            p.mb-4 Abrir el archivo afectado y resolver manualmente.

            p.mb-2 #[strong 3. Marcar como resuelto]
            p.mb-2 Agregar el archivo al staging area.
            .git-command-block.mb-4
              code.text-success $ git add app.js

            p.mb-2 #[strong 4. Finalizar fusión]
            p.mb-2 Confirmar la resolución del conflicto.
            .git-command-block.mb-4
              code.text-success $ git commit

            p.mb-2 #[strong 5. Verificar estado]
            p.mb-2 Opcional: revisar que todo esté correcto.
            .git-command-block.mb-4
              code.text-success $ git status



      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .enhanced-card.h-100
          .card-header.git-merge
            .row.align-items-center
              .col-auto
                i.fas.fa-folder-tree.fa-3x
              .col
                h4.mb-0 SVN
                small Resolución de conflictos
                
          .p-4  
            p.mb-2 #[strong 1. Ejecutar merge]
            p.mb-3 Al ejecutar svn update o svn merge, se crean archivos auxiliares:
            .ps-0
              p.mb-3.small.text-muted #[code file.java.rOLDREV]
              p.mb-3.small.text-muted #[code file.java.rNEWREV]
              p.mb-4.small.text-muted #[code file.java.mine]
            
            p.mb-2 #[strong 2. Editar y combinar]
            p.mb-4 Editar y combinar los cambios en #[code file.java]

            p.mb-2 #[strong 3. Marcar como resuelto]
            .git-command-block.mb-4
              code.text-info $ svn resolved file.java

            p.mb-2 #[strong 4. Confirmar solución]
            .git-command-block.mb-4
              code.text-info $ svn commit -m "Conflicto resuelto"


    // Sección Herramientas recomendadas
    .bg-full-width.bg-color-1.mb-0
      .px-4.px-md-5.py-5
        .row.align-items-center.mb-4
          .col-auto
            i.fas.fa-tools.fa-3x.text-white.mb-3
          .col
            h2.text-white.mb-2 Herramientas recomendadas
            p.text-light.mb-0 Para resolver conflictos de manera más eficiente y visual

        // Tarjetas de herramientas
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .enhanced-card.bg-white.h-100
              .p-4.text-center
                .mb-3
                  .tool-icon-container.bg-primary-light.mb-3
                    i.fas.fa-code.fa-2x.text-primary
                  h4.text-dark VS Code
                
                p.text-muted.mb-0 Resalta visualmente los bloques en conflicto con interfaz intuitiva.

          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .enhanced-card.bg-white.h-100
              .p-4.text-center
                .mb-3
                  .tool-icon-container.bg-success-light.mb-3
                    i.fas.fa-code-branch.fa-2x.text-success
                  h4.text-dark Sourcetree
                
                p.text-muted.mb-0 Interfaz gráfica para resolver conflictos sin editar manualmente.

          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .enhanced-card.bg-white.h-100
              .p-4.text-center
                .mb-3
                  .tool-icon-container.bg-purple-light.mb-3
                    i.fas.fa-layer-group.fa-2x.text-purple
                  h4.text-dark GitKraken
                
                p.text-muted.mb-0 Herramienta visual avanzada para gestión de conflictos complejos.

    // Ejemplo práctico en Git
    .bg-full-width.bg-color-purple-light.mb-5.border.border-light
      .px-4.px-md-5.py-5
        .row.align-items-center.mb-4
          .col-auto
            .tool-icon-container.bg-purple-light
              i.fas.fa-play.fa-2x.text-purple
          .col
            h2.text-dark.mb-0 Ejemplo práctico en Git

        .row.mb-4
          .col-12
            p.text-muted Imaginemos que dos desarrolladores modifican el archivo #[code.text-warning mensajes.py] en ramas distintas:

        // Tarjetas de ramas
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6.mb-4(data-aos="zoom-in-left")
            .simple-example-card.h-100
              .p-4
                h5.text-purple.mb-3 Rama main:
                .simple-code-block
                  code.text-success print("Bienvenido al sistema")

          .col-lg-6.mb-4(data-aos="zoom-in-right")
            .simple-example-card.h-100
              .p-4
                h5.text-purple.mb-3 Rama rama-soporte:
                .simple-code-block
                  code.text-info print("Bienvenido al sistema de soporte")

        p.text-muted.mb-4 Al fusionar rama-soporte en main, Git detectará un conflicto. El desarrollador puede optar por un mensaje combinado:


        // Solución combinada
        .row.justify-content-center
          .col-lg-12(data-aos="zoom-in-up")
            .simple-example-card
              .p-4
                h5.text-purple.mb-3 Solución combinada:
                .simple-code-block.mb-3
                  code.text-warning print("Bienvenido al sistema de soporte y administración")
                
                p.text-purple.mb-0 Luego, debe guardar los cambios, añadir el archivo (#[code.text-primary git add mensajes.py]) y confirmar con #[code.text-primary git commit].



    #t_2_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.6] Alternativas a la fusión: el rebase

    p(data-aos="fade-left").mb-5 En entornos donde la limpieza del historial y la linealidad del flujo de trabajo son prioritarias, el comando rebase de Git se presenta como una alternativa eficaz a la tradicional fusión de ramas. A diferencia del merge, que combina ramas preservando la estructura de bifurcaciones, el rebase reorganiza los commits de una rama para integrarlos en otra como si hubieran sido desarrollados secuencialmente. Esto permite mantener un historial más ordenado, libre de bifurcaciones innecesarias (Chacon & Straub, 2014).

    // Bloque ¿Qué es git rebase?
    .bg-full-width.bg-color-purple-light.mb-5.border.border-light
      .px-4.px-md-5.py-5
        .row.align-items-center.mb-4
          .col-auto
            .tool-icon-container.bg-purple-light
              i.fas.fa-arrow-right.fa-2x.text-purple
          .col
            h2.text-dark.mb-0 ¿Qué es git rebase?

        .row.mb-4
          .col-12
            p.text-muted El rebase toma los cambios de una rama (por ejemplo, feature) y los aplica como nuevos commits sobre otra rama base (por ejemplo, main). En la práctica, reescribe el historial de la rama para que parezca que su desarrollo ocurrió directamente sobre la base actualizada (Pérez Martínez, 2015).

        // Ejemplo práctico de rebase
        .simple-example-card.mb-4
          .p-4
            h5.text-purple.mb-3 Ejemplo práctico de uso de rebase
            p.text-muted.mb-3 Supongamos un proyecto con una rama principal (main) y una rama de trabajo (feature-login):
            
            .simple-code-block
              code.text-warning git checkout feature-login
              br
              code.text-warning git rebase main

        // Proceso del rebase en 3 pasos
        .simple-example-card.mb-4
          .p-4
            h5.text-dark.mb-4 Este comando realiza tres pasos:
            
            // Lista numerada de pasos
            .rebase-steps.mb-4
              .rebase-step.mb-3
                .step-number.step-purple 1
                .step-content Toma los commits exclusivos de feature-login.
              
              .rebase-step.mb-3
                .step-number.step-purple 2
                .step-content Los reaplica sobre la punta actual de main.
              
              .rebase-step.mb-3
                .step-number.step-purple 3
                .step-content Reescribe el historial, simulando una línea de desarrollo continua.
            
            // Resultado
            .alert.alert-success.p-3.mb-0
              strong Resultado: 
              | Un historial más claro y secuencial.



    h2.mb-2(data-aos="flip-up") Diferencias entre merge y rebase
    p(data-aos="fade-left").mb-4 A continuación, se comparan ambas estrategias según sus características principales:

    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Diferencia entre #[em merge] y #[em rebase]

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Característica
            th.bg-color-tabla.text-white git merge
            th.bg-color-tabla.text-white git rebase
        tbody
          tr
            td Historial
            td Preserva bifurcaciones y #[em merges]
            td Historial lineal, sin bifurcaciones
          tr
            td Commit adicional
            td Sí (genera un #[em commit] de fusión)
            td No (reescribe los #[em commits] existentes)
          tr
            td Claridad del historial
            td Menor, por ramas entrelazadas
            td Mayor, por secuencia limpia
          tr
            td Conflictos
            td Pueden surgir y se resuelven en conjunto
            td Pueden surgir, se resuelven uno a uno
          tr
            td Ideal para
            td Historial completo y trazabilidad exacta
            td Historial limpio, antes de hacer #[em push]

    // Caso de uso recomendado para rebase
    .bg-full-width.bg-color-purple-light.mb-5.border.border-success-subtle
      .px-4.px-md-5.py-5
        .row.align-items-center.mb-4
          .col-auto
            .tool-icon-container.bg-purple-light
              i.fas.fa-check-circle.fa-2x.text-purple
          .col
            h2.text-dark.mb-0 Caso de uso recomendado

        .row.mb-4
          .col-12
            p.text-muted El rebase es especialmente útil antes de hacer push a un repositorio remoto, cuando se desea mantener un historial limpio y evitar múltiples fusiones innecesarias.

        // Flujo recomendado
        .simple-example-card.mb-4
          .p-4
            h5.text-purple.mb-3 Flujo recomendado:
            
            .simple-code-block
              code.text-warning git checkout feature
              br
              code.text-warning git rebase main
              br
              code.text-muted # Luego de resolver conflictos
              br
              code.text-warning git push origin feature --force

        // Advertencia importante
        .simple-example-card.bg-danger-light.border.border-danger-subtle.mb-0
          .p-4
            .d-flex.align-items-start
              .tool-icon-container.bg-danger-light.me-3
                i.fas.fa-exclamation-circle.fa-2x.text-danger
              div
                h6.text-danger.mb-2 Importante:
                p.mb-0.text-dark No debe usarse rebase en ramas compartidas con commits publicados, ya que reescribir el historial puede causar inconsistencias para otros colaboradores.

    // Bloque Rebase interactivo
    .bg-full-width.bg-color-white-light.mb-5
      .px-4.px-md-5.py-5
        .row.align-items-center.mb-4
          .col-auto
            .tool-icon-container.bg-purple-light
              i.fas.fa-bolt.fa-2x.text-purple
          .col
            h2.text-dark.mb-0 Rebase interactivo (git rebase -i)

        .row.mb-4
          .col-12
            p.text-muted Una variante avanzada es el rebase interactivo, que permite editar, reorganizar o eliminar commits manualmente.

        // Comando ejemplo
        .simple-example-card.mb-4.border-purple-subtle.bg-color-purple-light
          .p-4
            p.text-muted.mb-3 Por ejemplo:
            
            .simple-code-block
              code.text-warning git rebase -i HEAD~3

        .row.mb-4
          .col-12
            p.text-muted Este comando abre una interfaz en el editor de texto donde se puede:

        // Opciones disponibles y utilidad
        .row.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-left")
            .simple-example-card.h-100.border-purple-subtle.bg-color-purple-light
              .p-4
                h5.text-purple.mb-3 Opciones disponibles:
                
                ul.list-unstyled.mb-0
                  li.mb-2
                    strong.text-purple reword: 
                    | Cambiar mensajes de commit
                  li.mb-2
                    strong.text-purple drop: 
                    | Eliminar commits
                  li.mb-2
                    strong.text-purple squash: 
                    | Fusionar varios en uno
                  li.mb-0
                    strong.text-purple edit: 
                    | Modificar el commit

          .col-lg-6.mb-4(data-aos="zoom-in-right")
            .simple-example-card.h-100.border-purple-subtle.bg-color-purple-light
              .p-4
                h5.text-purple.mb-3 Utilidad:
                
                p.text-muted.mb-0 Esto es útil para limpiar el historial antes de compartir los cambios, eliminando commits temporales o combinando cambios relacionados.


    .bg-full-width.bg-color-1.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center.text-white

          .col-lg
            h2.mb-4(data-aos="flip-up") Resolución de conflictos
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Resolución de conflictos, donde se aborda el manejo de discrepancias surgidas al trabajar colaborativamente en archivos de código fuente utilizando sistemas de control de versiones como Git y SVN. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo. ] Resolución de conflictos

    // Bloque actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          Actividad(:cuestionario="cuestionario")
    


    // Bloque 25/21: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://docs.github.com/es" target="_blank" rel="noopener noreferrer") GitHub. (s.f.). Documentación de GitHub. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Fv0M1-KuHAY" target="_blank" rel="noopener noreferrer") Demonassit Mino. (2023, 9 de marzo). Manejo de Ramas en Git [Vídeo]. YouTube.   

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema2,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  methods: {
    obtenerLink(ruta) {
      return ruta
    },
  },
}
</script>

<style lang="sass">
// Estilos personalizados para Git Theme
.git-node
  width: 50px
  height: 50px
  font-size: 1.2rem
  transition: transform 0.3s ease

  &:hover
    transform: scale(1.1)

.command-list
  .command-item
    transition: transform 0.2s ease

    &:hover
      transform: translateX(5px)

    code
      font-size: 0.9rem
      display: block
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

      br
        display: none

      @media (max-width: 768px)
        white-space: normal
        br
          display: block

.custom-image-card-2
  border-radius: 12px
  overflow: hidden
  box-shadow: 0 4px 15px rgba(0,0,0,0.1)
  transition: transform 0.3s ease, box-shadow 0.3s ease

  &:hover
    transform: translateY(-5px)
    box-shadow: 0 8px 25px rgba(0,0,0,0.15)

  .custom-image-card__text
    background: white

// Colores personalizados para tema Git - Paleta mejorada
.bg-color-anexo
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important

.bg-color-1
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important

.bg-color-2
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important

.bg-color-3
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%) !important

.bg-color-4
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%) !important

.bg-color-5
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%) !important

.bg-color-6
  background: #EEF9FE !important
  border-color: rgb(191 219 254)  !important

.text-color-6
  color: rgb(30 64 175) !important

.bg-color-white
  background: #fff !important
  border: 2px solid rgb(191 219 254)  !important
  border-color: rgb(191 219 254)  !important


.bg-color-white-light
  background: #fff !important

.bg-color-black
  background: #000 !important

.bg-color-purple-light
  background: #F4F5FF !important

.bg-color-wine-light
  background: #FCEEFB !important

.text-purple-light
  color: #f093fb !important

.text-purple
  color: #805AD5 !important

.text-git-primary
  color: #f14e32 !important

.text-git-secondary
  color: #6cc04a !important

.text-git-accent
  color: #2188ff !important

// Responsive improvements
@media (max-width: 768px)
  .git-node
    width: 40px
    height: 40px
    font-size: 1rem

  .command-list code
    font-size: 0.8rem

  .row.align-items-center.justify-content-center
    .col-auto
      margin-bottom: 1rem

    i.fas.fa-arrow-right
      transform: rotate(90deg)
      margin: 0.5rem 0

// Animation enhancements
[data-aos="zoom-in-up"], [data-aos="zoom-in-down"]
  .custom-image-card-2
    transition: all 0.6s ease

// Code highlighting improvements
code
  padding: 0.5rem 1rem
  border-radius: 8px
  font-family: 'Fira Code', 'Courier New', monospace
  font-weight: 500
  letter-spacing: 0.5px
  font-size: 0.95rem
  box-shadow: 0 2px 8px rgba(0,0,0,0.1)

.bg-dark code
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%) !important
  border: 1px solid #404040
  color: #f8f8f2 !important

// Mejoras de contraste para comandos Git
.git-command-block
  background: linear-gradient(135deg, #0d1117 0%, #161b22 100%) !important
  border: 2px solid #30363d
  border-radius: 12px
  padding: 1.5rem
  box-shadow: 0 4px 16px rgba(0,0,0,0.3)

  code
    background: transparent !important
    border: none
    box-shadow: none
    color: #58a6ff !important
    font-size: 1rem

    &.text-success
      color: rgb(74 222 128) !important

    &.text-info
      color: #58a6ff !important

    &.text-warning
      color: #f85149 !important

    &.text-yellow
      color: rgb(251 191 36) !important

.bg-yellow-50
  background: rgb(254 252 232) !important
  border: 1px solid rgb(251 191 36) !important

.text-yellow-700
  color: rgb(180 83 9)  !important

.text-success
  color: rgb(74 222 128) !important

.rounded-lg
  border-radius: 0.5rem !important

// Contenedores de iconos de herramientas
.tool-icon-container
  width: 80px
  height: 80px
  border-radius: 1rem
  display: flex
  align-items: center
  justify-content: center
  margin: 0 auto
  transition: transform 0.3s ease

  &:hover
    transform: scale(1.05)

.bg-primary-light
  background-color: rgba(13, 110, 253, 0.1) !important

.bg-success-light
  background-color: rgba(25, 135, 84, 0.1) !important

.bg-purple-light
  background-color: rgba(128, 90, 213, 0.1) !important

// Bloques de código para ejemplos
.code-example-block
  background: #1e1e1e
  border-radius: 8px
  padding: 1rem
  border-left: 4px solid #6366f1
  font-family: 'Fira Code', 'Consolas', monospace
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)

  &.border-success
    border-left-color: #198754

  &.border-info
    border-left-color: #0dcaf0

  &.border-warning
    border-left-color: #ffc107

  code
    color: #f8f8f2
    font-size: 0.9rem
    background: transparent
    padding: 0
    border: none

// Tarjetas de ejemplo con gradientes
.example-card
  border-radius: 16px
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15)
  border: none
  transition: transform 0.3s ease, box-shadow 0.3s ease
  overflow: hidden

  &:hover
    transform: translateY(-5px)
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2)

.bg-gradient-success
  background: linear-gradient(135deg, #198754 0%, #20c997 100%) !important

.bg-gradient-info
  background: linear-gradient(135deg, #0dcaf0 0%, #6610f2 100%) !important

.bg-gradient-warning
  background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%) !important

.bg-info-light
  background-color: rgba(13, 202, 240, 0.1) !important

.bg-warning-light
  background-color: rgba(255, 193, 7, 0.1) !important

.bg-success-light
  background-color: rgba(25, 135, 84, 0.08) !important

.border-success-subtle
  border-color: rgba(25, 135, 84, 0.2) !important

.bg-danger-light
  background-color: rgba(220, 53, 69, 0.08) !important

.border-danger-subtle
  border-color: rgba(220, 53, 69, 0.2) !important

.border-purple-subtle
  border-color: rgb(233 213 255) !important


// Tarjetas simples para el ejemplo (estilo de la imagen)
.simple-example-card
  background: white
  border: 1px solid #e9ecef
  border-radius: 12px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
  transition: box-shadow 0.3s ease

  &:hover
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)

// Bloques de código simples (estilo de la imagen)
.simple-code-block
  background: #2d3748
  border-radius: 8px
  padding: 1rem
  font-family: 'Fira Code', 'Consolas', monospace
  margin: 0

  code
    color: #f7fafc
    font-size: 0.9rem
    background: transparent
    padding: 0
    border: none
    line-height: 1.4

// Estilos para los pasos del rebase
.rebase-steps
  .rebase-step
    display: flex
    align-items: flex-start

    .step-number
      width: 32px
      height: 32px
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
      font-weight: bold
      font-size: 0.9rem
      margin-right: 1rem
      flex-shrink: 0

      &.step-purple
        background-color: rgba(128, 90, 213, 0.15)
        color: #805AD5
        border: 2px solid rgba(128, 90, 213, 0.3)

    .step-content
      flex: 1
      padding-top: 0.25rem
      color: #6c757d
      line-height: 1.5


// Tarjetas con mejor contraste
.enhanced-card
  background: white
  border-radius: 16px
  box-shadow: 0 8px 32px rgba(0,0,0,0.12)
  border: 1px solid rgba(255,255,255,0.2)
  backdrop-filter: blur(10px)
  transition: all 0.3s ease

  &:hover
    transform: translateY(-8px)
    box-shadow: 0 16px 48px rgba(0,0,0,0.2)

  .card-header
    border-radius: 16px 16px 0 0
    padding: 1.5rem
    color: white
    font-weight: 600

    &.git-create
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)

    &.git-merge
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)

    &.git-manage
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)

// Sección con fondo mejorado
.git-flow-section
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  color: white
  position: relative
  overflow: hidden

  &::before
    content: ''
    position: absolute
    top: -50%
    left: -50%
    width: 200%
    height: 200%
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="4"/></g></svg>') repeat
    animation: float 20s infinite linear
    z-index: 0

  h3, h4, p
    color: white !important
    text-shadow: 0 2px 4px rgba(0,0,0,0.3)
    position: relative
    z-index: 1

  .git-flow-icon
    position: relative
    z-index: 1

.git-commands-section
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)
  position: relative
  overflow: hidden

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><path d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/></g></svg>') repeat
    z-index: 0

  h3, p
    color: white !important
    text-shadow: 0 2px 4px rgba(0,0,0,0.3)
    position: relative
    z-index: 1

  img
    position: relative
    z-index: 1

// Animación flotante para el fondo
@keyframes float
  0%
    transform: translate(-50%, -50%) rotate(0deg)
  100%
    transform: translate(-50%, -50%) rotate(360deg)

// Mejoras adicionales para iconos
.git-flow-icon
  i
    text-shadow: 0 4px 8px rgba(0,0,0,0.3)
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2))

// Hover effects mejorados
.enhanced-card
  &:hover
    .card-header
      transform: scale(1.02)

    .git-command-block
      border-color: rgba(255,255,255,0.3)
      box-shadow: 0 6px 20px rgba(0,0,0,0.4)
</style>
