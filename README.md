# CONTROL-ESCOLAR
##Descripción del Proyecto
El sistema es una Plataforma Web Integral de Gestión Académica y Administrativa diseñada para automatizar, centralizar y optimizar los procesos operativos de una institución educativa de nivel superior.
La aplicación resolverá la fragmentación de la información permitiendo que cinco perfiles de usuarios clave (Alumnos, Profesores, Administrativos Tipo A/B, Directores de Carrera y Secretario Académico) interactúen en un entorno seguro. Desde la inscripción inicial de un alumno y el control de pagos, hasta la gestión de planes de estudio y la generación de reportes estadísticos de deserción y aprovechamiento para la toma de decisiones estratégicas.

*********
##Objetivo del Proyecto
Desarrollar e implementar una solución tecnológica modular y segura que automatice el ciclo de vida académico y administrativo de la institución, reduciendo los tiempos de operación, garantizando la consistencia de los datos de la matrícula y ofreciendo un panel de control avanzado (Home con menús personalizados) según el rol de cada usuario para el término del periodo proyectado.
*********
##Pila Tecnológica
Frontend (Capa de Presentación): * React.js o Angular: Para crear una interfaz SPA (Single Page Application) dinámica, responsiva y eficiente en el manejo del estado global (esencial para los diferentes menús del HOME).

Tailwind CSS / Bootstrap: Para un diseño limpio, institucional y ágil.

Backend (Capa de Lógica de Negocio):

Node.js (Express) o Kotlin (Spring Boot): Ambos ofrecen un excelente rendimiento para APIs RESTful robustas y manejo seguro de autenticación por tokens (JWT).

Base de Datos (Capa de Datos):

PostgreSQL / MySQL: Al ser un sistema escolar con relaciones complejas (un alumno pertenece a una carrera, que tiene un plan de estudio, con materias, horarios, etc.) y transacciones financieras, una base de datos relacional (SQL) con soporte ACID es fundamental.

Autenticación y Seguridad:

JWT (JSON Web Tokens) + Middleware de Roles: Para asegurar que un Administrativo Nivel B no pueda modificar calificaciones, ni un alumno ver reportes de secretaría.
********
##Equipo de desarrollo
Product Owner / Analista de Negocio: Encargado de validar los requerimientos de cada rol (especialmente con Directores y Secretario Académico).
Scrum Master: Para coordinar los sprints y eliminar impedimentos.
Diseñador UI/UX: Crucial para diseñar la vista de HOME y los menús personalizados que cambian dinámicamente según el rol.
Desarrolladores Frontend: Especialistas en la lógica de las vistas, formularios de inscripción y dashboards de reportes.
Desarrolladores Backend: Encargados de la lógica de negocio, control de roles (RBAC), base de datos y lógica de pagos/calificaciones.
Ingeniero QA / Tester: Para asegurar que los flujos críticos (como el CRUD de calificaciones y el registro de pagos) no tengan fallas.
********
##Sprints
¡Entendido! Vamos a eliminar la tabla y a estructurarlo en un formato de lista directa, manteniendo el enfoque de sprints cortos de 1 semana (10 semanas en total). De esta manera es mucho más fácil de leer el flujo paso a paso:

Plan de Sprints Cortos (1 semana por Sprint)
Sprint 1: Base de Datos y Autenticación
Configuración inicial de la base de datos relacional y desarrollo del sistema de Login seguro utilizando tokens (JWT).

Sprint 2: Estructura del HOME y Roles
Maquetación de la vista principal (HOME) y desarrollo de los menús dinámicos que muestran opciones ocultas o visibles según el rol del usuario que inicia sesión.

Sprint 3: Control Escolar Básicos (Alumnos)
Desarrollo del CRUD de Alumnos para gestionar los procesos principales: inscripciones, reinscripciones, bajas y cambios de carrera.

Sprint 4: Finanzas - Vista del Alumno
Implementación del módulo de pagos desde la perspectiva del estudiante: consulta de estados de cuenta, historial y simulación de transacciones.

Sprint 5: Control Escolar Avanzado (Administrativos Nivel A)
Desarrollo de las herramientas para el Administrador A: alta y modificación de profesores, creación de materias y asignación de horarios escolares.

Sprint 6: Operación del Profesor (Calificaciones y Asistencias)
Creación del panel para docentes: captura de calificaciones parciales, finales, exámenes extraordinarios y el sistema para el pase de asistencia diario.

Sprint 7: Tesorería y Becas (Administrativos Nivel B)
Desarrollo de las herramientas para el Administrador B: validación de pagos recibidos, asignación de becas y gestión del estatus del trámite de Titulación.

Sprint 8: Gestión del Director de Carrera
Implementación del panel del Director: CRUD de carreras, planes de estudio y postgrados. Activación del formulario de evaluación docente para que los alumnos califiquen a sus profesores.

Sprint 9: Dashboard de Analíticas (Secretario Académico)
Desarrollo del módulo de reportes avanzados con gráficas visuales sobre la matrícula activa, tasas de deserción y rendimiento/aprovechamiento escolar por grupo, carrera y nivel.

Sprint 10: Auditoría de Seguridad, QA y Despliegue
Fase intensiva de pruebas de control de acceso por roles (asegurar que nadie acceda a funciones que no le corresponden), corrección de errores de último momento y subida de la aplicación al servidor de producción.
