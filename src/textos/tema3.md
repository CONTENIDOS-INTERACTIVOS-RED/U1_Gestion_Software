# Tema 3: 3. Aplicación de normas ISO 9001 e ISO/IEC 25010



<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: iconobloque
//assets: 1.svg

//iconobloque 4
En un mundo digital en constante transformación, el desarrollo de software enfrenta exigencias crecientes de calidad, trazabilidad, seguridad y satisfacción del cliente. Ante estas demandas, las normas internacionales de calidad, y particularmente la ISO 9001, constituyen una herramienta clave para garantizar que los procesos de desarrollo, prueba y entrega se realicen bajo principios verificables de excelencia operativa. 


## BLOQUE: color-texto-imagen
//assets: 3.png

//color 12
En proyectos ágiles y de integración continua, los scripts de prueba permiten validar rápidamente si una funcionalidad nueva ha roto alguna parte del sistema existente (pruebas de regresión), asegurando la estabilidad de las versiones liberadas. Por ello, dominar el desarrollo de scripts no solo implica conocer la sintaxis de Selenium o JUnit, sino entender profundamente cómo estructurar, diseñar, mantener y ejecutar scripts eficaces y escalables.

## BLOQUE:

ISO 9001 no es una norma técnica exclusiva del sector de software, sino un marco transversal que establece los requisitos para la implementación de un Sistema de Gestión de la Calidad (SGC), aplicable a cualquier tipo de organización. Sin embargo, cuando se adopta en el contexto del desarrollo de software, esta norma permite establecer procesos estandarizados, documentados, auditables y orientados a la mejora continua, especialmente en lo que respecta al aseguramiento de la calidad del producto final.

//color
    **¿Qué es la norma ISO 9001?**
    La ISO 9001:2015, es una norma internacional publicada por la Organización Internacional de Normalización (ISO), que define los requisitos para un sistema de gestión de calidad eficaz, centrado en la satisfacción del cliente, el cumplimiento de requisitos y la mejora continua de los procesos.
    Es una de las normas más reconocidas y utilizadas en el mundo, con certificaciones activas en más de 170 países. Su enfoque basado en procesos y su estructura modular (conocida como HLS – High Level Structure), permite su integración con otros estándares (ISO 14001, ISO 27001, etc.).

## BLOQUE: titulo-segundo
3.1 Aplicación de ISO 9001 en desarrollo y pruebas de software
Aunque la norma es genérica, sus principios pueden ser plenamente adoptados por organizaciones de desarrollo de software. Algunas áreas donde ISO 9001 aporta gran valor son:

## BLOQUE: tabla

Tabla 4. Áreas de aplicación

Área de aplicación
Ejemplo de alineación con ISO 9001

**Gestión de requisitos del cliente.**
Documentación de historias de usuario, matrices de trazabilidad.

**Control de procesos.**
Definición formal de flujos de pruebas, revisión de código, CI/CD.

**Gestión documental.**
Versionado de artefactos, control de scripts, bitácoras de pruebas.

**Evaluación de desempeño.**
Indicadores de defectos, cobertura, tiempos de respuesta.

**Mejora continua.**
Retrospectivas ágiles + acciones correctivas basadas en datos.

## BLOQUE

**Ejemplo.** Un equipo DevOps puede implementar ISO 9001 asegurando la trazabilidad de cada despliegue a través de pipelines validados, con evidencia de pruebas automatizadas, control de calidad de código y gestión de cambios bajo procedimientos documentados.


## BLOQUE: titulo-segundo
3.2 Principios de gestión de calidad en ISO 9001
La norma se basa en siete principios fundamentales que guían la implementación del SGC en cualquier contexto, incluyendo el desarrollo de software:

## BLOQUE: tabla

Tabla 5. Principios fundamentales

Principio
Aplicación práctica en software

**Enfoque al cliente.**
Priorización de funcionalidades, según valor para el usuario final.

**Liderazgo.**
Rol del Scrum Master o líder técnico, para promover cultura de calidad.

**Compromiso de las personas.**
Empoderamiento del equipo QA, participación en decisiones de mejora.

**Enfoque basado en procesos.**
Mapeo de procesos de testing, automatización, gestión de releases.

**Mejora continua.**
Integración del ciclo PDCA en las retrospectivas y post-mortems.

**Toma de decisiones basada en evidencias.**
Uso de métricas de desempeño para orientar el backlog de calidad.

**Gestión de relaciones.**
Alineación entre desarrolladores, testers, stakeholders y clientes.

## BLOQUE: titulo-segundo
3.3 Estructura de alto nivel (HLS) de la norma ISO 9001
La ISO 9001:2015 presenta una estructura de 10 capítulos. Los capítulos del 4 al 10 contienen los requisitos que deben ser implementados para obtener la certificación.

## BLOQUE: tabla

Tabla 6. Capítulos 4 a 10

Capítulo
Contenido
Aplicación al software

4
Contexto de la organización.
Identificación de partes interesadas y necesidades del cliente.

5
Liderazgo.
Compromiso de la alta dirección con la calidad del producto.

6
Planificación.
Gestión de riesgos técnicos, planificación de versiones y releases.

7
Apoyo (recursos, competencias, información documentada).
Formación en QA, herramientas de testing, gestión del conocimiento.

8
Operación.
Control de cambios, ejecución de pruebas, entrega y despliegue.

