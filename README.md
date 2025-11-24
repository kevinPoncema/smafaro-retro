

# 🚦 Retro Semáforo

Una herramienta interactiva y visual construida en **React** para facilitar retrospectivas ágiles, utilizando la metáfora del semáforo para categorizar el feedback del equipo.

 

## 💡 La Idea: Metodología del Semáforo

Las retrospectivas son el corazón de la mejora continua en metodologías ágiles (Scrum, Kanban). Sin embargo, a veces las listas interminables de texto pueden resultar aburridas o difíciles de visualizar rápidamente.

**Retro Semáforo** soluciona esto categorizando los puntos de discusión en tres niveles de alerta visual:

1.  🔴 **ROJO (STOP / Problemas):**
      * *Concepto:* Cosas que nos impiden avanzar, bloqueos críticos o errores graves.
      * *Visual:* Si hay notas aquí, la luz roja del semáforo se enciende y parpadea, indicando una alerta inmediata.
2.  🟡 **AMARILLO (PRECAUCIÓN / Riesgos):**
      * *Concepto:* Cosas que no son críticas todavía, pero podrían serlo si no las atendemos. Advertencias o dudas.
      * *Visual:* Enciende la luz amarilla de advertencia.
3.  🟢 **VERDE (START / Aciertos):**
      * *Concepto:* Cosas que hicimos bien, agradecimientos o prácticas que debemos continuar (Keep doing).
      * *Visual:* Enciende la luz verde, celebrando el éxito del equipo.

## 🚀 Funcionalidades de la App

  * **Feedback Visual Inmediato:** El semáforo en la interfaz no es estático; reacciona en tiempo real. Si el equipo agrega un problema crítico (nota roja), la luz roja comienza a palpitar.
  * **Persistencia de Datos:** Utiliza `localStorage` para guardar las notas. Puedes cerrar el navegador y volver más tarde; tus notas seguirán ahí (sin necesidad de base de datos externa).
  * **Vista Resumida vs. Detallada:**
      * Una vista superior alineada con el semáforo que muestra solo los títulos ("píldoras") para un escaneo rápido.
      * Una vista inferior de columnas detalladas para leer el contenido completo.
  * **Gestión Intuitiva:** Crear y eliminar notas de forma sencilla mediante un modal y botones de acción.

## 🛠️ Tecnologías Utilizadas

El proyecto está construido con un stack moderno y ligero:

  * **[React](https://react.dev/):** Librería principal para la construcción de la interfaz. Uso extensivo de **Hooks** (`useState`, `useEffect`) para la gestión del estado y ciclo de vida.
  * **[Tailwind CSS](https://tailwindcss.com/):** Para el estilizado. Se utiliza para:
      * Diseño responsivo (Grid/Flexbox).
      * Animaciones (`animate-pulse`, `animate-in`).
      * Efectos visuales (`backdrop-blur`, `shadow-lg`).
  * **[Lucide React](https://lucide.dev/):** Set de iconos ligeros y modernos para una UI limpia.

## 📂 Estructura y Desarrollo

El código se organiza bajo una arquitectura de componentes funcionales. A continuación se explica cómo está desarrollado el núcleo de la aplicación:

### 1\. Gestión del Estado (`RetroSemaforo.js`)

El componente padre maneja la "única fuente de la verdad":

```javascript
const [notes, setNotes] = useState([]); // Almacena todas las notas
```

Cada vez que se agrega una nota, el estado se actualiza y React re-renderiza la interfaz.

### 2\. Lógica de Filtrado

Para alimentar las luces del semáforo y las columnas, el array principal se deriva en tres sub-listas en cada renderizado:

```javascript
const redNotes = notes.filter(n => n.type === 'red');
// ... lo mismo para yellow y green
```

### 3\. Componentes Modulares

Para mantener el código limpio, la interfaz se divide en sub-componentes reutilizables (definidos dentro del mismo archivo o externamente):

  * **`ColumnList`:** Renderiza las columnas de detalle (Roja, Amarilla, Verde). Acepta props como `headerStyle` y `cardBorder` para cambiar su color dinámicamente.
  * **`TypeButton`:** Botones seleccionables dentro del formulario modal para elegir la categoría.

## 📦 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/retro-semaforo.git
    cd retro-semaforo
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

    *(Asegúrate de tener instaladas las dependencias de `lucide-react` y `tailwindcss`)*.

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    Visita `http://localhost:5173` (o el puerto que te indique tu terminal).

-----

### ¿Cómo contribuir?

1.  Haz un Fork del proyecto.
2.  Crea una rama para tu funcionalidad (`git checkout -b feature/NuevaFuncionalidad`).
3.  Haz Commit de tus cambios (`git commit -m 'Agregada nueva funcionalidad'`).
4.  Haz Push a la rama (`git push origin feature/NuevaFuncionalidad`).
5.  Abre un Pull Request.

-----

### Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tus propias retrospectivas de equipo.

-----

### Siguiente paso sugerido:

¿Te gustaría que te prepare un archivo `.gitignore` o un `package.json` básico para acompañar este código si decides subirlo a un repositorio nuevo?