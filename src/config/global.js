export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Control de versiones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas de control (Git, SVN)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción al control de versiones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Funcionamiento básico de Git',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Creación de ramas y fusiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de ramificación (branching)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Creación y gestión de ramas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Flujos de trabajo con ramas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Fusiones (mergers) y sus tipos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Resolución de conflictos en fusiones',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Alternativas a la fusión: el rebase',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Chacon, S., & Straub, B. (2014). Pro Git (2.ª ed.). Apress.',
      link: 'https://git-scm.com/book/es/v2',
    },
    {
      referencia: "Chuck's Academy. (s.f.). Resolución de conflictos en Git.",
      link: 'https://www.chucksacademy.com/es/topic/git-conflicts',
    },
    {
      referencia:
        'Guillamón Morales, A. (2013). Manual desarrollo de elementos software para gestión de sistemas: ( ed.). Editorial CEP, S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50603',
    },
    {
      referencia:
        'Pérez Martínez, E. (2015). Desarrollo de aplicaciones mediante el Framework de Spring: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/107207',
    },
  ],
  glosario: [
    {
      termino: 'Branch (Rama)',
      significado:
        'Línea independiente de desarrollo dentro de un sistema de control de versiones, utilizada para trabajar en nuevas funcionalidades o correcciones sin afectar el código principal.',
    },
    {
      termino: 'Checkout',
      significado:
        'Acción mediante la cual se selecciona una versión específica de un archivo o rama dentro del repositorio para trabajar localmente con ella.',
    },
    {
      termino: 'Commit',
      significado:
        'Registro o confirmación de un conjunto de cambios realizados en archivos del repositorio. Incluye un mensaje descriptivo que ayuda a documentar el historial del proyecto.',
    },
    {
      termino: 'Conflicto de fusión',
      significado:
        'Situación que ocurre cuando dos ramas modifican la misma parte de un archivo de forma incompatible, lo que requiere intervención manual para resolverlo.',
    },
    {
      termino: 'Control de versiones',
      significado:
        'Sistema que permite gestionar los cambios realizados sobre archivos o proyectos a lo largo del tiempo, facilitando la colaboración, el seguimiento y la recuperación de versiones anteriores.',
    },
    {
      termino: 'Fork',
      significado:
        'Copia de un repositorio que permite realizar cambios independientes al proyecto original, comúnmente utilizada en proyectos de código abierto.',
    },
    {
      termino: 'Fusión (Merge)',
      significado:
        'Proceso mediante el cual se integran los cambios de una rama a otra, unificando el historial de desarrollo.',
    },
    {
      termino: 'Git',
      significado:
        'Sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software, que permite trabajar de forma local y sincronizar con repositorios remotos.',
    },
    {
      termino: 'Historial',
      significado:
        'Registro cronológico de todos los commits realizados en un repositorio, que permite rastrear los cambios y sus autores.',
    },
    {
      termino: 'Repositorio',
      significado:
        'Espacio central donde se almacenan los archivos del proyecto y su historial de versiones. Puede ser local o remoto.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'Proceso de revisión y corrección de inconsistencias surgidas durante una fusión, cuando hay modificaciones incompatibles entre ramas.',
    },
    {
      termino: 'SVN (Subversion)',
      significado:
        'Sistema de control de versiones centralizado que permite a múltiples usuarios trabajar sobre un proyecto compartido, con control central del repositorio.',
    },
  ],
}
