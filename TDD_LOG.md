# TDD_LOG
Trabajo Práctico Validador de Contraseñas

## Datos del estudiante
**Nombre y apellido:** Nelson Leandro Chen
**Fecha:** 29 de Abril de 2026
**Curso/Grupo:** 

## Registro de ciclos TDD
| Ciclo | Test agregado (nombre y objetivo) | Evidencia Rojo (error/salida) | Cambio mínimo aplicado (Verde) | Refactor realizado | Evidencia final (tests en verde) |
|1| Estructura: Verificar retorno de objeto `{esValida, errores}`.| TypeError: validarPassword is not a function| Creé la función y agregué validación de longitud| no aplico| pass
|2|Validar que contenga al menos una mayúscula| ciclo 2: Mayúscula × Debería ser invalida si no tiene al menos una mayúscula (2 ms)|Agregué la regla /[A-Z]/ al array de REGLAS|NO| passTests: 2 passed, 2 total|
|3|validar existencia de minúsculas|ciclo 3: Minúsculas
    × Debería ser invalida si no tiene al menos una minúscula (2 ms)| Agregué la regla /[a-z]/ al array de REGLAS|no aplica| Tests: 3 passed, 3 total
|4|Validar existencia de un numero| Ciclo 4: 1 numero al menos
    × Debería ser invalida si no tiene al menos un número (1 ms)|agregue regla /\d/|extraigo las regex para que el codigo sea mas legible y facil de mantener |Tests: 4 passed, 4 total

|5| caracater especial| Tests: 1 failed, 4 passed, 5 total|agregue TIENE_SIMBOLO = /[!@#$%^&*(),.?":{}|<>]/; a las regex|no aplico |Tests:5 passed, 5 total
|6| sin espacios| Tests: 1 failed, 5 passed, 6 total| agregue TIENE_ESPACIOS = /\s/ que no debe cumplirse| No aplica| Tests: 6 passed, 6 total
|7| no contener el nombre de usuario| Ciclo 7: Nombre de usuario
    × Debería ser invalida si la contraseña contiene el nombre de usuario (1 ms)|Agregué validación con .includes() y pasé el parámetro username al filtro| no aplico| Tests:       7 passed, 7 total
|8| sin caracteres seguidos| Regla 8: Caracteres consecutivos
    × Debería ser invalida si tiene 3 letras iguales seguidas (2 ms)| agregue TIENE_CONSECUTIVOS = /(.)\1\1/ a las reglas y eso no debe cumplirse| no aplica|Tests:       8 passed, 8 total