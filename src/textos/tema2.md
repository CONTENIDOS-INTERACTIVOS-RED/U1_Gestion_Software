# Tema 2: 2. Indicadores claves de desempeño (KPIs) en pruebas

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## BLOQUE: texto-iconobloque-imagen 8:4
//assets: 1.svg, 2.png

//texto
El desarrollo de software contemporáneo se ve atravesado por transformaciones profundas derivadas del avance tecnológico, la agilidad de mercado y la hipercompetencia digital. En este contexto, la calidad no puede ser considerada una cualidad espontánea del producto software, sino el resultado planificado de un sistema complejo de decisiones, prácticas, normas, estrategias y validaciones continuas. Entre esas estrategias, la medición sistemática mediante indicadores de desempeño cumple una función vital.

//iconobloque 2
“Lo que no se mide, no se puede controlar. Lo que no se controla, no se puede mejorar”. Peter Drucker

//texto
Aplicada al campo de la ingeniería de software, esta afirmación toma un valor práctico incuestionable. No es posible hablar de mejora continua, eficiencia o madurez organizacional si no se dispone de mecanismos cuantitativos para evaluar el comportamiento de los procesos y la calidad de los productos.


## BLOQUE: imagen-texto-color
//assets: 3.png

//texto
Por tanto, el uso de indicadores de desempeño no solo representa una herramienta técnica, sino una decisión estratégica que permite:

//color
  //lista-flechas
  - Validar el cumplimiento de requisitos.
  - Comparar el estado actual con los estándares esperados.
  - Promover una cultura de transparencia y mejora.
  - Identificar puntos débiles y fortalezas del proceso.
  - Justificar decisiones de automatización, inversión o rediseño.
  
  **Desde una perspectiva académica y profesional, un indicador de desempeño puede definirse como una medida observable, cuantificable y verificable que describe una condición, comportamiento o tendencia, de un aspecto del proceso o producto software.**


## BLOQUE

## Definición técnica (ISO 9001)

//color 4
  Según la norma ISO 9001:2015, los indicadores de desempeño son medios que permiten “Determinar la eficacia y eficiencia de los procesos frente a los objetivos planificados de calidad”.

En el caso específico del software, esto significa evaluar si los procesos de desarrollo, validación, prueba y mantenimiento están alcanzando los niveles esperados de eficiencia, confiabilidad, mantenibilidad, seguridad y satisfacción del usuario.

**Aportes desde la ingeniería del software**
Pressman y Maxim (2015), clasifican las métricas del software en tres grandes familias:

## BLOQUE: infografia

//assets: infografia1.svg

Métricas de producto
Se enfocan en la calidad del software resultante.

---

Métricas de proceso
Evalúan la eficiencia y efectividad de las actividades realizadas.

---

Métricas de proyecto
Miden aspectos como productividad, esfuerzo y planificación.

## BLOQUE: bg-full-icono-texto
//assets: 5.svg

Estas métricas, cuando son seleccionadas, definidas y monitoreadas adecuadamente, se convierten en indicadores de desempeño críticos para la toma de decisiones.

## BLOQUE

## Características de un buen indicador

Para que un indicador sea funcional en contextos reales, debe cumplir con los siguientes atributos:

## BLOQUE: tabla

Tabla 1. Atributos

Característica
Descripción
Ejemplo aplicado en software

**Relevante.**
Mide un aspecto clave del objetivo del proyecto.
Medir cobertura de pruebas, para asegurar calidad del testing.

**Objetivo.**
Se basa en datos verificables, no en percepciones.
Número de fallos detectados por etapa.

**Cuantificable.**
Puede expresarse en valores numéricos o proporciones.
85 % de cobertura de código.

**Comparativo.**
Permite identificar tendencias o establecer líneas base.
Comparar tasa de errores, mes a mes.

**Oportuno.**
Se recolecta con periodicidad adecuada para intervenir procesos.
Reporte semanal de defectos por sprint.

**Comprensible.**
Puede ser interpretado por todo el equipo.
Tiempo promedio de resolución de bugs.

**Accionable.**
Facilita la toma de decisiones concretas.
Reasignación de tareas, si el rendimiento cae.

## BLOQUE: bg-full-icono-texto
//assets: 6.svg

Un mal indicador, en cambio, genera confusión, toma de decisiones erróneas y consumo innecesario de recursos.


## BLOQUE: titulo-segundo

2.1 Modelos de calidad asociados a indicadores

Los indicadores no existen de manera aislada. Se relacionan profundamente con modelos de calidad reconocidos que sirven como referentes conceptuales para establecer qué se debe medir, por qué y cómo.

## Modelo ISO/IEC 25010: calidad del producto software
Este modelo propone una estructura de evaluación compuesta por 8 características principales y sus subcaracterísticas:

## BLOQUE: tabla

Tabla 2. Características y subcaracterísticas

Característica principal
Sub-características
Indicador posible

**Funcionalidad.**
Adecuación funcional, interoperabilidad, seguridad.
Tasa de cumplimiento de casos de uso.

**Fiabilidad.**
Madurez, tolerancia a fallos, disponibilidad.
Porcentaje de tiempo sin fallas.

