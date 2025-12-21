Colombian Sign Language Dictionary - TFM

Las operaciones que la API debe soportar son las siguientes:
- Crear palabra
- Consultar lista de palabras
- Consultar palabra por texto
- Actualizar palabra completamente

**Recursos identificados**
- palabras (Palabras): Representa una palabra traducida en LSC en el sistema.

| Método Http | Endpoint    | Query Params | Cuerpo JSON de la petición           | Respuesta JSON de la petición                                      | Códigos HTTP de respuesta posibles                                   |
|-------------|-------------|--------------|--------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------|
| POST        | /api/palabras/      |              | `{"palabra":"string","significadoAnimacion":"file (GIF)"}`  | `{"id":integer}` | 201 Created, 400 Bad Request, 500 Internal Server Error              |
| GET         | /api/palabras/texto/{texto}      |              |                                      | `{"significadoAnimacion":"string"}` | 200 OK, 500 Internal Server Error, 400 Bad Request, 404 Not Found    |
| GET         | /api/palabras/ |              |                                      | `[{"id":integer,"palabra":"string","creadoEl":"string","ultimaModificacion":"string", "significadoAnimacion":"string"}]` | 200 OK, 404 Not Found, 500 Internal Server Error, 404 Not Found      |
| PUT         | /api/palabras/{id} |              | `{"palabra":"string","significadoAnimacion":"file (GIF)"}`  | `{"actualizado":integer}` | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Server Error    |
