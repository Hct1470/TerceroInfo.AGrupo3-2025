document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration for content data (MODIFICA ESTOS VALORES PARA ACTUALIZAR EL CONTENIDO) ---
    const pageContent = {
        // Nacionales Section
        nacionales: {
            mainNews: {
                imageSrc: 'https://via.placeholder.com/600x350/ADD8E6/FFFFFF?text=Noticia+Nacional+Principal',
                imageAlt: 'Imagen principal de noticia nacional',
                title: 'Gran Avance en Tecnología Verde',
                paragraph: 'Científicos ecuatorianos anuncian un descubrimiento revolucionario en la eficiencia de paneles solares, prometiendo una nueva era en la producción de energía limpia. Este hito podría acelerar significativamente la transición hacia fuentes renovables en el país, impulsando la economía local y la sostenibilidad.'
            },
            smallNews: [
                {
                    imageSrc: 'https://via.placeholder.com/300x200/90EE90/333333?text=Nacional+1',
                    imageAlt: 'Noticia nacional sobre educación',
                    caption: 'Educación: Lanzan programa piloto para escuelas rurales en la sierra ecuatoriana, mejorando el acceso a la tecnología para miles de estudiantes.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/FFB6C1/333333?text=Nacional+2',
                    imageAlt: 'Noticia nacional sobre salud',
                    caption: 'Salud: Campaña de vacunación masiva alcanza nuevas metas en la costa, reduciendo significativamente los casos de enfermedades estacionales.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/DDA0DD/333333?text=Nacional+3',
                    imageAlt: 'Noticia nacional sobre seguridad',
                    caption: 'Seguridad: Se refuerzan los controles en la frontera para combatir el crimen organizado, lo que ha llevado a una reducción notable en la delincuencia transnacional.'
                }
            ]
        },
        // Deportes Section (with subsections)
        deportes: {
            tendencias: {
                title: 'Tendencias Deportivas', // Subtítulo
                description: 'Explora lo último en el mundo del deporte: desde los eSports en auge hasta las nuevas disciplinas fitness y el creciente impacto del deporte femenino. Mantente al día con lo que está marcando la pauta.',
                news: [ // Renombrado de 'tendencias' a 'news' para claridad
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/FFA07A/333333?text=Tendencias+Deportivas',
                        imageAlt: 'Noticia de tendencias deportivas',
                        caption: 'eSports en auge: Millones de espectadores sintonizan el campeonato mundial, consolidando a los deportes electrónicos como una industria de rápido crecimiento.'
                    },
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/F0E68C/333333?text=Fitness+Trends',
                        imageAlt: 'Nueva tendencia de fitness',
                        caption: 'Fitness: El entrenamiento funcional se consolida como la rutina preferida, atrayendo a atletas y aficionados por igual gracias a su versatilidad.'
                    },
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/B0C4DE/333333?text=Deporte+Femenino',
                        imageAlt: 'Impacto del deporte femenino',
                        caption: 'Fútbol Femenino: Crecimiento histórico en la liga profesional y apoyo de la afición, abriendo nuevas oportunidades para talentos emergentes.'
                    }
                ]
            },
            partidos: {
                title: 'Resultados y Próximos Partidos', // Subtítulo
                description: 'Sigue de cerca los marcadores más recientes, análisis de encuentros y la previa de los eventos deportivos que están por venir. ¡No te pierdas ningún detalle de tus competencias favoritas!',
                news: [ // Renombrado de 'partidos' a 'news' para claridad
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/ADD8E6/333333?text=Partido+Fútbol+Clásico',
                        imageAlt: 'Noticia de partido de fútbol',
                        caption: 'Clásico del Astillero: Se vive la previa de un emocionante encuentro decisivo que definirá al líder del campeonato nacional.'
                    },
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/DDA0DD/333333?text=Partido+Tenis',
                        imageAlt: 'Noticia de partido de tenis',
                        caption: 'Tenis: La final del Abierto de Quito rompe récords de audiencia y asistencia, destacando la creciente popularidad del deporte en la región.'
                    },
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/98FB98/333333?text=Resultados+Liga',
                        imageAlt: 'Resultados de la liga',
                        caption: 'Resultados: Sorprendente victoria del equipo de la parte baja de la tabla que sacude las predicciones y revitaliza la competencia.'
                    }
                ]
            },
            equipos: {
                title: 'Noticias de Equipos y Jugadores', // Subtítulo
                description: 'Conoce las últimas novedades sobre tus equipos favoritos, fichajes, rendimiento de jugadores y análisis tácticos. Todo lo que necesitas saber sobre el mundo de los clubes y atletas.',
                news: [ // Renombrado de 'equipos' a 'news' para claridad
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/87CEEB/333333?text=Equipo+Fútbol',
                        imageAlt: 'Noticia de equipo de fútbol',
                        caption: 'El club local anuncia nuevo fichaje estrella para la temporada entrante, generando gran expectativa entre los aficionados.'
                    },
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/FFDAB9/333333?text=Equipo+Baloncesto',
                        imageAlt: 'Noticia de equipo de baloncesto',
                        caption: 'Baloncesto: El equipo juvenil se proclama campeón invicto de su categoría, demostrando el talento de las nuevas generaciones.'
                    },
                    {
                        imageSrc: 'https://via.placeholder.com/300x200/FFE4E1/333333?text=Equipo+Voleibol',
                        imageAlt: 'Noticia de equipo de voleibol',
                        caption: 'Voleibol: Preparativos intensos para el torneo sudamericano con grandes expectativas de la selección nacional.'
                    }
                ]
            }
        },
        // Internacionales Section
        internacionales: {
            mainNews: {
                imageSrc: 'https://via.placeholder.com/600x350/B0E0E6/FFFFFF?text=Noticia+Internacional+Principal',
                imageAlt: 'Imagen principal de noticia internacional',
                title: 'Acuerdo Histórico entre Naciones para Combatir el Cambio Climático',
                paragraph: 'Líderes mundiales firman un tratado sin precedentes para acelerar la descarbonización y proteger los ecosistemas. Este pacto representa un paso crucial en la lucha contra la crisis ambiental global, sentando las bases para un futuro más sostenible.'
            },
            smallNews: [
                {
                    imageSrc: 'https://via.placeholder.com/300x200/87CEFA/333333?text=Internacional+1',
                    imageAlt: 'Noticia internacional sobre tecnología',
                    caption: 'Tecnología: Gigante asiático lanza un nuevo satélite de comunicaciones avanzado, prometiendo una conectividad global sin precedentes.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/C0C0C0/333333?text=Internacional+2',
                    imageAlt: 'Noticia internacional sobre política',
                    caption: 'Política: Elecciones en el continente europeo definen el futuro de la Unión, con resultados que podrían reconfigurar el panorama político global.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/FFC0CB/333333?text=Internacional+3',
                    imageAlt: 'Noticia internacional sobre cultura',
                    caption: 'Cultura: Festival de cine de Cannes premia a la película latinoamericana del año, reconociendo el talento emergente de la región.'
                }
            ]
        },
        // Olimpiadas Section
        olimpiadas: {
            mainNews: {
                imageSrc: 'https://via.placeholder.com/600x350/DA70D6/FFFFFF?text=Noticia+Olimpiadas+Principal',
                imageAlt: 'Imagen principal de noticia de olimpiadas',
                title: 'Atleta Ecuatoriano Gana Medalla de Oro en Levantamiento de Pesas',
                paragraph: 'Un momento histórico para el deporte ecuatoriano. El pesista se alza con la presea dorada, llevando la alegría y el orgullo a todo el país. Su disciplina y esfuerzo han sido recompensados en el escenario mundial, inspirando a futuras generaciones.'
            },
            smallNews: [
                {
                    imageSrc: 'https://via.placeholder.com/300x200/ADD8E6/333333?text=Olimpiadas+1',
                    imageAlt: 'Noticia de natación en olimpiadas',
                    caption: 'Natación: Nuevos récords mundiales se rompen en las piscinas olímpicas, demostrando el avance del deporte acuático a nivel global.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/FFDEAD/333333?text=Olimpiadas+2',
                    imageAlt: 'Noticia de gimnasia en olimpiadas',
                    caption: 'Gimnasia: La delegación juvenil sorprende con actuaciones impecables y creativas, asegurando su lugar en la élite mundial de la gimnasia.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/B0E0E6/333333?text=Olimpiadas+3',
                    imageAlt: 'Noticia de atletismo en olimpiadas',
                    caption: 'Atletismo: La final de los 100 metros planos mantiene al mundo en vilo, con un cierre espectacular que dejó a los espectadores al borde de sus asientos.'
                }
            ]
        },
        // Ambiental Section
        ambiental: {
            mainNews: {
                imageSrc: 'https://via.placeholder.com/600x350/98FB98/FFFFFF?text=Noticia+Ambiental+Principal',
                imageAlt: 'Imagen principal de noticia ambiental',
                title: 'Bosques Nativos de la Amazonía Ecuatoriana Registran Recuperación',
                paragraph: 'Esfuerzos de conservación y reforestación están dando frutos. Los datos recientes muestran una notable recuperación de la flora y fauna en zonas críticas de la Amazonía, un respiro para el pulmón del planeta y un éxito en la lucha contra la deforestación.'
            },
            smallNews: [
                {
                    imageSrc: 'https://via.placeholder.com/300x200/7FFFD4/333333?text=Ambiental+1',
                    imageAlt: 'Noticia sobre reciclaje',
                    caption: 'Reciclaje: Ciudades implementan sistemas innovadores para la gestión de residuos, promoviendo una cultura de sostenibilidad en la población.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/AFEEEE/333333?text=Ambiental+2',
                    imageAlt: 'Noticia sobre energías renovables',
                    caption: 'Energías Renovables: Inversiones millonarias impulsan proyectos de energía eólica, acelerando la transición hacia fuentes limpias y sostenibles.'
                },
                {
                    imageSrc: 'https://via.placeholder.com/300x200/F0F8FF/333333?text=Ambiental+3',
                    imageAlt: 'Noticia sobre especies protegidas',
                    caption: 'Fauna: Descubren nueva especie de anfibio en los Andes, un hito para la biodiversidad y un recordatorio de la riqueza natural de Ecuador.'
                }
            ]
        },
        // Footer Content
        footer: {
            contactEmail: 'info@wott5.com',
            contactPhone: '+593 99 123 4567',
            companyName: 'WoTT5',
            copyrightYear: '2025'
        }
    };
  
    // --- Helper function to create a small news item HTML structure ---
    function createSmallNewsItem(itemData) {
        const div = document.createElement('div');
        div.classList.add('small-news-item');
  
        const img = document.createElement('img');
        img.src = itemData.imageSrc;
        img.alt = itemData.imageAlt;
        div.appendChild(img);
  
        const p = document.createElement('p');
        p.classList.add('news-caption');
        p.textContent = itemData.caption;
        div.appendChild(p);
  
        return div;
    }
  
    // --- Function to populate a generic main news section ---
    function populateMainNewsSection(sectionId, contentData) {
        const sectionElement = document.getElementById(sectionId);
        if (!sectionElement) return;
  
        const mainNewsImageContainer = sectionElement.querySelector('.main-news-image');
        const mainNewsTitle = sectionElement.querySelector('.main-news-content .news-title');
        const mainNewsParagraph = sectionElement.querySelector('.main-news-content .news-paragraph');
        const smallNewsGrid = sectionElement.querySelector('.small-news-grid');
  
        // Check if mainNews exists and populate accordingly
        if (contentData.mainNews) {
            if (mainNewsImageContainer) {
                // Clear any existing image to prevent duplication
                mainNewsImageContainer.innerHTML = '<p class="placeholder-text">Imagen Principal</p>'; // Reset placeholder
                if (contentData.mainNews.imageSrc) {
                    const placeholderText = mainNewsImageContainer.querySelector('.placeholder-text');
                    if (placeholderText) placeholderText.remove();
                    const imgElement = document.createElement('img');
                    imgElement.src = contentData.mainNews.imageSrc;
                    imgElement.alt = contentData.mainNews.imageAlt;
                    mainNewsImageContainer.prepend(imgElement);
                }
            }
            if (mainNewsTitle) mainNewsTitle.textContent = contentData.mainNews.title;
            if (mainNewsParagraph) mainNewsParagraph.textContent = contentData.mainNews.paragraph;
        }
  
        // Check if smallNews exists and populate accordingly
        if (contentData.smallNews && smallNewsGrid) {
            smallNewsGrid.innerHTML = ''; // Clear existing
            contentData.smallNews.forEach(item => {
                smallNewsGrid.appendChild(createSmallNewsItem(item));
            });
        }
    }
  
    // --- Function to show a specific section and hide others ---
    function showSection(sectionName) {
        const allSections = document.querySelectorAll('main section');
        allSections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
  
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.style.display = 'block'; // Show the target section
  
            // Populate content only if it's not the initial 'inicio' section
            // and it's not already populated (or you want to re-populate on every click)
            if (sectionName !== 'inicio') {
                switch (sectionName) {
                    case 'nacionales':
                        populateMainNewsSection('nacionales-section', pageContent.nacionales);
                        break;
                    case 'deportes':
                        const deportesSection = document.getElementById('deportes-section');
                        if (deportesSection) {
                            // Populate Tendencias
                            const tendenciasSection = document.getElementById('deportes-tendencias');
                            if (tendenciasSection) {
                                const tendenciasTitle = tendenciasSection.querySelector('.sub-section-title');
                                if (tendenciasTitle) tendenciasTitle.textContent = pageContent.deportes.tendencias.title;
                                // Añadir el párrafo de descripción
                                let tendenciasDescription = tendenciasSection.querySelector('.sub-section-description');
                                if (!tendenciasDescription) { // Si no existe, créalo
                                    tendenciasDescription = document.createElement('p');
                                    tendenciasDescription.classList.add('sub-section-description');
                                    tendenciasTitle.after(tendenciasDescription); // Colocarlo después del título
                                }
                                tendenciasDescription.textContent = pageContent.deportes.tendencias.description;
  
                                const tendenciasGrid = tendenciasSection.querySelector('.small-news-grid');
                                if (tendenciasGrid) {
                                    tendenciasGrid.innerHTML = '';
                                    pageContent.deportes.tendencias.news.forEach(item => {
                                        tendenciasGrid.appendChild(createSmallNewsItem(item));
                                    });
                                }
                            }
                            // Populate Partidos
                            const partidosSection = document.getElementById('deportes-partidos');
                            if (partidosSection) {
                                const partidosTitle = partidosSection.querySelector('.sub-section-title');
                                if (partidosTitle) partidosTitle.textContent = pageContent.deportes.partidos.title;
                                // Añadir el párrafo de descripción
                                let partidosDescription = partidosSection.querySelector('.sub-section-description');
                                if (!partidosDescription) {
                                    partidosDescription = document.createElement('p');
                                    partidosDescription.classList.add('sub-section-description');
                                    partidosTitle.after(partidosDescription);
                                }
                                partidosDescription.textContent = pageContent.deportes.partidos.description;
  
                                const partidosGrid = partidosSection.querySelector('.small-news-grid');
                                if (partidosGrid) {
                                    partidosGrid.innerHTML = '';
                                    pageContent.deportes.partidos.news.forEach(item => {
                                        partidosGrid.appendChild(createSmallNewsItem(item));
                                    });
                                }
                            }
                            // Populate Equipos
                            const equiposSection = document.getElementById('deportes-equipos');
                            if (equiposSection) {
                                const equiposTitle = equiposSection.querySelector('.sub-section-title');
                                if (equiposTitle) equiposTitle.textContent = pageContent.deportes.equipos.title;
                                // Añadir el párrafo de descripción
                                let equiposDescription = equiposSection.querySelector('.sub-section-description');
                                if (!equiposDescription) {
                                    equiposDescription = document.createElement('p');
                                    equiposDescription.classList.add('sub-section-description');
                                    equiposTitle.after(equiposDescription);
                                }
                                equiposDescription.textContent = pageContent.deportes.equipos.description;
  
                                const equiposGrid = equiposSection.querySelector('.small-news-grid');
                                if (equiposGrid) {
                                    equiposGrid.innerHTML = '';
                                    pageContent.deportes.equipos.news.forEach(item => {
                                        equiposGrid.appendChild(createSmallNewsItem(item));
                                    });
                                }
                            }
                        }
                        break;
                    case 'internacionales':
                        populateMainNewsSection('internacionales-section', pageContent.internacionales);
                        break;
                    case 'olimpiadas':
                        populateMainNewsSection('olimpiadas-section', pageContent.olimpiadas);
                        break;
                    case 'ambiental':
                        populateMainNewsSection('ambiental-section', pageContent.ambiental);
                        break;
                }
            }
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the new section
        }
    }
  
    // --- Enable direct selection/copying (removed previous disabling styles) ---
    function enableDirectSelection() {
        // By not applying those styles, the text will be naturally selectable and copiable.
    }
  
    // --- Search functionality (basic example) ---
    const searchButton = document.getElementById('search-button');
    const globalSearchInput = document.getElementById('global-search');
  
    if (searchButton && globalSearchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = globalSearchInput.value.trim().toLowerCase();
            if (searchTerm) {
                alert(`Buscando: "${searchTerm}"\n(Esta es una función de búsqueda básica. En un sitio real, esto redirigiría a una página de resultados.)`);
            } else {
                alert('Por favor, ingresa un término de búsqueda.');
            }
        });
  
        globalSearchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    }
  
    // --- Handle navigation clicks ---
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior (page reload)
            const sectionName = event.target.dataset.section; // Get the section name from data-section attribute
            showSection(sectionName);
            highlightActiveNav(sectionName);
        });
    });
  
    // --- Highlight active navigation link ---
    function highlightActiveNav(activeSectionName) {
        document.querySelectorAll('nav a').forEach(link => {
            if (link.dataset.section === activeSectionName) {
                link.classList.add('active-nav');
            } else {
                link.classList.remove('active-nav');
            }
        });
    }
  
    // --- Initialize the page ---
    // Show the 'inicio' section by default when the page loads
    showSection('inicio');
    highlightActiveNav('inicio');
    enableDirectSelection(); // Call the updated function to ensure selectability
  });