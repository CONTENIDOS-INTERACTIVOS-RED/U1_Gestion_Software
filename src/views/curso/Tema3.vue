<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Aplicación de normas ISO 9001 e ISO/IEC 25010'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/14: iconobloque

    .bg-color-2.p-4.mb-4(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 En un mundo digital en constante transformación, el desarrollo de software enfrenta exigencias crecientes de calidad, trazabilidad, seguridad y satisfacción del cliente. Ante estas demandas, las normas internacionales de calidad, y particularmente la ISO 9001, constituyen una herramienta clave para garantizar que los procesos de desarrollo, prueba y entrega se realicen bajo principios verificables de excelencia operativa.


    // Bloque 3/14: texto normal
    .row.justify-content-center.mb-5
      .col-12
        p(data-aos="fade-left").mb-5 ISO 9001 no es una norma técnica exclusiva del sector de software, sino un marco transversal que establece los requisitos para la implementación de un Sistema de Gestión de la Calidad (SGC), aplicable a cualquier tipo de organización. Sin embargo, cuando se adopta en el contexto del desarrollo de software, esta norma permite establecer procesos estandarizados, documentados, auditables y orientados a la mejora continua, especialmente en lo que respecta al aseguramiento de la calidad del producto final.

        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-3 #[strong ¿Qué es la norma ISO 9001?]
          p.mb-0 La ISO 9001:2015, es una norma internacional publicada por la Organización Internacional de Normalización (ISO), que define los requisitos para un sistema de gestión de calidad eficaz, centrado en la satisfacción del cliente, el cumplimiento de requisitos y la mejora continua de los procesos. Es una de las normas más reconocidas y utilizadas en el mundo, con certificaciones activas en más de 170 países. Su enfoque basado en procesos y su estructura modular (conocida como HLS – High Level Structure), permite su integración con otros estándares (ISO 14001, ISO 27001, etc.).

    // Bloque 4/14: titulo-segundo
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Aplicación de ISO 9001 en desarrollo y pruebas de software

    p(data-aos="fade-left").mb-5 Aunque la norma es genérica, sus principios pueden ser plenamente adoptados por organizaciones de desarrollo de software. Algunas áreas donde ISO 9001 aporta gran valor son:

    // Bloque 5/14: tabla
    .titulo-figura.mb-2
      h5 Tabla 4. 
      span Áreas de aplicación

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Área de aplicación
            th.bg-color-tabla.text-white Ejemplo de alineación con ISO 9001
        tbody
          tr
            td #[strong Gestión de requisitos del cliente.]
            td Documentación de historias de usuario, matrices de trazabilidad.
          tr
            td #[strong Control de procesos.]
            td Definición formal de flujos de pruebas, revisión de código, CI/CD.
          tr
            td #[strong Gestión documental.]
            td Versionado de artefactos, control de scripts, bitácoras de pruebas.
          tr
            td #[strong Evaluación de desempeño.]
            td Indicadores de defectos, cobertura, tiempos de respuesta.
          tr
            td #[strong Mejora continua.]
            td Retrospectivas ágiles + acciones correctivas basadas en datos.

    .alert.alert-primary.p-4(data-aos="fade-left").mb-5
      p.mb-0 #[strong Ejemplo.] Un equipo DevOps puede implementar ISO 9001 asegurando la trazabilidad de cada despliegue a través de pipelines validados, con evidencia de pruebas automatizadas, control de calidad de código y gestión de cambios bajo procedimientos documentados.

    // Bloque 6/14: titulo-segundo
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Principios de gestión de calidad en ISO 9001

    p(data-aos="fade-left") La norma se basa en siete principios fundamentales que guían la implementación del SGC en cualquier contexto, incluyendo el desarrollo de software:

    // Bloque 7/14: tabla
    .titulo-figura.mb-2.mt-5
      h5 Tabla 5. 
      span Principios fundamentales

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Principio
            th.bg-color-tabla.text-white Aplicación práctica en software
        tbody
          tr
            td #[strong Enfoque al cliente.]
            td Priorización de funcionalidades, según valor para el usuario final.
          tr
            td #[strong Liderazgo.]
            td Rol del Scrum Master o líder técnico, para promover cultura de calidad.
          tr
            td #[strong Compromiso de las personas.]
            td Empoderamiento del equipo QA, participación en decisiones de mejora.
          tr
            td #[strong Enfoque basado en procesos.]
            td Mapeo de procesos de testing, automatización, gestión de releases.
          tr
            td #[strong Mejora continua.]
            td Integración del ciclo PDCA en las retrospectivas y post-mortems.
          tr
            td #[strong Toma de decisiones basada en evidencias.]
            td Uso de métricas de desempeño para orientar el backlog de calidad.
          tr
            td #[strong Gestión de relaciones.]
            td Alineación entre desarrolladores, testers, stakeholders y clientes.

    // Bloque 8/14: titulo-segundo
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Estructura de alto nivel (HLS) de la norma ISO 9001

    p(data-aos="fade-left") La ISO 9001:2015 presenta una estructura de 10 capítulos. Los capítulos del 4 al 10 contienen los requisitos que deben ser implementados para obtener la certificación.

    // Bloque 9/14: tabla
    .titulo-figura.mb-2.mt-5
      h5 Tabla 6. 
      span Capítulos 4 a 10

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Capítulo
            th.bg-color-tabla.text-white Contenido
            th.bg-color-tabla.text-white Aplicación al software
        tbody
          tr
            td 4
            td Contexto de la organización.
            td Identificación de partes interesadas y necesidades del cliente.
          tr
            td 5
            td Liderazgo.
            td Compromiso de la alta dirección con la calidad del producto.
          tr
            td 6
            td Planificación.
            td Gestión de riesgos técnicos, planificación de versiones y releases.
          tr
            td 7
            td Apoyo (recursos, competencias, información documentada).
            td Formación en QA, herramientas de testing, gestión del conocimiento.
          tr
            td 8
            td Operación.
            td Control de cambios, ejecución de pruebas, entrega y despliegue.
          tr
            td 9
            td Evaluación del desempeño.
            td Indicadores de calidad, auditorías internas, revisiones de código.
          tr
            td 10
            td Mejora.
            td Acciones correctivas, lecciones aprendidas, optimización de procesos.

    .alert.alert-primary.p-4(data-aos="fade-left").mb-5
      p.mb-0 #[strong Ejemplo aplicado.] La cláusula 8 (Operación) se implementa en desarrollo de software documentando el procedimiento de validación previa a despliegue, incluyendo revisión de código, pruebas automatizadas, pruebas exploratorias y validación con cliente.

    // Bloque 10/14: titulo-segundo
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Ruta estructurada para la implementación

    p(data-aos="fade-left") La implementación de un sistema de gestión de calidad bajo la norma ISO 9001 en entornos de desarrollo de software requiere una planificación cuidadosa y una adaptación contextualizada a las particularidades del ciclo de vida del producto digital.

    // Bloque 11/14: anexo-img
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Ruta estructurada para la implementación
            p.mb-4(data-aos="fade-right") En el PDF Ruta estructurada para la implementación, se describe un proceso dividido en seis etapas clave que guían desde el análisis del contexto organizacional hasta la mejora continua. Este enfoque progresivo permite establecer una base sólida para la estandarización, trazabilidad y optimización de los procesos técnicos y de calidad en proyectos de software.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ruta estructurada para la implementación

    // Bloque 12/14: titulo-segundo
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Aplicación práctica de las cláusulas ISO 9001 en QA

    p(data-aos="fade-left").mb-5 La norma ISO 9001:2015 estructura sus requisitos fundamentales entre los capítulos 4 al 10. A continuación, se presenta cómo cada uno puede traducirse en prácticas específicas dentro del equipo de pruebas y control de calidad (QA).

    .row.justify-content-center.mb-5
      .col-lg-10

        // Bloque 13/14: acordeon 10
        AcordionA(tipo="b")
          .div(titulo="Cláusula 4 - Contexto de la organización")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Documentar los tipos de pruebas que se requieren, según tipo de cliente o tipo de producto (móvil, web, API).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Identificar restricciones del entorno (tiempo de entrega, ambientes controlados, plataformas).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Considerar normas técnicas adicionales (por ejemplo, accesibilidad digital o regulación de datos personales).
            p Ejemplo. Un sistema de salud debe cumplir con pruebas específicas de integridad de datos e interoperabilidad conforme a normativas gubernamentales.

          .div(titulo="Cláusula 5 - Liderazgo")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | La gerencia debe comprometerse activamente con los procesos de calidad.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Designar un responsable del sistema de gestión de calidad con funciones explícitas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Apoyar con recursos humanos y tecnológicos adecuados (automatizadores, licencias de herramientas de testing).
            p Caso aplicado. El CTO de una startup asigna presupuesto para la adquisición de licencias de TestRail y capacitación en Cypress para fortalecer los procesos QA.

          .div(titulo="Cláusula 6 - Planificación")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Identificar y documentar riesgos asociados al aseguramiento de calidad (ausencia de pruebas de regresión automatizadas).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Establecer objetivos concretos: reducir defectos post-release en un 40 % en 6 meses.
            p #[strong Herramienta útil.] Matriz de riesgos QA con impacto, probabilidad y controles proactivos.

          .div(titulo="Cláusula 7 - Apoyo")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Asegurar competencias del equipo (formaciones, certificaciones ISTQB, experiencia técnica).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Gestionar infraestructura: entornos de prueba, herramientas CI/CD, repositorios de evidencias.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Documentación: plan de calidad, criterios de aceptación, checklist de pruebas.
            p #[strong Ejemplo real.] Un equipo QUE documenta sus buenas prácticas en Confluence y mantiene actualizada su wiki de criterios por tipo de prueba (funcional, exploratoria, regresión).

          .div(titulo="Cláusula 8 - Operación")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Establecer flujos claros para la ejecución de pruebas: desde la recepción de requisitos hasta el cierre de defectos.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Mantener trazabilidad entre historias de usuario, pruebas, resultados y validación.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Controlar cambios y versionado de scripts automatizados.
            p #[strong Ejemplo técnico.] Integración de pruebas automatizadas en cada commit usando GitLab CI con reportes automáticos hacia Jira.

          .div(titulo="Cláusula 9 - Evaluación del desempeño")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Implementar indicadores claves como: tiempo medio de resolución de defectos, tasa de rechazo en QA, cobertura de pruebas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Realizar auditorías internas periódicas de cumplimiento de procesos QA.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Analizar feedback del cliente o usuario final post-release.
            
            figure
              img(src='@/assets/curso/tema3/6.png', alt='', style="max-width: 800px;").mx-auto

          .div(titulo="Cláusula 10 - Mejora")
            h5.mb-2 Aplicación en QA:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Establecer mecanismos para identificar no conformidades y aplicar acciones correctivas (revisión de casos de prueba defectuosos, revisión del proceso de revisión de código).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Planificar mejoras tras cada retrospectiva técnica.
            p #[strong Caso práctico.] Al identificar que las pruebas de seguridad no estaban siendo ejecutadas antes del release, el equipo implementa una acción correctiva: agregar validaciones automáticas de OWASP ZAP en cada pipeline de despliegue.

    // Bloque 14/15: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque 15/15: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Lnw1Ftp-x1g" target="_blank" rel="noopener noreferrer") miw-upm.[@miwupm](2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema3,
    }
  },
  methods: {
    obtenerLink(recurso) {
      return `${process.env.BASE_URL}downloads/${recurso}`
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
