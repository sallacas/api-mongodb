# Bienvenido a nuestro Servicio con Express.js y MongoDB

¡Gracias por tu interés en nuestro servicio construido con Express.js y MongoDB! Este README te guiará para configurar y ejecutar el servicio localmente en modo de desarrollo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js (con npm)
- MongoDB

## Empezando

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/sallacas/api-mongodb.git
   cd nombre-del-repo
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

## Configuración

1. **Variables de Entorno:**

   Crea un archivo `.env` en el directorio raíz del proyecto y agrega las siguientes variables:

   ```plaintext
   MONGODB_URI=URL_DE_CONEXION
   ```

   Actualiza `MONGODB_URI` según tus necesidades.

## Ejecutar el Servicio

### Modo de Desarrollo

Para iniciar el servicio en modo de desarrollo con reinicio automático al realizar cambios en los archivos, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor Express.js usando `nodemon`, que vigila los cambios en tus archivos fuente y reinicia automáticamente el servidor.

### Modo de Producción

Para ejecutar el servicio en un entorno de producción (no cubierto en este README), típicamente usarías:

```bash
npm start
```

Asegúrate de configurar adecuadamente administradores de procesos como PM2 para implementaciones en producción.

## Estructura del Proyecto

Aquí tienes un resumen de alto nivel de la estructura del proyecto:

- `app.js`: Punto de entrada de la aplicación donde se configura Express.js.
- `routes/`: Contiene definiciones de rutas para diferentes endpoints de la API.
- `controllers/`: Implementa la lógica del negocio de la aplicación.
- `models/`: Define esquemas y modelos de MongoDB usando Mongoose.
- `config/`: Archivos de configuración.


Siéntete libre de modificar la estructura según tus necesidades de proyecto.
