import os

AE3_PATH = "src/components/AE3View.jsx"

with open(AE3_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# We need to replace the content starting from `{/* --- ARTICULO 4 --- */}` up to `</aside>` (or just before Bibliografía)
article_4_start = content.find("{/* --- ARTICULO 4 --- */}")
# Let's find end of the articles component -> `<aside className="lg:col-span-4 space-y-6">`
article_end = content.find("<aside className=\"lg:col-span-4 space-y-6\">")

if article_4_start == -1 or article_end == -1:
    print("Could not find boundaries!")
    exit(1)

new_articles_html = """{/* --- ARTICULO 4 --- */}
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
                            <Paragraph>El sector de la energía eléctrica se encuentra en constante desarrollo y transformación, adaptándose a nuevas exigencias tecnológicas, económicas, regulatorias y medioambientales. En este contexto, la formación de un Técnico Eléctrico adquiere una importancia fundamental, pues se convierte en el profesional clave para garantizar la correcta aplicación de normativas, el funcionamiento de instalaciones y la seguridad de personas y bienes. Al respecto, la bibliografía señalada, especialmente Roldán Viloria (2008) y las Normas Técnicas Sector Electricidad de la Superintendencia de Electricidad y Combustibles (SEC), constituyen referentes esenciales para la comprensión y caracterización del perfil profesional y las competencias requeridas por un técnico en este ámbito, desde una visión global y contextualizada.</Paragraph>
                        </div>
                        
                        <ExpansionTile title="Introducción a la figura del Técnico Eléctrico" icon={UserX}>
                            <Paragraph>El Técnico Eléctrico es un profesional capacitado para intervenir en las distintas etapas del ciclo energético eléctrico, abarcando procesos de generación, transmisión, distribución y consumo eficiente de la energía. Esta intervención exige sólidos conocimientos técnicos, comprensión de la normativa legal vigente (como el DS 8/2019 en Chile), y habilidades para desenvolverse en escenarios multifacéticos, tanto a nivel nacional como global.</Paragraph>
                            <Paragraph>Según la obra de Roldán Viloria (2008), el desarrollo de competencias en el ámbito eléctrico no solo atañe a la comprensión de conceptos y el dominio de herramientas específicas, sino que implica, de manera integral, adoptar una postura crítica, reflexiva y responsable ante los desafíos energéticos contemporáneos, incluyendo la sostenibilidad y la seguridad. Esta visión es corroborada y reforzada por las Normas Técnicas y los reguladores estatales, quienes ponen énfasis en las competencias funcionales y normativas como pilares de la formación técnica.</Paragraph>
                        </ExpansionTile>
                        
                        <ExpansionTile title="Dimensiones de las Competencias del Técnico Eléctrico" icon={ListChecks}>
                            <Paragraph>Las competencias de un Técnico Eléctrico se despliegan en varias dimensiones interconectadas: técnicas, normativas, actitudinales y de gestión. A continuación se desarrollan estos ejes, considerando los contenidos curriculares y la literatura especializada.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="I. Competencias Técnicas" icon={Wrench}>
                            <Paragraph>Las competencias técnicas constituyen la base de la labor de un Técnico Eléctrico. De acuerdo a la bibliografía, estas incluyen el dominio de los principios de la electricidad y el electromagnetismo, los sistemas de generación, transmisión y distribución eléctrica, así como el manejo de herramientas y tecnologías asociadas. Se destacan las siguientes áreas:</Paragraph>
                            <List items={[
                                "Interpretación de planos y esquemas eléctricos: Es fundamental la capacidad para comprender, analizar y ejecutar proyectos a partir de documentación técnica, incorporando simbología normalizada y criterios de diseño.",
                                "Montaje, operación y mantenimiento de instalaciones eléctricas: Incluye tanto instalaciones de baja como de media tensión, abarcando circuitos de fuerza, alumbrado, control y automatización. Aquí se hace especialmente relevante el conocimiento de dispositivos de protección, tableros de distribución y alimentadores, conforme a estándares y normativas como los Pliegos Técnicos DS 8/2019.",
                                "Análisis de fallas y solución de problemas: El técnico debe estar capacitado en la identificación de fallas y su pronta remediación, minimizando tiempos de interrupción y los riesgos asociados, asegurando la continuidad operacional y la seguridad.",
                                "Uso de instrumentos de medición y pruebas: Manejo adecuado de multímetros, amperímetros, megóhmetros y equipos de ensayo para la verificación de parámetros eléctricos (tensión, corriente, resistencia, aislamiento, continuidad), garantizando el cumplimiento de especificaciones técnicas.",
                                "Implementación de medidas de protección eléctrica: Una competencia crítica es la correcta aplicación de sistemas de protección contra contactos directos e indirectos, el dimensionamiento e instalación de protecciones diferenciales, interruptores termomagnéticos y sistemas de puesta a tierra.",
                                "Gestión de materiales y recursos: Involucra la selección y manipulación de conductores, canalizaciones, dispositivos y equipos eléctricos, optimizando recursos y considerando criterios de eficiencia energética y sostenibilidad."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="II. Competencias Normativas y Regulatorias" icon={BookOpen}>
                            <Paragraph>Los marcos legales y regulatorios –en el caso chileno, representados por las Normas Técnicas Sector Electricidad (SEC) y el DS 8/2019– definen estándares mínimos de seguridad, calidad y eficiencia en las instalaciones eléctricas. El Técnico Eléctrico debe dominar:</Paragraph>
                            <List items={[
                                "Identificación y aplicación de normativa vigente: Comprender la estructura legal (leyes, reglamentos, pliegos técnicos), su alcance, evolución y la obligación de su cumplimiento.",
                                "Procedimientos de control y fiscalización: Capacidad para adaptar procedimientos, documentar actividades y responder ante auditorías o inspecciones de organismos certificadores.",
                                "Seguridad legal y operativa en instalaciones temporales y permanentes: Conocimiento de los requisitos diferenciados según el tipo de instalación, el entorno (residencial, industrial, comercial, obras en construcción) y los riesgos asociados.",
                                "Elaboración de informes técnicos normativos: Desarrollo de documentación que acredite el cumplimiento de especificaciones y normativas, aportando trazabilidad y validación técnica.",
                                "Actualización continua: El Técnico Eléctrico debe mantenerse informado sobre actualizaciones y cambios en la normativa, así como nuevas disposiciones de carácter técnico, ambiental y de seguridad."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="III. Competencias Medioambientales y de Sostenibilidad" icon={Globe}>
                            <Paragraph>La bibliografía (Roldán Viloria, 2008) subraya el carácter ineludible de la sostenibilidad en la actuación técnica. Por ello, el técnico eléctrico debe desarrollar competencias orientadas a un manejo responsable de la energía y la minimización de impactos ambientales negativos:</Paragraph>
                            <List items={[
                                "Gestión eficiente del consumo energético: Selección de soluciones tecnológicas y diseño de sistemas que optimicen el uso de la energía, promuevan el ahorro y reduzcan el consumo innecesario.",
                                "Promoción e integración de energías renovables: Capacidad para evaluar la viabilidad y la integración de alternativas limpias como solar, eólica o biomasa, en instalaciones eléctricas diversas.",
                                "Manejo adecuado de residuos y materiales peligrosos: Aplicación de protocolos de recolección, almacenamiento y disposición de materiales contaminantes (aceites, baterías, cables con recubrimientos especiales), minimizando riesgos al entorno.",
                                "Conciencia ambiental y promoción de buenas prácticas: Educación y sensibilización de usuarios y equipos de trabajo frente a impactos ambientales y acciones preventivas."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="IV. Competencias de Seguridad y Prevención de Riesgos" icon={ShieldAlert}>
                            <Paragraph>La seguridad es uno de los pilares fundamentales en las competencias del Técnico Eléctrico. Las instalaciones eléctricas implican riesgos graves para la integridad de personas y bienes si no se gestionan adecuadamente. Así, es imprescindible que el técnico:</Paragraph>
                            <List items={[
                                "Identifique y evalúe riesgos eléctricos: Reconocimiento de situaciones de potencial peligro, tanto en labores de instalación como de mantenimiento y operación.",
                                "Aplique medidas preventivas de seguridad: Implementación estricta de protecciones colectivas e individuales, señalización, procedimientos de bloqueo y etiquetado, uso de equipos de protección personal (EPP), desconexión segura y verificación de ausencia de tensión.",
                                "Realice capacitaciones y simulacros: Formación periódica en primeros auxilios eléctricos, respuesta ante emergencias, uso de extintores y procedimientos de evacuación.",
                                "Promueva la cultura de prevención: Generación de consciencia y buenas prácticas al interior de su equipo y entorno laboral, previniendo accidentes y promoviendo la comunicación efectiva ante situaciones de riesgo.",
                                "Cumpla con los requisitos de espacios de trabajo seguros: Procurando la habilitación de zonas de trabajo libres de obstáculos, bien ventiladas, correctamente iluminadas y seguras, según lo detallado en los pliegos técnicos y las normas de la SEC."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="V. Competencias en Tecnologías Emergentes y Nuevos Desafíos" icon={Settings2}>
                            <Paragraph>El mercado eléctrico evoluciona con gran rapidez, incorporando tecnologías digitales, automatización, domótica, instrumentación inteligente y gestión remota de sistemas. De acuerdo con la perspectiva internacional y los desafíos globales, el Técnico Eléctrico requiere:</Paragraph>
                            <List items={[
                                "Capacidad de adaptación a la digitalización: Conocimiento y manejo de sistemas SCADA, comunicación industrial (bus de campo, IoT), sensores y actuadores inteligentes para el monitoreo y control remoto de instalaciones.",
                                "Integración de movilidad eléctrica: Conocimiento de instalaciones de carga para vehículos eléctricos, gestión de la demanda y redes inteligentes (“smart grids”).",
                                "Actualización constante en tecnologías alternativas: Disposición para incorporar nuevos dispositivos y normativas, formación en ciberseguridad aplicada a infraestructuras críticas y protección de datos en sistemas eléctricos."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="VI. Competencias Comunicacionales y de Trabajo en Equipo" icon={ActivitySquare}>
                            <Paragraph>Según lo señalado por Roldán Viloria, la intervención técnica se sustenta también en la habilidad para interactuar con profesionales de diversos ámbitos (ingenieros, arquitectos, clientes, equipos de montaje y supervisión). Por ello, el Técnico Eléctrico debe:</Paragraph>
                            <List items={[
                                "Dominar la comunicación oral y escrita: Expresar claramente información técnica, instrucciones, informes y recomendaciones a públicos especializados y no especializados.",
                                "Participar activamente en la gestión de proyectos: Trabajar colaborativamente en equipos multidisciplinarios, contribuyendo a la toma de decisiones técnica, la coordinación logística y la resolución de problemas en terreno.",
                                "Gestión de conflictos y liderazgo: Manejo de situaciones complejas, mediación entre intereses contrapuestos y capacidad para liderar equipos de trabajo en tareas específicas."
                            ]} />
                        </ExpansionTile>

                         <ExpansionTile title="Competencias Específicas en Relación con el DS 8/2019 y Normas SEC" icon={BookOpen}>
                            <Paragraph>El Pliego Técnico DS 8/2019, aplicado en el contexto chileno pero con equivalencias internacionales, establece los requerimientos fundamentales de instalaciones eléctricas interiores. En este marco, el Técnico Eléctrico desarrollará competencias específicas vinculadas con:</Paragraph>
                            <List items={[
                                "Planificación de sistemas de distribución y empalmes: Selección de sistemas adecuados de conexión con la red pública, cálculo y verificación de calibres de conductores, acometidas y sistemas de protección primarios.",
                                "Implementación de medidas de protección: Elección e instalación de protecciones contra contactos directos e indirectos, asegurando la integridad física de los usuarios y la calidad del suministro.",
                                "Verificación de condiciones de montaje y medio ambiente: Adaptación de instalaciones a condiciones ambientales específicas (humedad, temperatura, polvos, gases), y cumplimiento de distancias mínimas de seguridad, accesibilidad y ventilación.",
                                "Adecuación de espacios de trabajo: Diseño, habilitación y utilización segura de los espacios de intervención (tableros, salas técnicas, ductos, bandejas, áreas de mantenimiento), conforme a la reglamentación.",
                                "Instalación y mantenimiento de tableros y alimentadores: Dimensionamiento correcto, selección de materiales, montaje seguro, identificación de circuitos y dispositivos, conforme a las normativas de la SEC.",
                                "Implementación y control de puestas a tierra: Diseño e instalación de sistemas de puesta a tierra, medición de resistencias y cumplimiento de parámetros normativos para la protección de personas y equipos sensibles."
                            ]} />
                        </ExpansionTile>
                        
                        <ExpansionTile title="Ética y Responsabilidad Social Profesional" icon={ShieldCheck}>
                            <Paragraph>Una dimensión crucial de las competencias del Técnico Eléctrico corresponde a la ética profesional y la responsabilidad social. Tal como indica la bibliografía y las orientaciones internacionales, el profesional debe:</Paragraph>
                            <List items={[
                                "Actuar con honestidad, transparencia y diligencia: El cumplimiento íntegro de la normativa y las mejores prácticas técnicas no solo protege a usuarios y bienes, sino que también contribuye a la sostenibilidad y prestigio del ejercicio profesional.",
                                "Reportar y prevenir situaciones irregulares o de riesgo: Comunicar de inmediato cualquier circunstancia que pueda afectar la seguridad o el cumplimiento normativo, proponiendo soluciones y no permitiendo la transgresión de regulaciones por presión de terceros.",
                                "Promover la mejora continua y el aprendizaje permanente: Motivar procesos de actualización técnica y normativa tanto en el ámbito personal como al interior de los equipos de trabajo.",
                                "Contribuir al desarrollo de la sociedad sustentable: Favorecer la inclusión de soluciones tecnológicas de bajo impacto, la educación comunitaria en seguridad eléctrica y la promoción de una cultura proactiva en la gestión energética racional."
                            ]} />
                        </ExpansionTile>
                        
                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusión</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Resumiendo, el Técnico Eléctrico es un profesional multifacético, cuyas competencias superan la mera ejecución manual, e involucran conocimiento profundo de la teoría, la regulación, la seguridad, la actualización tecnológica y el compromiso ético. Su labor es decisiva para el correcto funcionamiento de sistemas eléctricos en todos los niveles, manteniendo un enfoque de mejora continua, responsabilidad social y adaptación a los desafíos de la globalización y la sostenibilidad. La integración de estos conocimientos y habilidades asegura que el Técnico Eléctrico aporte valor real a la industria y a la sociedad, siendo un agente clave en la transición energética y en la construcción de infraestructuras más seguras y resilientes.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                En síntesis, como indican Roldán Viloria (2008) y las Normas Técnicas Sector Electricidad de la SEC, las competencias del Técnico Eléctrico forman un entramado complejo de saberes y valores, que deben ser cautelosamente promovidos y exigidos durante toda su formación, para dar respuesta, desde una perspectiva global y regulatoria, a las necesidades actuales y futuras del rubro eléctrico.
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
                            <Paragraph>El siguiente texto explora en detalle la prevención de riesgos en la industria eléctrica de acuerdo con el DS594/2000, desde sus fundamentos legales, el análisis del entorno laboral, las obligaciones de los empleadores y trabajadores, hasta la aplicación particular en actividades relacionadas con la generación, transmisión y distribución de energía eléctrica. Además, se proporcionará un enfoque académico enriquecido con conceptos fundamentales extraídos de las obras de referencia: “Fuentes de energía” de José Roldán Viloria, y las “Normas Técnicas Sector Electricidad” de la SEC.</Paragraph>
                        </div>
                        
                        <ExpansionTile title="Marco Normativo para la Prevención de Riesgos" icon={BookOpen}>
                            <SectionHeader title="Decreto Supremo Nº594/2000: Antecedentes y Alcance" />
                            <Paragraph>El DS594/2000, titulado “Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo”, constituye la piedra angular de la prevención de riesgos laborales en el territorio chileno. Establece los requisitos legales mínimos para la protección de la salud y la integridad física de los trabajadores en los diferentes sectores productivos, incluido el rubro eléctrico.</Paragraph>
                            <Paragraph>Este decreto, de alcance nacional, prescribe las condiciones higiénicas, ambientales, técnicas y organizativas que deben cumplirse durante el trabajo diario. Asimismo, subraya la importancia de la gestión preventiva, la vigilancia de la salud y la promoción de una cultura de seguridad en las organizaciones. La aplicación del DS594/2000 es obligatoria y supervisada por los organismos estatales competentes, siendo la Superintendencia de Electricidad y Combustibles (SEC) la entidad fiscalizadora en el contexto de la industria eléctrica.</Paragraph>
                            <SectionHeader title="Relación entre DS594/2000 y Normativa Específica de la Industria Eléctrica" />
                            <Paragraph>Como se detalla en las “Normas Técnicas Sector Electricidad” (SEC, 2000), la industria cuenta con normativas particulares que abordan los riesgos inherentes a la electricidad, sumándose a lo dispuesto por el DS594/2000. Mientras este último establece líneas generales en materia de higiene y seguridad, las normas de la SEC abordan aspectos como aislamiento, protección contra contactos eléctricos directos e indirectos, puesta a tierra, ambientes con presencia de humedad y gases, entre otros.</Paragraph>
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
                            <Paragraph>Según la “Fuentes de Energía” (Roldán Viloria, 2008), el riesgo inherente a la electricidad reside principalmente en su invisibilidad y en la rapidez de sus efectos nocivos, lo que exige una gestión proactiva y sistémica de las amenazas a través de métodos estructurados de evaluación.</Paragraph>
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
                                "Equipos de protección personal: guantes, ropa ignífuga, cascotes dieléctricos, pantallas de protección ocular y calzado adecuado."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="Medidas Específicas para la Industria Eléctrica" icon={Wrench}>
                            <SectionHeader title="Prevención de Contacto Eléctrico Directo e Indirecto" />
                            <Paragraph>Según las “Normas Técnicas Sector Electricidad” de la SEC, y en armonía con el DS594/2000, es esencial proteger contra contactos directos (personas en contacto con partes activas de circuitos) e indirectos (personas en contacto con partes que pueden estar accidentalmente energizadas).</Paragraph>
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
                    </div>
"""

new_content = content[:article_4_start] + new_articles_html + "\n                    " + content[article_end:]

with open(AE3_PATH, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Saved successfully")
