# Trabajo Práctico: Validador de Passwords con TDD

Este proyecto implementa un validador de contraseñas desarrollado bajo la metodología **(TDD)**, garantizando la trazabilidad y la calidad del código a través de ciclos de Red-Green-Refactor.

## 🚀 Instalación

se intalo node y jest
npm install
npm test
npm test -- --coverage

### Desiciones de diseno
se optó por un diseño orientado a reglas:
Las reglas de validación se almacenan en un array de objetos (REGLAS). Cada objeto tiene una función de verificación y un mensaje de error asociado. Esto permite agregar o quitar validaciones sin modificar la lógica principal de la función.Se utilizaron expresiones regulares centralizadas en constantes para validar patrones complejos (mayúsculas, minúsculas, números, símbolos y repeticiones) de forma eficiente. Al usar .filter() y .map() sobre el array de reglas, el sistema puede devolver todos los errores encontrados en un solo ciclo, mejorando la experiencia del usuario final y evitando múltiples llamadas innecesarias.

### supuestos adoptados 
Símbolos Especiales: Se consideran caracteres especiales los incluidos en el conjunto estándar de teclado: [! @ # $ % ^ & * ( ) , . ? " : { } | < >].
Username Opcional: Si no se proporciona un nombre de usuario al llamar a la función (parámetro undefined), la validación de "No contener username" se considera exitosa por defecto para evitar errores de ejecución.
Comparación Case-Insensitive: La validación que impide el uso del nombre de usuario dentro de la clave ignora mayúsculas y minúsculas (ej: si el usuario es "Nelson", la clave no puede contener "nelson" ni "NELSON").
Caracteres Consecutivos: La regla de 3 caracteres iguales consecutivos aplica a cualquier tipo de carácter (letras, números o símbolos) de forma idéntica, utilizando referencias retroactivas en expresiones regulares.