✏️ Ejercicio 1: Actualizar un item (PUT)
📍 Ruta esperada: /items/:id
📦 Método: PUT
🎯 Objetivo: Actualizar el campo nombre de un item según su id.

🔍 Pistas:
Usá req.params.id para obtener el ID desde la URL.

Buscá el item en el array con .find(...).

Usá req.body para acceder al nuevo nombre.

Si el item no existe, respondé con res.status(404).json(...).

Si lo encontrás, actualizalo y respondé con el item modificado.

🧩 Código base:
app.put('/items/:id', (req, res) => {
  // 1. Obtener el id
  // 2. Buscar el item
  // 3. Validar si existe
  // 4. Reemplazar nombre
  // 5. Responder con el nuevo item
});


🗑️ Ejercicio 2: Eliminar un item (DELETE)
📍 Ruta esperada: /items/:id
📦 Método: DELETE
🎯 Objetivo: Eliminar un item del array usando su id.

🔍 Pistas:
Usá findIndex(...) para encontrar el índice del item.

Si el índice es -1, el item no existe.

Usá .splice(...) para eliminarlo del array.

Respondé con un mensaje que incluya el item eliminado.

🧩 Código base:
app.delete('/items/:id', (req, res) => {
  // 1. Obtener el id
  // 2. Buscar índice
  // 3. Validar si existe
  // 4. Eliminar con splice
  // 5. Responder con confirmación
});


¡Buena suerte!
