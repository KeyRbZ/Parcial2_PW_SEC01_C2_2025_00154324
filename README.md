# Parcial2_PW_SEC01_C2_2025_00154324

🔧 CONFIGURACIÓN INICIAL

### PASO 1: INSTALAR EXPRESS
npm install express

### PASO 2: INICIAR EL SERVIDOR
node server.js

### PASO 3. Verificar que el servidor esté corriendo:
Debe aparecer: "Servidor corriendo en http://localhost:3130"

# Probar los ENDPOINTS 

#### 4. Abrir Postman o navegador y probar:

##### Endpoint 1 - Todas las cuentas:
http://localhost:3130/cuentas

#### Endpoint 2 - Cuenta por ID (usar cualquier ID del JSON):
http://localhost:3130/cuentas/68f961e34fa925e8c9e5d303

#### Endpoint 3 - Búsqueda por parámetro:
http://localhost:3130/cuentas/search?queryParam=female

http://localhost:3130/cuentas/search?queryParam=Esmeralda

http://localhost:3130/cuentas/search?queryParam=male

#### Endpoint 4 - Balance total:
http://localhost:3130/cuentas/balance/total

## ¿Qué se espera ver?
#####  - Todos los endpoints deben responder con status 200
##### - Las respuestas deben ser en formato JSON
##### - Deben verse 10 cuentas en total
##### - El balance total debe ser un número