9
Evaluación del desempeño.
Indicadores de calidad, auditorías internas, revisiones de código.

10
Mejora.
Acciones correctivas, lecciones aprendidas, optimización de procesos.

## BLOQUE

**Ejemplo aplicado.** La cláusula 8 (Operación) se implementa en desarrollo de software documentando el procedimiento de validación previa a despliegue, incluyendo revisión de código, pruebas automatizadas, pruebas exploratorias y validación con cliente.

## BLOQUE: titulo-segundo
3.4 Ruta estructurada para la implementación
La implementación de un sistema de gestión de calidad bajo la norma ISO 9001 en entornos de desarrollo de software requiere una planificación cuidadosa y una adaptación contextualizada a las particularidades del ciclo de vida del producto digital.

## BLOQUE: anexo-img
//assets: 5.png

### Ruta estructurada para la implementación 
En el PDF Ruta estructurada para la implementación, se describe un proceso dividido en seis etapas clave que guían desde el análisis del contexto organizacional hasta la mejora continua. Este enfoque progresivo permite establecer una base sólida para la estandarización, trazabilidad y optimización de los procesos técnicos y de calidad en proyectos de software.

Anexo_4.pdf

## BLOQUE: titulo-segundo
3.5 Aplicación práctica de las cláusulas ISO 9001 en QA
La norma ISO 9001:2015 estructura sus requisitos fundamentales entre los capítulos 4 al 10. A continuación, se presenta cómo cada uno puede traducirse en prácticas específicas dentro del equipo de pruebas y control de calidad (QA).

## BLOQUE: acordeon 10


Cláusula 4
    **Contexto de la organización**
    
    **Aplicación en QA:**
    //lista-flechas
    - Documentar los tipos de pruebas que se requieren, según tipo de cliente o tipo de producto (móvil, web, API).
    - Identificar restricciones del entorno (tiempo de entrega, ambientes controlados, plataformas).
    - Considerar normas técnicas adicionales (por ejemplo, accesibilidad digital o regulación de datos personales).

    Ejemplo. Un sistema de salud debe cumplir con pruebas específicas de integridad de datos e interoperabilidad conforme a normativas gubernamentales.

---

Cláusula 5
    **Liderazgo**
    
    **Aplicación en QA:**
    //lista-flechas
    - La gerencia debe comprometerse activamente con los procesos de calidad.
    - Designar un responsable del sistema de gestión de calidad con funciones explícitas.
    - Apoyar con recursos humanos y tecnológicos adecuados (automatizadores, licencias de herramientas de testing).

    Caso aplicado. El CTO de una startup asigna presupuesto para la adquisición de licencias de TestRail y capacitación en Cypress para fortalecer los procesos QA.

---

Cláusula 6
    **Planificación**
    
    **Aplicación en QA:**
    //lista-flechas
    - Identificar y documentar riesgos asociados al aseguramiento de calidad (ausencia de pruebas de regresión automatizadas).
    - Establecer objetivos concretos: reducir defectos post-release en un 40 % en 6 meses.

    **Herramienta útil.** Matriz de riesgos QA con impacto, probabilidad y controles proactivos.

---

Cláusula 7
    **Apoyo**

    **Aplicación en QA:**
    //lista-flechas
    - Asegurar competencias del equipo (formaciones, certificaciones ISTQB, experiencia técnica).
    - Gestionar infraestructura: entornos de prueba, herramientas CI/CD, repositorios de evidencias.
    - Documentación: plan de calidad, criterios de aceptación, checklist de pruebas.
    
    **Ejemplo real.** Un equipo QUE documenta sus buenas prácticas en Confluence y mantiene actualizada su wiki de criterios por tipo de prueba (funcional, exploratoria, regresión).

---

Cláusula 8
    **Operación**

    **Aplicación en QA:**
    //lista-flechas
    - Establecer flujos claros para la ejecución de pruebas: desde la recepción de requisitos hasta el cierre de defectos.
    - Mantener trazabilidad entre historias de usuario, pruebas, resultados y validación.
    - Controlar cambios y versionado de scripts automatizados.
    
    **Ejemplo técnico.** Integración de pruebas automatizadas en cada commit usando GitLab CI con reportes automáticos hacia Jira.

---

Cláusula 9
    **Evaluación del desempeño**

    **Aplicación en QA:**
    //lista-flechas
    - Implementar indicadores claves como: tiempo medio de resolución de defectos, tasa de rechazo en QA, cobertura de pruebas.
    - Realizar auditorías internas periódicas de cumplimiento de procesos QA.
    - Analizar feedback del cliente o usuario final post-release.

---

Cláusula 10
    **Mejora**

    **Aplicación en QA:**
    //lista-flechas
    - Establecer mecanismos para identificar no conformidades y aplicar acciones correctivas (revisión de casos de prueba defectuosos, revisión del proceso de revisión de código).
    - Planificar mejoras tras cada retrospectiva técnica.
    
    **Caso práctico.** Al identificar que las pruebas de seguridad no estaban siendo ejecutadas antes del release, el equipo implementa una acción correctiva: agregar validaciones automáticas de OWASP ZAP en cada pipeline de despliegue.

## BLOQUE: actividad

## BLOQUE: bloque-material-complementario

Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389 

miw-upm.[@miwupm](2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube. https://www.youtube.com/watch?v=Lnw1Ftp-x1g 