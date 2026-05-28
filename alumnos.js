// Clase que define la estructura de un Alumno
class Alumno {
    constructor(matricula, nombre, carrera) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.carrera = carrera;
        this.estatus = 'Inscrito'; // Estados: Inscrito, Reinscrito, Baja
        this.historialPagos = [];
    }
}

// Sistema de Gestión de Alumnos
class GestionAlumnos {
    constructor() {
        this.alumnos = [];
    }

    // 1. Inscripción (Crear nuevo alumno)
    inscribirAlumno(matricula, nombre, carrera) {
        const existe = this.alumnos.find(a => a.matricula === matricula);
        if (existe) {
            console.log(`❌ Error: La matrícula ${matricula} ya está registrada.`);
            return;
        }
        const nuevoAlumno = new Alumno(matricula, nombre, carrera);
        this.alumnos.push(nuevoAlumno);
        console.log(`✅ Alumno inscrito con éxito: ${nombre} (${carrera})`);
    }

    // 2. Reinscripción
    reinscribirAlumno(matricula) {
        const alumno = this.alumnos.find(a => a.matricula === matricula);
        if (!alumno) {
            console.log(`❌ Alumno con matrícula ${matricula} no encontrado.`);
            return;
        }
        if (alumno.estatus === 'Baja') {
            console.log(`⚠️ El alumno está dado de baja. Debe reactivar su situación primero.`);
            return;
        }
        alumno.estatus = 'Reinscrito';
        console.log(`🔄 Alumno ${alumno.nombre} reinscrito exitosamente para el nuevo periodo.`);
    }

    // 3. Baja de Alumno
    darDeBaja(matricula) {
        const alumno = this.alumnos.find(a => a.matricula === matricula);
        if (!alumno) {
            console.log(`❌ Alumno con matrícula ${matricula} no encontrado.`);
            return;
        }
        alumno.estatus = 'Baja';
        console.log(`🛑 El alumno ${alumno.nombre} ha sido dado de baja del sistema.`);
    }

    // 4. Cambio de Carrera
    cambiarCarrera(matricula, nuevaCarrera) {
        const alumno = this.alumnos.find(a => a.matricula === matricula);
        if (!alumno) {
            console.log(`❌ Alumno con matrícula ${matricula} no encontrado.`);
            return;
        }
        const carreraAnterior = alumno.carrera;
        alumno.carrera = nuevaCarrera;
        console.log(`💼 Cambio de carrera exitoso para ${alumno.nombre}: De ${carreraAnterior} a ${nuevaCarrera}.`);
    }

    // 5. Registro de Pagos
    registrarPago(matricula, monto, concepto) {
        const alumno = this.alumnos.find(a => a.matricula === matricula);
        if (!alumno) {
            console.log(`❌ Alumno con matrícula ${matricula} no encontrado.`);
            return;
        }
        const pago = {
            monto: monto,
            concepto: concepto,
            fecha: new Date().toLocaleDateString()
        };
        alumno.historialPagos.push(pago);
        console.log(`💰 Pago registrado para ${alumno.nombre}: $${monto} por concepto de '${concepto}'.`);
    }

    // Mostrar reporte general en consola
    mostrarReporteAlumnos() {
        console.log("\n=== REPORTE GENERAL DE ALUMNOS ===");
        console.dir(this.alumnos, { depth: null });
    }
}

// --- PRUEBA DEL SISTEMA ---
const sistema = new GestionAlumnos();

// Ejecutando transacciones de prueba:
sistema.inscribirAlumno('ALU101', 'Juan Carlos Benítez', 'Ingeniería en Software');
sistema.inscribirAlumno('ALU102', 'Ana Delgado', 'Administración');

// Registrar un pago
sistema.registrarPago('ALU101', 2500, 'Inscripción primer semestre');

// Realizar una reinscripción
sistema.reinscribirAlumno('ALU102');

// Hacer un cambio de carrera
sistema.cambiarCarrera('ALU101', 'Sistemas Computacionales');

// Dar de baja a un alumno
sistema.darDeBaja('ALU102');

// Ver cómo quedó la base de datos temporal
sistema.mostrarReporteAlumnos();
