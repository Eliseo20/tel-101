const fs = require('fs');

const AE3_PATH = "src/components/AE3View.jsx";

const content = fs.readFileSync(AE3_PATH, "utf-8");

const article_4_start = content.indexOf("{/* --- ARTICULO 4 --- */}");
let match = content.match(/<\/div>[\s\r\n]*<aside className="lg:col-span-4 space-y-6">/);
let article_end = match ? match.index : -1;

if (article_4_start === -1 || article_end === -1) {
    console.error("Could not find boundaries!");
    process.exit(1);
}

const new_articles_html = `{/* --- ARTICULO 4 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#002855] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Servicios Asociados a la <br /> <span className="text-slate-500 dark:text-slate-400 text-3xl">Industria Eléctrica</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La industria eléctrica constituye un pilar fundamental en el desarrollo moderno de las sociedades, ya que proporciona la infraestructura y la energía necesarias para la vida cotidiana y para el crecimiento de la economía global. Junto con la generación, transmisión, distribución y consumo de energía eléctrica, existe una amplia variedad de servicios asociados que son críticos para el funcionamiento sostenible, eficiente y seguro del sector. El propósito de este texto es analizar los principales servicios asociados a la industria eléctrica, considerando tanto los aspectos técnicos como aquellos relacionados con el marco normativo chileno y la comparación con tendencias globales, a partir de la bibliografía recomendada: Fuentes de energía de Roldán Viloria (2008) y las Normas Técnicas del Sector Electricidad elaboradas por la Superintendencia de Electricidad y Combustibles (SEC) de Chile.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Introducción a los Servicios Asociados en la Industria Eléctrica" icon={ListChecks}>
                            <Paragraph>Los servicios asociados a la industria eléctrica comprenden todas aquellas actividades y procesos complementarios que, sin ser la generación, transmisión o distribución directa de la electricidad, son esenciales para el correcto funcionamiento del sistema eléctrico y el bienestar de los usuarios. Estos servicios contribuyen a asegurar la calidad, continuidad, seguridad y eficiencia energética.</Paragraph>
                            <Paragraph>La creciente complejidad de los sistemas energéticos, el avance tecnológico, la necesidad de adaptación ante desafíos ambientales y los cambios en la regulación han expandido el ámbito y relevancia de estos servicios. Así, no solo se habla de funciones tradicionales, sino que se incluyen nuevos enfoques tales como la eficiencia energética, la digitalización, el control ambiental y la integración de energías renovables.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="2. Categorías Principales de los Servicios Asociados" icon={ListChecks}>
                            <Paragraph>De acuerdo con Roldán Viloria (2008) y la normativa de la SEC, los principales servicios asociados a la industria eléctrica se pueden agrupar en las siguientes categorías:</Paragraph>
                            <List items={[
                                "Instalación, operación y mantenimiento de infraestructuras eléctricas",
                                "Supervisión y control de calidad",
                                "Medición, facturación y gestión comercial",
                                "Asesoría técnica y consultoría",
                                "Seguridad y protección",
                                "Gestión ambiental y eficiencia energética",
                                "Educación, capacitación y difusión tecnológica",
                                "Gestión de residuos y materiales peligrosos",
                                "Servicios de ingeniería y automatización",
                                "Servicios de emergencia y continuidad de suministro"
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="3. Instalación, Operación y Mantenimiento de Infraestructuras Eléctricas" icon={Wrench}>
                            <Paragraph><strong>Instalación:</strong> Incluye desde el diseño, montaje y puesta en marcha de equipos e infraestructuras eléctricas tales como líneas de transmisión, subestaciones, plantas generadoras (convencionales o renovables), tableros, transformadores y sistemas de distribución. El correcto servicio de instalación debe cumplir con los Pliegos Técnicos, tales como el DS 8/2019 en Chile, y ajustarse tanto a las normas SEC como a estándares internacionales reconocidos (por ejemplo, IEC o IEEE).</Paragraph>
                            <Paragraph><strong>Operación:</strong> Es fundamental para garantizar la continuidad y estabilidad del suministro. Implica la administración y el manejo diario de los sistemas eléctricos, la gestión de la red y la respuesta ante contingencias.</Paragraph>
                            <Paragraph><strong>Mantenimiento:</strong> Comprende actividades periódicas y preventivas que buscan prolongar la vida útil de los equipos e infraestructuras, reduciendo la probabilidad de fallos y accidentes. El mantenimiento puede ser correctivo, preventivo o predictivo, e involucra un despliegue de recursos humanos calificados y tecnología especializada.</Paragraph>
                            <Paragraph>Un ejemplo concreto de la importancia de estos servicios se observa en la necesidad de mantener en óptimas condiciones las puestas a tierra, tableros y alimentadores, y de garantizar el cumplimiento de las medidas de seguridad contempladas en la normativa chilena, tal como establece el DS 8/2019.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Supervisión y Control de Calidad" icon={ShieldCheck}>
                            <Paragraph>La supervisión técnica es un servicio asociado esencial que implica la verificación permanente del cumplimiento de estándares de calidad y seguridad. Este servicio es provisto tanto por entidades reguladoras (por ejemplo, la SEC), como por empresas especializadas y organismos independientes.</Paragraph>
                            <Paragraph>El control de calidad abarca pruebas y certificaciones en obras nuevas, auditorías de seguridad, análisis de cumplimiento normativo en instalaciones de baja tensión, monitoreo de condiciones de operación y análisis de incidentes. Según normas de la SEC, se establece un marco obligatorio de fiscalización para asegurar el correcto funcionamiento y minimizar riesgos para personas y bienes.</Paragraph>
                            <Paragraph>Así, la entrega rigurosa de certificados de inspección, la realización de ensayos de resistencia de aislamiento, continuidad de tierras, y la verificación de espacios de trabajo seguros son parte clave de estos servicios.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="5. Medición, Facturación y Gestión Comercial" icon={ListChecks}>
                            <Paragraph>Otro servicio fundamental corresponde a la medición y gestión del consumo eléctrico. El sistema de medición moderna comprende el uso de medidores digitales y sistemas avanzados de gestión de datos para facturación, análisis de consumos y gestión comercial.</Paragraph>
                            <Paragraph>La calidad de estos servicios impacta directamente en la transparencia y confiabilidad de las relaciones entre usuarios y empresas eléctricas. En Chile, la normativa establece la obligatoriedad de equipos certificados y verificaciones periódicas, junto a procedimientos formales de reclamos y atención al cliente.</Paragraph>
                            <Paragraph>Además, la gestión comercial integra procesos de atención post-venta, comunicación de cortes programados, asesoramiento para la optimización del consumo, cambio o actualización de empalmes, y adecuación de contratos de suministro.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="6. Asesoría Técnica y Consultoría" icon={BookOpen}>
                            <Paragraph>Frente al dinamismo del sector y la actualización constante de tecnologías y normativas, existe una creciente demanda por asesoría técnica y servicios de consultoría especializada. Estos abarcan desde el diseño de sistemas eléctricos y análisis de riesgos, hasta la elaboración de estudios de impacto ambiental, el apoyo en procesos de tramitación y regularización de instalaciones, y la elaboración de proyectos de eficiencia energética.</Paragraph>
                            <Paragraph>La consultoría es particularmente relevante al implementar energías renovables, modernizar sistemas o adaptar infraestructuras a nuevas normativas, como los recientes cambios referidos a instalaciones eléctricas en el DS 8/2019.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="7. Seguridad y Protección" icon={ShieldAlert}>
                            <Paragraph>La protección de la integridad física de las personas y la preservación de los bienes materiales exigen un sistema de servicios asociados robusto. Estos incluyen el diseño e implementación de protecciones contra contactos directos e indirectos, la instrucción y aplicación de procedimientos de seguridad ocupacional, así como la provisión de dispositivos de protección tales como interruptores diferenciales, protecciones térmicas y puesta a tierra reglamentaria.</Paragraph>
                            <Paragraph>En este sentido, los servicios asociados abarcan también la capacitación y certificación de personal, el diseño de planes de emergencia y la realización de simulacros periódicos. La normativa SEC sobre condiciones del medio, espacios de trabajo, señalización y accesibilidad forma así parte del marco de referencia para la oferta de estos servicios.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="8. Gestión Ambiental y Eficiencia Energética" icon={Globe}>
                            <Paragraph>Los impactos medioambientales de la industria eléctrica y la necesidad de avanzar hacia un modelo sustentable han impulsado la creación de un extenso campo de servicios asociados vinculados a la gestión ambiental y el fomento de la eficiencia energética.</Paragraph>
                            <Paragraph>Entre estos servicios destacan:</Paragraph>
                            <List items={[
                                "Evaluaciones de impacto ambiental",
                                "Desarrollo e integración de energías renovables",
                                "Optimización y reducción de pérdidas energéticas",
                                "Auditorías energéticas y análisis de ciclo de vida",
                                "Gestión de permisos y cumplimiento con normativa ambiental",
                                "Educación y sensibilización ambiental",
                                "Reciclaje de materiales eléctricos y gestión de residuos peligrosos (aceites, baterías, etc.)"
                            ]} />
                            <Paragraph>A nivel de usuario, los servicios de eficiencia energética incluyen estudios personalizados de consumo, implementación de tecnologías LED, domótica y automatización, además de certificación de edificios e industrias bajo estándares internacionales.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="9. Educación, Capacitación y Difusión Tecnológica" icon={Award}>
                            <Paragraph>La industria eléctrica requiere personal altamente calificado y permanentemente actualizado en técnicas, tecnologías y regulaciones. Es por ello que la oferta de servicios de capacitación técnica, certificación de competencias y difusión tecnológica resulta esencial.</Paragraph>
                            <Paragraph>Entre estos servicios se incluyen cursos, diplomados y talleres sobre normativas nacionales y extranjeras; entrenamientos específicos en tecnologías emergentes (energía solar, automatización, redes inteligentes); y actividades de divulgación y formación de usuarios finales.</Paragraph>
                            <Paragraph>Roldán Viloria (2008) reconoce la importancia de que tanto técnicos como usuarios estén sensibilizados y actualizados respecto a los riesgos eléctricos y a las mejores prácticas internacionales.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="10. Gestión de Residuos y Materiales Peligrosos" icon={ListChecks}>
                            <Paragraph>La gestión segura de residuos y materiales peligrosos constituye un servicio asociado ineludible del sector eléctrico, producto del ciclo de vida de sus infraestructuras y componentes.</Paragraph>
                            <Paragraph>Los servicios incluyen inventariar, recolectar, almacenar, transportar y disponer de residuos tales como aceites dieléctricos, baterías en desuso, cables y equipos obsoletos, lámparas contaminantes y otros desechos eléctricos. Las empresas deben cumplir con la normativa local e internacional sobre manejo y disposición final de residuos, fomentando el reciclaje y la economía circular en el sector.</Paragraph>
                            <Paragraph>La SEC, a través de sus normativas, exige a las empresas la responsabilidad extendida de retirar, almacenar y tratar estos materiales, mitigando riesgos para el ambiente y para la salud de la población.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="11. Servicios de Ingeniería y Automatización" icon={Settings2}>
                            <Paragraph>La incorporación de tecnología avanzada ha permitido el desarrollo de un vasto campo de servicios en ingeniería y automatización de sistemas eléctricos.</Paragraph>
                            <Paragraph>Estos servicios incluyen:</Paragraph>
                            <List items={[
                                "Diseño de sistemas de control y supervisión (SCADA)",
                                "Integración de redes inteligentes (smart grids)",
                                "Automatización de subestaciones y distribución",
                                "Implantación de sistemas de gestión energética (EMS)",
                                "Software especializado para simulación y modelado eléctrico"
                            ]} />
                            <Paragraph>Con la digitalización del sector, las empresas pueden ofrecer servicios remotos de monitoreo en tiempo real, análisis predictivo de fallas, optimización automática de flujos eléctricos y respuesta rápida a eventos críticos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="12. Servicios de Emergencia y Continuidad de Suministro" icon={ActivitySquare}>
                            <Paragraph>Ante eventos adversos, ya sean naturales, técnicos o sociales, es preciso contar con servicios de emergencia que aseguren la continuidad del suministro eléctrico. Se incluyen en este ámbito:</Paragraph>
                            <List items={[
                                "Atención 24 horas de emergencias eléctricas",
                                "Reparación de líneas y equipos afectados por tormentas, accidentes o vandalismo",
                                "Provisión de sistemas de respaldo y generadores temporales",
                                "Planes de contingencia y protocolos de recuperación ante desastres",
                                "Comunicación y coordinación con autoridades e instituciones críticas"
                            ]} />
                            <Paragraph>La SEC fiscaliza y exige la implementación de planes de emergencia, tanto en empresas de generación, transmisión y distribución, como entre los grandes usuarios industriales.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="13. Marco Normativo y Globalización de Servicios" icon={Globe}>
                            <Paragraph>La internacionalización de la industria eléctrica implica que los servicios asociados trasciendan fronteras, debiendo las empresas cumplir con normativas locales y estándares globales.</Paragraph>
                            <Paragraph>En Chile, la SEC – a través de decretos como el DS 8/2019 – regula tanto los servicios principales como los asociados, exigiendo formación, certificación y acreditación del personal, equipos y procesos. Además, promueve la convergencia hacia estándares internacionales, adaptando la normativa nacional a las mejores prácticas globales.</Paragraph>
                            <Paragraph>A nivel global, existe una tendencia hacia la estandarización, interoperabilidad y digitalización de los servicios, en línea con la transición energética y los objetivos de sostenibilidad.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="14. Perspectivas Futuras para los Servicios Asociados" icon={TrendingUp}>
                            <Paragraph>El avance tecnológico, el cambio climático y la integración de energías renovables están redefiniendo los servicios asociados a la industria eléctrica. Se espera la expansión de nuevas áreas tales como la gestión de la flexibilidad de la demanda, servicios de almacenamiento energético y programas avanzados de respuesta ante contingencias.</Paragraph>
                            <Paragraph>Otros campos emergentes incluyen la ciberseguridad industrial, el blockchain para trazabilidad de energía, y las plataformas inteligentes para la gestión de comunidades energéticas.</Paragraph>
                            <Paragraph>El papel cada vez mayor de la digitalización, la inteligencia artificial y el internet de las cosas (IoT) impulsa nuevas oportunidades y desafíos para los servicios asociados, demandando mayor especialización y adaptación continua de los profesionales del área.</Paragraph>
                        </ExpansionTile>
                        
                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">15. Conclusión</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Los servicios asociados a la industria eléctrica representan un componente vital para la operación, modernización y sostenibilidad del sector, siendo determinantes para la seguridad, calidad y eficiencia del suministro energético en Chile y el mundo.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La integración de servicios de mantenimiento, supervisión, asesoría, gestión ambiental, capacitación y digitalización, bajo el cumplimiento estricto del marco normativo vigente, resulta clave para afrontar los desafíos presentes y futuros de la industria eléctrica.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Finalmente, la continua evolución de tecnologías y regulaciones demanda que tanto empresas como profesionales se mantengan en permanente actualización y capacitación, maximizando así los beneficios sociales, económicos y medioambientales de una industria eléctrica moderna y globalizada.
                            </Paragraph>
                        </div>

                        {/* --- ARTICULO 5 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#D1202F] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Competencias de un Técnico Eléctrico
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>En el contexto global actual y especialmente en el sector eléctrico chileno, la formación de técnicos eléctricos requiere una sólida combinación de conocimientos, habilidades y actitudes. Según la bibliografía pertinente (Fuentes de energía de Roldán Viloria, 2008; Normas Técnicas Sector Electricidad, SEC), estos tres ejes conforman el perfil profesional indispensable para abordar los desafíos del rubro, garantizando el cumplimiento de la normativa vigente, la seguridad, la eficiencia y la sostenibilidad de las instalaciones eléctricas.</Paragraph>
                            <Paragraph>Este texto de estudio desarrolla en profundidad los conocimientos requeridos, las habilidades prácticas necesarias y las actitudes que estructuran las competencias transversales y específicas de un técnico eléctrico moderno, en concordancia con el Decreto Supremo N°92 y el DS 8/2019.</Paragraph>
                        </div>
                        
                        <ExpansionTile title="I. Conocimientos Fundamentales y Específicos" icon={BookOpen}>
                            <Paragraph>El componente cognitivo (“saber”) constituye la base conceptual de la competencia. Para un técnico eléctrico, estos saberes integran ciencias básicas aplicadas, teoría eléctrica, normativa legal y conocimientos sobre nuevas tecnologías.</Paragraph>
                        </ExpansionTile>
                        
                        <ExpansionTile title="1. Principios de Electricidad y Electromagnetismo" icon={ListChecks}>
                            <List items={[
                                "Comprender la diferencia, aplicación y cálculo de sistemas de corriente alterna (monofásica y trifásica) y corriente continua.",
                                "Dominar las Leyes de Ohm, Kirchhoff, Faraday y conceptos fundamentales de potencia y energía eléctrica.",
                                "Conocer la estructura y parámetros de las redes de generación, transmisión, distribución y consumo final de energía."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="2. Normativa, Legislación y Pliegos Técnicos" icon={Wrench}>
                            <List items={[
                                "Aplicación rigurosa del DS 8/2019: Conocimiento detallado de los pliegos técnicos que fijan los estándares para el diseño, dimensionamiento, montaje y certificación de instalaciones de baja tensión.",
                                "Clasificación de Instaladores Eléctricos (DS N°92/1983): Entender los límites de voltaje, potencia, áreas de desempeño y responsabilidades asignadas a las licencias de las clases A, B, C y D otorgadas por la SEC.",
                                "Normas Técnicas de la SEC y Estándares Internacionales: Uso y revisión constante de normativas como las IEC o IEEE sobre calidad de servicio, seguridad, instalaciones especiales y equipos de maniobra."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="3. Equipos y Materiales Eléctricos" icon={BookOpen}>
                            <List items={[
                                "Identificación de tecnologías de canalización, conductores eléctricos, dispositivos de maniobra (interruptores) y protección (diferenciales, magnetotérmicos, fusibles).",
                                "Conocimiento profundo sobre tableros eléctricos, centros de distribución, sistemas de puesta a tierra y medición de consumos energéticos."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="4. Digitalización y Eficiencia Energética" icon={Globe}>
                            <List items={[
                                "Integración de energías renovables (sistemas fotovoltaicos y eólicos pequeños), así como el entendimiento de las redes inteligentes (Smart Grids).",
                                "Nociones básicas de domótica e IoT aplicado a la automatización de instalaciones de iluminación y control de edificios."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="II. Habilidades o Destrezas Técnicas" icon={ShieldAlert}>
                            <Paragraph>Las habilidades (“saber hacer”) refieren a la destreza procedimental y técnica que permite aplicar los conocimientos a situaciones reales en el desempeño laboral.</Paragraph>
                        </ExpansionTile>
                        
                        <ExpansionTile title="1. Interpretación, Diseño y Ejecución de Proyectos" icon={Settings2}>
                            <List items={[
                                "Lectura e interpretación de esquemas eléctricos, diagramas unifilares y planos de montaje con simbología normalizada.",
                                "Capacidad para efectuar cálculos de carga, dimensionamiento de alimentadores y caída de tensión en conformidad con los pliegos técnicos.",
                                "Materialización de empalmes y tableros bajo estrictos protocolos de la SEC y verificación visual."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="2. Medición e Instrumentación" icon={ActivitySquare}>
                            <List items={[
                                "Uso experto de instrumentos de medición como multímetros digitales, pinzas amperimétricas, megómetros, analizadores de redes y teluómetros.",
                                "Evaluación precisa de parámetros como voltaje, corriente, resistencia de aislamiento, continuity, y resistencia de puesta a tierra."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="3. Mantenimiento y Detección de Fallas (Troubleshooting)" icon={BookOpen}>
                            <List items={[
                                "Habilidad para inspeccionar y diagnosticar rápidamente el origen de sobrecargas, cortocircuitos o fugas a tierra en instalaciones averiadas.",
                                "Capacidad para desarrollar y aplicar rutinas de mantenimiento correctivo, predictivo y preventivo, extendiendo la vida útil de los equipos e infraestructuras y evitando cortes prolongados."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="4. Desarrollo de Protocolos de Trabajo Seguro" icon={ShieldCheck}>
                            <List items={[
                                "Instalación de medidas de protección contra contactos eléctricos directos e indirectos.",
                                "Habilidad para aislar energía, ejecutar maniobras de desenergización y asegurar que el área de trabajo y el medio ambiente no revistan peligro para el trabajador ni los habitantes."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="III. Actitudes y Comportamientos Transversales" icon={Award}>
                            <Paragraph>La actitud (“saber ser”) define el enfoque conductual, valórico y ético del profesional eléctrico frente a los retos de la industria, impactando directamente en la calidad del servicio técnico.</Paragraph>
                        </ExpansionTile>

                         <ExpansionTile title="1. Rigurosidad y Ética Profesional" icon={ShieldCheck}>
                            <List items={[
                                "Desempeño legal estricto: Todo el trabajo se rige con base a la calidad e idoneidad técnica dictada por la SEC, sin tomar atajos que pongan en compromiso la integridad de la red.",
                                "Responsabilidad civil: Comprender que toda falla en una ejecución eléctrica puede devenir en consecuencias catastróficas, asumiendo su rol como garante de la seguridad pública."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="2. Consciencia en la Prevención de Riesgos y Seguridad Ocupacional" icon={ShieldAlert}>
                            <List items={[
                                "Cultura del autocuidado: Evidenciar disciplina intachable al emplear equipos de protección personal (EPP) y de seguridad dieléctrica.",
                                "Gestión preactiva de peligros como arcos eléctricos, explosiones e incendios (conciencia según lineamientos de salud laboral o normativas tipo DS594)."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="3. Adaptabilidad, Curiosidad y Formación Continua" icon={TrendingUp}>
                            <List items={[
                                "Como sostiene Roldán Viloria (2008), el impacto exponencial que tiene la tecnología sobre este rubro requiere de un técnico con la disposición constante por actualizar sus competencias, asimilar nuevos materiales y procedimientos técnicos."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="4. Servicio al Cliente y Comunicación Efectiva" icon={Globe}>
                            <List items={[
                                "Capacidad empática para comprender las necesidades de uso de la energía por parte de clientes residenciales, de comercio o industriales.",
                                "Eficacia y claridad en la entrega de reportes técnicos o al educar y proporcionar recomendaciones orientadas a la optimización energética de los usuarios finales."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="5. Pensamiento Crítico y Resolución de Problemas" icon={Wrench}>
                            <List items={[
                                "Habilidad en la toma de decisiones oportunas y analíticas frente a problemas operacionales impredecibles y supresión del error mediante procesos estructurados y confiables."
                            ]} />
                        </ExpansionTile>
                        
                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusión</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La integridad de las competencias definidas para un Técnico Eléctrico se cristaliza cuando los conocimientos sobre las leyes de la electricidad y la reglamentación (como los pliegos técnicos de Chile), se fusionan armónicamente con la práctica técnica segura (instalación, interpretación y mantenimiento), todo bajo una robusta actitud ética, responsable y resiliente frente a la tecnología en progreso continuo. En consecuencia, como se deduce a través del abordaje de Roldán Viloria y la SEC, este sistema de habilidades posiciona al técnico eléctrico no solo como un ejecutor de obras, sino como un guardián del uso correcto, eficiente y sostenible de la energía eléctrica nacional.
                            </Paragraph>
                        </div>

                        {/* --- ARTICULO 6 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#002855] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Prevención de Riesgos en la Industria Eléctrica según DS594/2000
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La industria eléctrica representa uno de los sectores más dinámicos y esenciales para el desarrollo de la economía global. Sin embargo, también es una de las áreas donde la exposición a riesgos laborales es significativamente elevada debido a la naturaleza de su operación. Para mitigar los efectos negativos de estos peligros, en Chile se ha establecido un marco normativo claro y riguroso en materia de prevención de riesgos, dentro del cual destaca el Decreto Supremo Nº594 del año 2000 del Ministerio de Salud, comúnmente conocido como DS594/2000. Este cuerpo regulador se entrelaza con otras normativas específicas del sector eléctrico, como las normas técnicas de la Superintendencia de Electricidad y Combustibles (SEC), contribuyendo así a un ambiente laboral más seguro y alineado con estándares internacionales.</Paragraph>
                            <Paragraph>El siguiente texto explora en detalle la prevención de riesgos en la industria eléctrica de acuerdo con el DS594/2000, desde sus fundamentos legales, el análisis del entorno laboral, las obligaciones de los empleadores y trabajadores, hasta la aplicación particular en actividades relacionadas con la generación, transmisión y distribución de energía eléctrica. Además, se proporcionará un enfoque académico enriquecido con conceptos fundamentales extraídos de las obras de referencia: "Fuentes de energía" de José Roldán Viloria, y las "Normas Técnicas Sector Electricidad" de la SEC.</Paragraph>
                        </div>
                        
                        <ExpansionTile title="Marco Normativo para la Prevención de Riesgos" icon={BookOpen}>
                            <SectionHeader title="Decreto Supremo Nº594/2000: Antecedentes y Alcance" />
                            <Paragraph>El DS594/2000, titulado "Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo", constituye la piedra angular de la prevención de riesgos laborales en el territorio chileno. Establece los requisitos legales mínimos para la protección de la salud y la integridad física de los trabajadores en los diferentes sectores productivos, incluido el rubro eléctrico.</Paragraph>
                            <Paragraph>Este decreto, de alcance nacional, prescribe las condiciones higiénicas, ambientales, técnicas y organizativas que deben cumplirse durante el trabajo diario. Asimismo, subraya la importancia de la gestión preventiva, la vigilancia de la salud y la promoción de una cultura de seguridad en las organizaciones. La aplicación del DS594/2000 es obligatoria y supervisada por los organismos estatales competentes, siendo la Superintendencia de Electricidad y Combustibles (SEC) la entidad fiscalizadora en el contexto de la industria eléctrica.</Paragraph>
                            <SectionHeader title="Relación entre DS594/2000 y Normativa Específica de la Industria Eléctrica" />
                            <Paragraph>Como se detalla en las "Normas Técnicas Sector Electricidad" (SEC, 2000), la industria cuenta con normativas particulares que abordan los riesgos inherentes a la electricidad, sumándose a lo dispuesto por el DS594/2000. Mientras este último establece líneas generales en materia de higiene y seguridad, las normas de la SEC abordan aspectos como aislamiento, protección contra contactos eléctricos directos e indirectos, puesta a tierra, ambientes con presencia de humedad y gases, entre otros.</Paragraph>
                            <Paragraph>Por tanto, en una instalación eléctrica, se observa una interacción fundamental entre ambas normativas, contribuyendo a una estrategia integral de prevención y control de riesgos.</Paragraph>
                        </ExpansionTile>
                        
                        <ExpansionTile title="Identificación y Análisis de Riesgos en la Industria Eléctrica" icon={ShieldAlert}>
                            <SectionHeader title="Peligros Asociados al Trabajo Eléctrico" />
                            <Paragraph>El trabajo en instalaciones generadoras, líneas de transmisión y centros de distribución eléctrica expone al personal a diversos riesgos, los cuales deben ser correctamente identificados, evaluados y gestionados.</Paragraph>
                            <List items={[
                                "Riesgo eléctrico: electrocución por contacto directo o indirecto con partes energizadas.",
                                "Riesgo por arco eléctrico: quemaduras severas, daño auditivo y lesiones oculares.",
                                "Caídas de altura: habituales en trabajos de mantenimiento y tendido de líneas aéreas.",
                                "Exposición a ambientes hostiles: condiciones extremas de temperatura, humedad y radiación solar.",
                                "Ergonomía: manipulación de cargas y posturas forzadas en la instalación de equipos.",
                                "Exposición a agentes químicos: especialmente durante trabajos de mantenimiento o limpieza de equipos eléctricos.",
                                "Riesgos mecánicos: atrapamientos, cortes y golpes derivados del manipuleo de herramientas y materiales."
                            ]} />
                            <Paragraph>Según la "Fuentes de Energía" (Roldán Viloria, 2008), el riesgo inherente a la electricidad reside principalmente en su invisibilidad y en la rapidez de sus efectos nocivos, lo que exige una gestión proactiva y sistémica de las amenazas a través de métodos estructurados de evaluación.</Paragraph>
                            <SectionHeader title="Evaluación y Jerarquización del Riesgo" />
                            <Paragraph>Un sistema efectivo de gestión de riesgos, tal como propone el DS594/2000, parte por identificar todas las posibles fuentes de daño, analizando la probabilidad de ocurrencia y la severidad de sus consecuencias. Esta información es esencial para establecer medidas preventivas y correctivas, priorizando las acciones con mayor impacto en la protección de la vida y salud de los trabajadores.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="Obligaciones de los Empleadores y Participación de los Trabajadores" icon={Award}>
                            <SectionHeader title="Responsabilidades del Empleador" />
                            <Paragraph>De acuerdo con el DS594/2000, el empleador tiene la obligación primigenia de garantizar condiciones seguras y saludables en el entorno laboral. Esto abarca la dotación de equipos de protección personal (EPP), la capacitación continua en materia de prevención de riesgos eléctricos, la implementación de sistemas de bloqueo y etiquetado, y la gestión eficiente de emergencias derivadas de incidentes eléctricos.</Paragraph>
                            <List items={[
                                "Proveer capacitación técnica y en seguridad a los trabajadores, orientada a la correcta identificación y mitigación de riesgos asociados a la electricidad.",
                                "Implementar procedimientos de trabajo seguro, con énfasis en actividades críticas como la desconexión de líneas, mantenimiento de equipos energizados y realización de pruebas con tensión.",
                                "Vigilar el cumplimiento de la normativa, realizando inspecciones periódicas y corrigiendo desviaciones o condiciones subestándar.",
                                "Notificar, investigar y reportar accidentes de trabajo y enfermedades profesionales relacionadas con la exposición eléctrica.",
                                "Establecer sistemas de señalización, aviso y demarcación de áreas de riesgo eléctrico.",
                                "Facilitar la participación de los trabajadores en instancias de comités paritarios y actividades de formación en seguridad."
                            ]} />
                            <SectionHeader title="Derechos y Deberes de los Trabajadores" />
                            <Paragraph>Si bien el empleador es responsable de establecer condiciones básicas de seguridad, el DS594/2000 también cita derechos y deberes inherentes al trabajador:</Paragraph>
                            <List items={[
                                "Participar activamente en programas de prevención y en el reconocimiento de los riesgos laborales eléctricos.",
                                "Cumplir los procedimientos y utilizar correctamente el EPP proporcionado.",
                                "Reportar de inmediato cualquier situación de riesgo, incidente o accidente relacionado con la energía eléctrica.",
                                "Capacitarse para el desarrollo seguro de las tareas asignadas y rechazar aquellas para las que no se cuente con la instrucción o equipos adecuados."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="Medidas de Prevención y Control según DS594/2000" icon={ActivitySquare}>
                            <SectionHeader title="Estrategias Generales" />
                            <Paragraph>El DS594/2000 establece lineamientos concretos para el control de riesgos en la industria eléctrica, enfatizando una combinación equilibrada de medidas técnicas, organizacionales y personales. Las estrategias se despliegan en la jerarquía clásica de control de riesgos: eliminación, sustitución, control de ingeniería, procedimientos administrativos, y uso de protección personal.</Paragraph>
                            <List items={[
                                "Eliminación del riesgo: siempre que sea posible, desconectar las fuentes de energía para realizar tareas de inspección, mantenimiento o reparación.",
                                "Sustitución: selección de equipos o materiales con menores propiedades de riesgo eléctrico.",
                                "Controles de ingeniería: uso de barreras físicas, aislamientos, tableros de distribución homologados y sistemas de puesta a tierra según normativa SEC.",
                                "Controles administrativos: capacitación, procedimientos de bloqueo/etiquetado, limitación de acceso y rotación de personal expuesto.",
                                "Equipos de protección personal: guantes, ropa ignífuga, cascos dieléctricos, pantallas de protección ocular y calzado adecuado."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="Medidas Específicas para la Industria Eléctrica" icon={Wrench}>
                            <SectionHeader title="Prevención de Contacto Eléctrico Directo e Indirecto" />
                            <Paragraph>Según las "Normas Técnicas Sector Electricidad" de la SEC, y en armonía con el DS594/2000, es esencial proteger contra contactos directos (personas en contacto con partes activas de circuitos) e indirectos (personas en contacto con partes que pueden estar accidentalmente energizadas).</Paragraph>
                            <List items={[
                                "Aislamiento eficaz de todos los conductores activos.",
                                "Colocación de barreras físicas robustas e intraspasables alrededor de partes energizadas.",
                                "Instalación de interruptores diferenciales de alta sensibilidad para detectar fugas a tierra."
                            ]} />
                        </ExpansionTile>
                        
                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones sobre DS594/2000</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La industria eléctrica demanda profesionales cuya competencia trascienda el solo conocimiento técnico y la ejecución de instalaciones. La seguridad y la salud en el trabajo, amparadas por cuerpos legales como la Ley 16.744 y el DS 594, constituyen la base sobre la cual debe construirse cualquier proyecto y operación eléctrica.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Para el estudiante en vías de insertarse al mercado laboral, integrar el marco normativo previsional y regulatorio (como el DS 594 y las normas de la SEC) a su quehacer diario, es vital. El rigor en la aplicación de metodologías de trabajo seguro, el uso de herramientas certificadas y equipamiento de protección personal adecuado, no solo garantizan el cumplimiento de la ley, sino que aseguran la preservación de su propia integridad y la de sus equipos de trabajo en favor del desarrollo sostenible del sector energético.
                            </Paragraph>
                        </div>
`;

const new_content = content.substring(0, article_4_start) + new_articles_html + content.substring(article_end);

fs.writeFileSync(AE3_PATH, new_content, "utf-8");

console.log("Saved successfully");
