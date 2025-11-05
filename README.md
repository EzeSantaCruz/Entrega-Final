# Sistema de Gestión de Stock y Productos

API RESTful desarrollada con Node.js y Express para la gestión de productos, categorías, órdenes y control de stock.

## 📊 Estructura de la Base de Datos

### Colecciones

#### Productos
```javascript
{
  nombre: String,
  descripcion: String,
  precio: Number,
  stock: Number,
  categoria: ObjectId (ref: 'categorias')
}
```

#### Categorías
```javascript
{
  nombre: String,
  descripcion: String
}
```

#### Órdenes
```javascript
{
  numeroOrden: String,
  cliente: {
    nombre: String,
    email: String,
    telefono: String
  },
  items: [{
    producto: ObjectId,
    cantidad: Number,
    precioUnitario: Number,
    subtotal: Number
  }],
  total: Number,
  metodoPago: String,
  estado: String,
  usuario: String
}
```

#### Movimientos de Stock
```javascript
{
  producto: ObjectId,
  tipo: String,
  cantidad: Number,
  fecha: Date,
  usuario: String
}
```

## 🛠 Tecnologías Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JWT para autenticación
- bcrypt para encriptación
- dotenv para variables de entorno
- cors para manejo de CORS

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/EzeSantaCruz/Entrega-Final.git
cd Entrega-Final
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo .env con las variables de entorno:
```env
MONGODB_URI=mongodb://localhost:27017/Trabajo_Final
PORT=3001
JWT_SECRET=tu_secreto_jwt
```

4. Ejecutar el proyecto:
```bash
# Ejecutar con Node
node index.js

# (Opcional) Si querés reinicio automático en desarrollo, instala nodemon globalmente o en el proyecto:
# npm install -g nodemon
# nodemon index.js
```

## 📡 Endpoints Disponibles

### Productos
- GET /api/producto/ - Listar productos
- GET /api/producto/:id - Obtener producto por ID
- POST /api/producto/crear - Crear producto
```json
{
    "nombre": "Smartphone XYZ",
    "descripcion": "Último modelo",
    "precio": 599.99,
    "stock": 50,
    "categoria": "6901370aa3857b67625f9a3e"
}
```
- PATCH /api/producto/update/:id - Actualizar producto
- DELETE /api/producto/delete/:id - Eliminar producto

### Categorías
- GET /api/categoria/ - Listar categorías
- POST /api/categoria/crear - Crear categoría
```json
{
    "nombre": "Electrónicos",
    "descripcion": "Productos electrónicos y gadgets"
}
```
- PATCH /api/categoria/update/:id - Actualizar categoría
- DELETE /api/categoria/delete/:id - Eliminar categoría

### Órdenes
- GET /api/orden/ - Listar órdenes
- POST /api/orden/crear - Crear orden
```json
{
    "cliente": {
        "nombre": "Juan Pérez",
        "email": "juan@email.com",
        "telefono": "1122334455"
    },
    "items": [
        {
            "producto": "6901370aa3857b67625f9a3e",
            "cantidad": 2,
            "precioUnitario": 100,
            "subtotal": 200
        }
    ],
    "total": 200,
    "metodoPago": "efectivo",
    "usuario": "vendedor1"
}
```
- PATCH /api/orden/update/:id - Actualizar orden
- DELETE /api/orden/delete/:id - Eliminar orden

### Stock
- PATCH /api/stock/update/:id - Actualizar stock (valor absoluto)
```json
{
    "stock": 100,
    "usuario": "admin"
}
```
- POST /api/stock/adjust/:id - Ajustar stock (incremento/decremento)
```json
{
    "delta": 5,
    "usuario": "admin"
}
```

### Autenticación
- POST /api/auth/login - Iniciar sesión
```json
{
    "email": "usuario@email.com",
    "password": "Contraseña123"
}
```
- POST /api/auth/register - Registrar usuario
```json
{
    "nombre": "Usuario Nuevo",
    "email": "usuario@email.com",
    "password": "Contraseña123"
}
```

## 🔒 Autenticación

La mayoría de los endpoints requieren autenticación mediante Bearer Token. Para usarlos:

1. Obtener token mediante login
2. Incluir en headers:
```
Authorization: Bearer <tu_token>
```

## 📝 Notas Adicionales

- Todos los endpoints de modificación (POST, PATCH, DELETE) requieren autenticación
- Las contraseñas deben tener al menos 6 caracteres, incluir mayúsculas, minúsculas y números
- Los IDs en los ejemplos son ilustrativos, usar IDs válidos de tu base de datos

Nota sobre CORS

Este proyecto por defecto puede no tener CORS habilitado. Si estás probando desde Postman no hace falta configurar CORS, pero si usás un frontend (por ejemplo React) y necesitás permitir peticiones desde otro origen, habilitalo así:

1) Instalar paquete `cors`:

```bash
npm install cors
```

2) En `index.js` o el archivo donde configures Express, agregar (ejemplo recomendado que permitirá todas las conexiones y métodos principales):

```javascript
import cors from 'cors'
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))
```

Nota de seguridad: `origin: "*"` permite cualquier origen y está bien para desarrollo o pruebas, pero en producción se recomienda restringirlo a los orígenes de tus frontends (por ejemplo `http://mi-frontend.com`) para evitar solicitudes no deseadas.
