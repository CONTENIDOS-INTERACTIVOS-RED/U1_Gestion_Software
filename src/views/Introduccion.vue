<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/3: Primer párrafo con icono destacado

    .bg-color-12.p-5(data-aos="fade-down").tarjeta.mb-5
      .row.align-items-center
        .col-lg-auto
          i.fas.fa-code-branch(style="font-size: 3rem; color: #5C2C88").mb-3.mb-lg-0
        .col-lg
          p.mb-0 En el ámbito de la gestión de software, el control de versiones representa un componente esencial para asegurar la integridad, trazabilidad y evolución ordenada de los proyectos a lo largo del tiempo. Esta unidad se centra en el estudio de las herramientas y prácticas fundamentales que permiten registrar, supervisar y coordinar los cambios en el código fuente y otros elementos del sistema, facilitando el trabajo colaborativo entre desarrolladores y garantizando un flujo de trabajo eficiente.

    // Bloque 2/3: Segundo párrafo con icono lateral

    .row.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block
        i.fas.fa-bullseye(style="font-size: 2.5rem; color: #FF9E18").mx-auto.d-block
      .col-lg-11
        p(data-aos="fade-left") La unidad tiene como propósito que el estudiante comprenda y aplique los principios básicos del control de versiones, dominando tanto herramientas modernas como #[strong Git y Subversion (SVN)], como las estrategias comunes utilizadas en entornos reales de desarrollo. Se introduce al estudiante en la lógica de los repositorios, la gestión de ramas y las fusiones, promoviendo una visión clara sobre cómo organizar versiones paralelas de un proyecto sin perder el control del historial ni comprometer la estabilidad del sistema.

    // Bloque 3/3: Tercer párrafo con bloque destacado
    .bg-color-1.p-4(data-aos="fade-left").tarjeta
      .row.align-items-center
        .col-lg-auto
          i.fab.fa-git-alt.fa-3x.mb-3.mb-lg-0
        .col-lg
          p.mb-0 Uno de los aspectos más relevantes abordados es la #[strong creación y gestión de ramas], una práctica indispensable para mantener líneas de desarrollo independientes que puedan integrarse de forma segura. Asimismo, se profundiza en el proceso de #[strong fusión de ramas (merge)] y en la resolución de conflictos, una habilidad crítica para prevenir errores que puedan afectar la calidad del producto final. La correcta aplicación de estas técnicas permite minimizar el retrabajo, optimizar los ciclos de integración y facilitar la colaboración entre múltiples miembros del equipo.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
