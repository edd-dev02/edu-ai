# 🧠 edu-js-ia

Aplicación web construida con **Vite**, **TailwindCSS** y el SDK de **OpenRouter**, que permite interactuar con distintos modelos de lenguaje (LLMs) y mostrar sus respuestas en tiempo real mediante `streamText`.

> 🧒 *Curiosidad:* las respuestas del modelo están configuradas para expresarse como si fuera **un niño de 10 años**, lo que hace más entretenida la interacción.

---

## 🖼️ Vista Desktop

> *(Agrega aquí una captura de pantalla de la versión de escritorio de tu aplicación)*  
> Ejemplo:  
> ![Vista Desktop](./public/preview-desktop.png)

---

## 🚀 Características

- 🔄 **Respuestas en streaming:** el texto se renderiza progresivamente conforme el modelo responde.  
- 🤖 **Compatibilidad con varios LLMs:** soporta modelos como `meta-llama`, `deepseek`, `nvidia` o `google gemma`.  
- 🔐 **Variables de entorno seguras:** la API Key se maneja con `import.meta.env.VITE_OPENROUTER_KEY`.  
- ⚡ **Desarrollo rápido:** gracias a Vite y TailwindCSS.  

---

## 🧩 Tecnologías utilizadas

- [Vite](https://vitejs.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [OpenRouter AI SDK](https://openrouter.ai/docs)  
- [AI SDK (`ai`)](https://www.npmjs.com/package/ai)  

---

## ⚙️ Instalación y uso

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/edu-js-ia.git
cd edu-js-ia
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Configura tus variables de entorno
Crea un archivo .env en la raíz del proyecto con tu clave de OpenRouter:
```
VITE_OPENROUTER_KEY=tu_api_key_aqui
```

### 4. Ejecuta el entorno de desarrollo
```bash
npm run dev
```

### 5. Genera el build de producción
```bash
npm run build
```
El resultado estará en la carpeta `dist/`.

---

## 🎓 Créditos

Este proyecto fue desarrollado gracias a una de las secciones del curso  
[**JavaScript Moderno: Guía Definitiva + 10 Proyectos**](https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/?couponCode=ACCAGE0923)  
impartido por **Juan Pablo de la Torre Valdez**, como parte de la práctica sobre consumo de APIs y manejo de asincronía en JavaScript.

---

## 🧾 Licencia

Este proyecto se distribuye bajo la licencia MIT.  
Puedes usarlo, modificarlo y adaptarlo libremente.

---

### ✨ Autor

Desarrollado por **Eduardo Sandoval**  