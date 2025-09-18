<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Herramientas de control (Git, SVN)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/13: Introducción principal

    p Las herramientas de control de versiones, como Git y SVN (Subversion), son fundamentales en la gestión de software, ya que permiten llevar un registro detallado de los cambios realizados en el código a lo largo del tiempo (Guillamón Morales, 2013). Facilitan la colaboración entre múltiples desarrolladores, garantizando que cada contribución se integre de manera organizada y segura.


    .alert.alert-info.mb-5.p-4.tarjeta
      p.mb-0 #[strong Git], ampliamente #[strong adoptado en entornos distribuidos], ofrece gran flexibilidad en la creación de ramas, fusiones y resolución de conflictos. Por su parte, #[strong SVN] se basa en un #[strong modelo centralizado] que sigue siendo útil en ciertos contextos empresariales. Dominar estas herramientas es clave para el trabajo en equipo y la trazabilidad de los proyectos de software.

    // Bloque 2/13: Título segundo - Introducción al control de versiones
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Introducción al control de versiones

    // Bloque 3/13: Contenido de introducción al control de versiones
    p El control de versiones es una práctica esencial en el desarrollo de software, orientada a registrar, organizar y gestionar de manera sistemática los cambios realizados sobre archivos —principalmente código fuente— durante el ciclo de vida de un proyecto. Esta técnica permite mantener un historial detallado de cada modificación, facilitando así la trazabilidad, la colaboración y la recuperación ante errores (Guillamón Morales, 2013).
    
    .alert.bg-color-12.p-4(data-aos="fade-down").mb-3.tarjeta
      .row.align-items-center
        .col-lg-auto
          i.fas.fa-code-branch(style="font-size: 3rem; color: #5C2C88").mb-3.mb-lg-0
        .col-lg
          p.mb-0 En esencia, el control de versiones actúa como una especie de "máquina del tiempo" para el desarrollo de software. Cada vez que un desarrollador realiza un cambio y lo registra en el sistema (proceso conocido como commit), se guarda una instantánea del estado del proyecto en ese momento. Esto hace posible revisar, comparar y restaurar versiones anteriores del código si fuera necesario, lo cual es invaluable para el mantenimiento y la evolución del software (Pérez Martínez, 2015). Los objetivos del control de versiones son:


    .bg-full-width.bg-gradiente-3
      .p-4.p-md-5
        // Bloque 4/13: Tarjetas-boton - Objetivos del control de versiones (4 tarjetas)
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/1.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-3.text-center Trazabilidad
              p.mb-0.text-center Permite identificar quién realizó un cambio, cuándo lo hizo y cuál fue el motivo. Promueve la responsabilidad y la transparencia del equipo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/2.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-3.text-center Recuperación ante errores
              p.mb-0.text-center Si una modificación genera fallos o resultados no deseados, el sistema permite volver a un estado anterior estable del proyecto.
        

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/3.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-3.text-center Colaboración eficiente
              p.mb-0.text-center Varios desarrolladores pueden trabajar simultáneamente en diferentes funcionalidades sin sobrescribir el trabajo de los demás.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/3.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-3.text-center Auditoría del código
              p.mb-0.text-center Facilita la revisión de cambios, análisis de contribuciones y documentación automática del progreso del desarrollo (Pérez Martínez, 2015).


    // Bloque 5/13: Tipos de control de versiones
    .row.justify-content-center.mb-5
      .col-12
        h3 Tipos de control de versiones
        p Existen dos modelos principales de control de versiones, cada uno con características y aplicaciones específicas:

    // Bloque 6/13: Tarjetas-boton - Tipos de control de versiones (2 tarjetas)
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .alert.bg-color-12.tarjeta.px-4.py-5.h-100.text-center
          .icon-wrapper.mb-4
            i.fas.fa-server(style="font-size: 3rem; color: #6F42C1")
          h4.mb-3 Centralizado (CVCS – Centralized Version Control System)
          p.mb-0 Todos los cambios se gestionan desde un único servidor central. Herramientas como Subversion (SVN) siguen este modelo. Es más fácil de controlar, pero vulnerable a fallos del servidor central.
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .alert.bg-color-9.tarjeta.px-4.py-5.h-100.text-center
          .icon-wrapper.mb-4
            i.fas.fa-network-wired(style="font-size: 3rem; color: #17A2B8")
          h4.mb-3 Distribuido (DVCS – Distributed Version Control System)
          p.mb-0 Cada desarrollador tiene una copia completa del repositorio, permitiendo trabajar localmente y sincronizar cambios después. Git es el ejemplo más representativo, destacando por su flexibilidad y capacidad de manejar proyectos grandes y distribuidos.

    // Bloque 7/13: Importancia del control de versiones en la industria
    .row.justify-content-center.mb-4
      .col-12
        h3 Importancia del control de versiones en la industria
        p.mb-4 El control de versiones no solo es útil para los desarrolladores, sino que también aporta un valor significativo a nivel organizacional (Pérez Martínez, 2015). Equipos ágiles, metodologías DevOps, pruebas automatizadas y despliegues continuos dependen de una gestión robusta del código fuente. Herramientas como Git no solo permiten versionar archivos, sino también integrarse con sistemas de integración continua (CI), plataformas de revisión de código como GitHub o GitLab, y herramientas de gestión de proyectos.
        p #[strong Los errores comunes al no usar control de versiones son:]

    // Bloque 8/13: Iconos-color - Errores comunes (primer par)
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .alert.alert-danger.tarjeta.p-4(data-aos="fade-left").h-100.mb-0
          .row.align-items-center
            .col-lg-auto
              i.fas.fa-exclamation-triangle(style="font-size: 2.5rem; color: #DC3545").mx-auto
            .col-lg
              p.mb-0 Perder cambios por sobrescritura o eliminación accidental de archivos.
      .col-lg-6
        .alert.alert-warning.tarjeta.p-4(data-aos="fade-left").h-100.mb-0
          .row.align-items-center
            .col-lg-auto
              i.fas.fa-user-times(style="font-size: 2.5rem; color: #FFC107").mx-auto
            .col-lg
              p.mb-0 Dificultad para colaborar entre varios desarrolladores.

    // Bloque 9/13: Iconos-color - Errores comunes (segundo par)
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6
        .alert.bg-color-12.tarjeta.p-4(data-aos="fade-left").h-100.mb-0
          .row.align-items-center
            .col-lg-auto
              i.fas.fa-shield-alt(style="font-size: 2.5rem; color: #6F42C1").mx-auto
            .col-lg
              p.mb-0 Ausencia de respaldo para identificar qué cambios introdujeron errores.
      .col-lg-6
        .alert.alert-success.tarjeta.p-4(data-aos="fade-left").h-100.mb-0
          .row.align-items-center
            .col-lg-auto
              i.fas.fa-file-alt(style="font-size: 2.5rem; color: #28A745").mx-auto
            .col-lg
              p.mb-0 Falta de documentación de la evolución del proyecto.

    // Bloque 10/13: Título segundo - Funcionamiento básico de Git
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Funcionamiento básico de Git

    // Bloque 11/13: Contenido funcionamiento básico de Git
    .row.justify-content-center.mb-5
      .col-12
        p Git es un sistema de control de versiones distribuido que permite a los desarrolladores llevar un registro preciso y confiable de los cambios realizados en archivos, especialmente en proyectos de software (Guillamón Morales, 2013). Su funcionamiento se basa en la creación de un historial estructurado de modificaciones, con la capacidad de colaborar de forma eficiente sin perder información ni sobrescribir el trabajo de otros.
        p A diferencia de los sistemas centralizados, Git permite que cada usuario tenga una copia completa del repositorio, incluyendo todo su historial, ramas y configuraciones. Esto significa que operaciones como consultar el historial, realizar cambios, crear ramas o comparar versiones pueden realizarse de forma local, sin conexión a internet. Posteriormente, los cambios se sincronizan con otros desarrolladores a través de servidores remotos.
        p Los conceptos fundamentales en el funcionamiento de Git son:

    // Bloque 12/13: Infografía - Conceptos fundamentales de Git
    .bg-full-width.bg-color-anexo.mb-5
      .px-4.px-md-5.pt-4.pt-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/infografia1.svg', alt='', style="max-width: 1329px;").mx-auto

              .bg-color-white.box-shadow.p-3(x="65%" y="12.5%" numero="+")
                h5 Repositorio (repository)
                p Espacio donde se almacena el historial completo de un proyecto. Puede ser local (en el equipo del desarrollador) o remoto (en plataformas como GitHub o GitLab).

              .bg-color-white.box-shadow.p-3(x="17%" y="34%" numero="+")
                h5 Área de trabajo (working directory)
                p Entorno local donde el desarrollador edita los archivos. Todos los cambios comienzan aquí.

              .bg-color-white.box-shadow.p-3(x="52%" y="58%" numero="+")
                h5 Área de preparación (staging area)
                p Zona temporal donde se guardan los cambios seleccionados antes de confirmarlos. Es como una lista previa al commit.

              .bg-color-white.box-shadow.p-3(x="26.5%" y="5.5%" numero="+")
                h5 Confirmación (commit)
                p Instantánea del proyecto en un momento específico. Registra qué se cambió, quién lo hizo y cuándo. Forma parte del historial del repositorio.

              .bg-color-white.box-shadow.p-3(x="66%" y="31%" numero="+")
                h5 Rama (branch)
                p Línea independiente de desarrollo. La rama principal suele llamarse main o master. Se crean ramas secundarias para nuevas funciones o correcciones sin afectar el código principal.

              .bg-color-white.box-shadow.p-3(x="21%" y="22%" numero="+")
                h5 Fusión (merge)
                p Proceso de integrar los cambios de una rama en otra, unificando distintas líneas de desarrollo.

              .bg-color-white.box-shadow.p-3(x="62%" y="45%" numero="+")
                h5 Repositorio remoto (remote repository)
                p Copia del repositorio alojada en un servidor remoto. Facilita la colaboración entre múltiples desarrolladores. Se sincroniza con los comandos push (subir cambios) y pull (descargar cambios).

    // Bloque 13/13: Flujo básico de trabajo en Git
    .row.justify-content-center.mb-5
      .col-12
        h3 Flujo básico de trabajo en Git
        p El funcionamiento cotidiano de Git sigue un flujo simple y lógico:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 El desarrollador modifica archivos en su #[strong área de trabajo].

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 Agrega los archivos al #[strong área de preparación] con git add.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 Confirma los cambios con #[strong git commit].

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Sube los cambios al repositorio remoto con #[strong git push].

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 5
          p.text-center.mb-0 Para traer cambios del repositorio remoto, usa #[strong git pull].


    .row.justify-content-center.mb-5
      .col-12
        p.mb-0 Este flujo permite un control granular sobre los cambios, facilita la colaboración y mantiene un historial ordenado del desarrollo.

    .alert.bg-color-12.mb-5.p-4.tarjeta
      h3 Ejemplo práctico del funcionamiento básico de Git
      p.mb-0 Imaginemos que una desarrolladora llamada Laura trabaja en un proyecto web y desea añadir una nueva funcionalidad a la página de contacto. Para ello, sigue un flujo básico de Git en su computadora local. A continuación, se describen los pasos que realiza:

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col.mb-4.mb-md-0
          h4 Inicialización del repositorio
          p Laura abre la terminal, se ubica en la carpeta del proyecto y ejecuta git init. Esto convierte la carpeta en un repositorio de Git, habilitado para llevar control de versiones.

      .row
        .col
          h4 Verificación del estado del repositorio
          p Ejecuta git status para verificar si hay archivos nuevos, modificados o listos para confirmar.

          

      .row
        .col.mb-4.mb-md-0
          h4 Agregar archivos al área de preparación
          p Laura crea el archivo formulario-contacto.html y lo agrega con git add formulario-contacto.html. El archivo se mueve al staging area.


      .row
        .col.mb-4.mb-md-0
          h4 Confirmación (commit)
          p Realiza la confirmación con git commit -m "Añadir formulario de contacto", guardando el estado del archivo junto con una descripción del cambio.

      .row
        .col.mb-4.mb-md-0
          h4 Conexión con repositorio remoto
          p Conecta su repositorio local a GitHub con git remote add origin https://github.com/laura/proyecto-web.git.

      .row
        .col.mb-4.mb-md-0
          h4 Envío de cambios al repositorio remoto
          p Usa git push -u origin main para subir los commits a la rama principal del repositorio remoto.

      .row
        .col.mb-4.mb-md-0
          h4 Descarga de cambios recientes
          p Ejecuta git pull origin main para actualizar su repositorio local con los cambios del equipo, evitando conflictos.





    // Bloque 14/13: Figura completa
    .titulo-figura.mb-2
      h5 Figura 1. 
      span Flujo de trabajo con Git

    figure.bg-color-sintesis.p-4.p-md-5
      img(src="@/assets/curso/tema1/figura1.svg", data-aos="zoom-in", style="max-width: 900px").mx-auto
    figcaption.mt-2.text-center.mb-5 Nota. Villacis, G. (2024, julio 17). Tutorial de flujo de trabajo con Git: ¡Empieza a usar los comandos básicos de Git AHORA!. DEV Community.


    .bg-full-width.bg-color-anexo.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center.text-white

          .col-lg
            h2.mb-4(data-aos="flip-up") Control de versiones y plataformas colaborativas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Control de versiones y plataformas colaborativas, donde se aborda el uso estratégico de sistemas como Git y SVN para gestionar versiones de código fuente, así como su integración con plataformas colaborativas como GitHub, GitLab, Bitbucket, VisualSVN y Assembla.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Control de versiones y plataformas colaborativas


    // Bloque 16/13: Material complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario que les permitirá profundizar en los conceptos estudiados sobre control de versiones con Git y SVN.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://docs.github.com/es" target="_blank" rel="noopener noreferrer") GitHub. (s.f.). Documentación de GitHub.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Fv0M1-KuHAY" target="_blank" rel="noopener noreferrer") Demonassit Mino. (2023, 9 de marzo). Manejo de Ramas en Git [Vídeo]. YouTube.

    
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-anexo
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important
</style>
