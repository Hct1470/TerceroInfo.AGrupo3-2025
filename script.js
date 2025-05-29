document.addEventListener('DOMContentLoaded', () => {
    // --- Funcionalidad de Edición de Contenido ---
    const editableContents = document.querySelectorAll('.editable-content');
    editableContents.forEach(element => {
      // Hace que el contenido sea editable
      element.contentEditable = 'true';
  
      // Guarda el contenido cuando el usuario deja de editar
      element.addEventListener('blur', () => {
        const field = element.dataset.field;
        const parentSectionId = element.closest('.editable').id;
        if (parentSectionId && field) {
          // Aquí podrías enviar el contenido a un servidor o guardarlo localmente
          console.log(`Contenido actualizado para ${parentSectionId} - ${field}: ${element.textContent}`);
          // Ejemplo de guardar en localStorage (para persistencia simple en el navegador)
          localStorage.setItem(`${parentSectionId}_${field}`, element.textContent);
        }
      });
  
      // Carga el contenido guardado al cargar la página
      const field = element.dataset.field;
      const parentSectionId = element.closest('.editable').id;
      if (parentSectionId && field) {
        const savedContent = localStorage.getItem(`${parentSectionId}_${field}`);
        if (savedContent) {
          element.textContent = savedContent;
        }
      }
    });
  
    // --- Funcionalidad de Carga de Imágenes ---
    const imageContainers = document.querySelectorAll('.editable .imagen-grande, .editable .noticia img');
  
    imageContainers.forEach(container => {
      // Si es un contenedor de imagen grande (div)
      if (container.classList.contains('imagen-grande')) {
        const imageUploadInput = container.querySelector('.image-upload');
        const imageText = container.querySelector('.editable-content');
  
        container.addEventListener('click', () => {
          imageUploadInput.click(); // Simula el clic en el input de archivo
        });
  
        imageUploadInput.addEventListener('change', (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // Crea una nueva imagen y la añade al contenedor
              let imgElement = container.querySelector('img');
              if (!imgElement) {
                imgElement = document.createElement('img');
                container.innerHTML = ''; // Limpia el texto 'Imagen Principal'
                container.appendChild(imgElement);
              }
              imgElement.src = e.target.result;
              imgElement.alt = "Imagen subida";
  
              // Opcional: Guarda la imagen en localStorage como Data URL (solo para demostración, no para imágenes grandes)
              localStorage.setItem('ultima-hora-image', e.target.result);
            };
            reader.readAsDataURL(file);
          }
        });
  
        // Carga la imagen guardada al cargar la página
        const savedImage = localStorage.getItem('ultima-hora-image');
        if (savedImage) {
          let imgElement = container.querySelector('img');
          if (!imgElement) {
            imgElement = document.createElement('img');
            container.innerHTML = '';
            container.appendChild(imgElement);
          }
          imgElement.src = savedImage;
          imgElement.alt = "Imagen guardada";
        }
  
      } else if (container.tagName === 'IMG') { // Si es una etiqueta de imagen (img)
        const imageUploadInput = container.nextElementSibling; // El input file está justo después de la imagen
  
        container.addEventListener('click', () => {
          imageUploadInput.click();
        });
  
        imageUploadInput.addEventListener('change', (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              container.src = e.target.result;
              // Guarda la imagen para esta noticia específica
              localStorage.setItem(`noticia-${container.closest('.noticia').id}-image`, e.target.result);
            };
            reader.readAsDataURL(file);
          }
        });
  
        // Carga la imagen guardada al cargar la página
        const savedImage = localStorage.getItem(`noticia-${container.closest('.noticia').id}-image`);
        if (savedImage) {
          container.src = savedImage;
        }
      }
    });
  
  
    // --- Funcionalidad de Búsqueda Global ---
    const globalSearchInput = document.getElementById('global-search');
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', performGlobalSearch);
    globalSearchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        performGlobalSearch();
      }
    });
  
    function performGlobalSearch() {
      const searchTerm = globalSearchInput.value.toLowerCase();
      const allSections = document.querySelectorAll('main section');
      let found = false;
  
      if (searchTerm === '') {
          alert('Por favor, ingresa un término de búsqueda.');
          return;
      }
  
      allSections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        if (sectionText.includes(searchTerm)) {
          section.style.backgroundColor = '#fffacd'; // Resalta la sección
          section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        } else {
          section.style.backgroundColor = ''; // Remueve el resaltado si no coincide
        }
      });
  
      if (!found) {
        alert(`No se encontraron resultados para "${searchTerm}" en esta página.`);
      }
    }
  
    // --- Funcionalidad de Navegación por Apartados (simulada) ---
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
  
    // Inicialmente muestra todas las secciones
    sections.forEach(section => {
      section.style.display = 'flex';
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
        const targetSectionId = event.target.dataset.section;
  
        sections.forEach(section => {
          if (targetSectionId === 'inicio') {
            section.style.display = 'flex'; // Muestra todas las secciones si es "INICIO"
          } else if (section.id === `${targetSectionId}-section`) {
            section.style.display = 'flex'; // Muestra la sección objetivo
          } else {
            section.style.display = 'none'; // Oculta otras secciones
          }
        });
  
        // Desplaza a la primera sección visible si no es "INICIO"
        if (targetSectionId !== 'inicio') {
          const firstVisibleSection = document.querySelector(`main section[id="${targetSectionId}-section"]`);
          if (firstVisibleSection) {
            firstVisibleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // Si es "INICIO", desplaza al inicio de la página principal
          document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });