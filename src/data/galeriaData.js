// Instrucciones:
// 1. Descarga las imágenes que quieras usar (sin IA) y guárdalas en la carpeta "public/galeria" de tu proyecto.
// 2. En este archivo, actualiza el campo "image" con el nombre exacto de tu imagen (ej. "/galeria/mi-fusible.jpg").
// 3. Modifica el "title" y "description" según corresponda a cada imagen.

export const galeriaData = [
    {
        "id": 1,
        "title": "Tipos de Interruptores Diferenciales",
        "description": "Diferentes modelos y gamas comerciales de interruptores diferenciales usados en instalaciones domésticas y terciarias.",
        "image": "/galeria/Tipos-de-interruptores-diferenciales.png"
    },
    {
        "id": 2,
        "title": "Animación de un Interruptor Diferencial",
        "description": "Diagrama animado que muestra cómo el diferencial corta el circuito al detectar una corriente de fuga hacia tierra.",
        "image": "/galeria/animacion-interruptor-diferencial.gif"
    },
    {
        "id": 3,
        "title": "Bornera Unipolar a Tierra",
        "description": "Regleta utilizada en tableros eléctricos para concentrar y derivar todas las conexiones del conductor de protección (Tierra).",
        "image": "/galeria/bornera-unipolar-tierra.jpg"
    },
    {
        "id": 4,
        "title": "Conexión de Electrodo de Tierra",
        "description": "Detalle de la conexión física mediante grampas bimetálicas de un cable conductor desnudo a una jabalina cobreada.",
        "image": "/galeria/conexion-electrodo-de-tierra.png"
    },
    {
        "id": 5,
        "title": "Equipotencialidad Estructural",
        "description": "Ejemplo práctico de conexión a tierra de estructuras metálicas expuestas para evitar tensiones de contacto peligrosas.",
        "image": "/galeria/conexion-tierra-estructura.jpg"
    },
    {
        "id": 6,
        "title": "Contactor con Relé Térmico",
        "description": "Conjunto montado (arrancador directo), mostrando el relé térmico acoplado físicamente bajo el contactor.",
        "image": "/galeria/contactor-termico-acoplado.jpg"
    },
    {
        "id": 7,
        "title": "El Cortocircuito",
        "description": "Representación visual del momento en que ocurre un cortocircuito, elevando instantáneamente y de forma descontrolada la corriente eléctrica.",
        "image": "/galeria/cortocircuito.png"
    },
    {
        "id": 8,
        "title": "Curvas de Disparo",
        "description": "Gráficas de tiempo-corriente empleadas para seleccionar la velocidad de corte de un interruptor termomagnético según la carga a conectar.",
        "image": "/galeria/curvas.jpeg"
    },
    {
        "id": 9,
        "title": "Diagrama Motor y Relé Térmico",
        "description": "Esquema de fuerza que ilustra la disposición correcta del relé térmico en serie con el motor trifásico para protegerlo contra sobrecargas.",
        "image": "/galeria/diagrama-motor-rele-termico.jpg"
    },
    {
        "id": 10,
        "title": "Excavación para Malla a Tierra",
        "description": "Proceso constructivo de una instalación de puesta a tierra, mostrando las zanjas y el ruteo del cable de cobre desnudo.",
        "image": "/galeria/excavacion-malla-a-tierra.jpg"
    },
    {
        "id": 11,
        "title": "Fusible tipo gG",
        "description": "Fusible cilíndrico de uso general e industrial, que provee protección contra sobrecargas y cortocircuitos.",
        "image": "/galeria/fusible-gg.jpg"
    },
    {
        "id": 12,
        "title": "Fusible tipo aM",
        "description": "Fusible cilíndrico de acompañamiento de motor, diseñado específicamente para soportar altos picos de arranque sin fundirse prematuramente.",
        "image": "/galeria/fusible-am.jpg"
    },
    {
        "id": 13,
        "title": "Fusible de Cuchilla (NH)",
        "description": "Elemento de gran poder de ruptura, empleado en tableros generales y sistemas industriales para soportar y extinguir cortocircuitos de alta energía.",
        "image": "/galeria/fusible-nh.jpg"
    },
    {
        "id": 14,
        "title": "Simbología IEC - ANSI (1)",
        "description": "Comparativa de las distintas formas esquemáticas entre los estándares europeos (IEC) y americanos (ANSI) para elementos fundamentales.",
        "image": "/galeria/iec-anci1.gif"
    },
    {
        "id": 15,
        "title": "Simbología IEC - ANSI (2)",
        "description": "Segunda sección del glosario esquemático normado, evidenciando variaciones gráficas entre normas para dispositivos de control.",
        "image": "/galeria/iec-ansi2.gif"
    },
    {
        "id": 16,
        "title": "Simbología IEC - ANSI (3)",
        "description": "Tercera sección del comparativo esquemático entre las principales normas vigentes nivel mundial.",
        "image": "/galeria/iec-ansi3.gif"
    },
    {
        "id": 17,
        "title": "Simbología IEC - ANSI (4)",
        "description": "Cuarta sección del glosario con simbología aplicada a diagramas de fuerza y control.",
        "image": "/galeria/iec-ansi4.gif"
    },
    {
        "id": 18,
        "title": "Simbología IEC - ANSI (5)",
        "description": "Quinta tabla referencial de las equivalencias de dibujo entre sistemas internacionales.",
        "image": "/galeria/iec-ansi5.gif"
    },
    {
        "id": 19,
        "title": "Simbología IEC - ANSI (6)",
        "description": "Sexta sección comparativa aplicable a equipos de potencia y accionamientos industriales bajo las normas IEC y ANSI.",
        "image": "/galeria/iec-ansi6.gif"
    },
    {
        "id": 20,
        "title": "Malla a Tierra Vectorizada",
        "description": "Esquema conceptual y reticulado de cómo se diseña equipotencialmente una malla de puesta a tierra a nivel subestación.",
        "image": "/galeria/malla-tierra-vectorial.png"
    },
    {
        "id": 21,
        "title": "Partes del Diferencial",
        "description": "Vista explosionada de componentes internos de un interruptor diferencial, como el toroide, el solenoide actuador y el botón de Test.",
        "image": "/galeria/partes-del-diferencial.png"
    },
    {
        "id": 22,
        "title": "Partes del Disyuntor Termomagnético",
        "description": "Corte transversal a un termomagnético mostrando el bimetal (sobrecarga), la bobina magnética (cortocircuito) y cámara apagachispas.",
        "image": "/galeria/partes-del-disyuntor.jpg"
    },
    {
        "id": 23,
        "title": "Componentes del Relé Térmico",
        "description": "Sección interna destacando las láminas bimetálicas encargadas de reaccionar (dilatarse) proporcionalmente a las corrientes de sobrecarga.",
        "image": "/galeria/partes-rele-termico.jpg"
    },
    {
        "id": 24,
        "title": "Relé Térmico",
        "description": "Vista frontal del dispositivo de protección, destacando el dial regulador de corriente y los botones manuales de Reset y Test.",
        "image": "/galeria/rele-termico.jpg"
    },
    {
        "id": 25,
        "title": "Soldadura Exotérmica",
        "description": "Procedimiento permanente para unificar electrodos con conductores de cobre usando un molde de grafito tipo Cadweld.",
        "image": "/galeria/soldadura-de-malla-a-tierra.jpg"
    },
    {
        "id": 26,
        "title": "Telurómetro en Uso",
        "description": "Equipo digital portátil desplegando una medición de resistencia en la estaca de tierra, asegurando cumplimiento normativo.",
        "image": "/galeria/telurometro.jpg"
    }
];