**Usabilidad.**
Aprendizaje, operabilidad, accesibilidad.
Puntuación de pruebas de experiencia UX.

**Rendimiento.**
Tiempo de respuesta, utilización de recursos.
Tiempo medio de carga de una operación.

**Mantenibilidad.**
Análisis, modificación, prueba, reusabilidad.
Tiempo de corrección de errores (MTTR).

**Portabilidad.**
Adaptabilidad, instalación.
Tasa de éxito en despliegue multiplataforma.

**Seguridad.**
Confidencialidad, autenticidad, trazabilidad.
Número de vulnerabilidades reportadas.

**Compatibilidad.**
Coexistencia e interoperabilidad.
Número de conflictos entre versiones.

## BLOQUE: bg-full-icono-texto
//assets: 6.svg

**Cada una de estas características** puede ser convertida en indicadores si se modela adecuadamente.

## BLOQUE: titulo-segundo

2.2 Clasificación ampliada de los indicadores de desempeño
La correcta clasificación de los indicadores de desempeño es fundamental para establecer sistemas de medición eficaces que impulsen la calidad en el desarrollo de software.

## BLOQUE: anexo-img
//assets: 7.png

### Clasificación ampliada de los indicadores de desempeño 
En el PDF Clasificación ampliada de los indicadores de desempeño, se presenta una tipología detallada que permite segmentar los indicadores según su enfoque, nivel organizacional, naturaleza de los datos y finalidad operativa. Este enfoque integral facilita la toma de decisiones informadas, promueve la mejora continua y alinea los procesos técnicos con los objetivos estratégicos de calidad.

Anexo_2.pdf

## BLOQUE: titulo-segundo

2.3 Etapas para el diseño e implementación de un sistema de indicadores
El diseño e implementación de un sistema de indicadores de desempeño es una actividad estratégica que permite alinear las acciones de los equipos de desarrollo con los objetivos de calidad organizacional.



## BLOQUE: img-anexo
//assets: 8.png

### Etapas para el diseño e implementación de un sistema de indicadores 
En el PDF Etapas para el diseño e implementación de un sistema de indicadores, se describe un proceso estructurado que abarca desde la definición de metas hasta la mejora continua, integrando herramientas, técnicas y criterios de análisis. Este enfoque garantiza que las decisiones técnicas se fundamenten en datos confiables y que los procesos puedan ser evaluados, ajustados y optimizados de manera sistemática.

Anexo_3.pdf



## BLOQUE:

## Caso práctico 1. Automatización de pruebas

//color
La automatización de pruebas es una práctica crítica para proyectos que trabajan con metodologías ágiles o integración continua (CI/CD). Implementar indicadores que evalúen el nivel de automatización permite garantizar eficiencia, velocidad de retroalimentación y reducción del esfuerzo manual.


#### a. Objetivo
Monitorear el grado de automatización de pruebas por tipo y su evolución semanal.

---

#### b. Indicadores utilizados

## BLOQUE: tabla

Tabla 3. Indicadores utilizados

Indicador
Descripción
Fórmula

**Porcentaje de pruebas automatizadas.**
Proporción de pruebas ejecutadas automáticamente.
(Número de pruebas automatizadas / Total de pruebas) × 100.

**Tiempo medio de ejecución de suite.**
Tiempo promedio para ejecutar toda la suite de pruebas.
Suma de tiempos de ejecución / Número de ejecuciones.

**Tasa de fallos detectados automáticamente.**
Defectos encontrados por pruebas automáticas.
Número de defectos detectados por automatización / Total de defectos.


## BLOQUE: figura-completa
//assets: 9.png


Figura 1. Grado de automatización por tipo de prueba



## BLOQUE:

Análisis:

//color
  //lista-flechas
  - Se observa que las pruebas unitarias tienen una automatización del 95%, lo cual es adecuado para garantizar la robustez del código base.
  - Las pruebas funcionales y E2E presentan menores niveles, lo cual puede deberse a complejidad en la configuración de entornos, lo que justifica una priorización de automatización progresiva.

## Integración de indicadores en marcos ágiles y DevOps
La implementación de indicadores puede (y debe) integrarse naturalmente en entornos ágiles:


## BLOQUE: slider-a
//assets: 10.png, 11.png


### En Scrum
  //lista-flechas
  - **En la daily:** revisar métricas de bugs abiertos por sprint.
  - **En la retrospectiva:** analizar indicadores de deuda técnica y cobertura.
  - **En la planificación:** proyectar capacidad con base en velocidad del sprint.

---

### En DevOps
  //lista-flechas
  - Indicadores integrados al pipeline: tiempo de ejecución, tasa de fallos, regresiones.
  - Dashboards en Jenkins, GitLab CI, CircleCI, Azure DevOps.
  - Alertas automáticas por desviaciones críticas (cobertura < 70 %).




## BLOQUE: bloque-material-complementario

Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511 

Kaizen Consultores.  (2024, 22 de agosto) 163 - REMASTER. Básicos sobre Indicadores y Métricos de Desempeño (KPI) [video] YouTube. https://youtu.be/rFsp0jY5uc4?si=8PO7TWAW_JAweTBR 
