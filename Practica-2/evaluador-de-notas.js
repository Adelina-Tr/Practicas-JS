let nota = Math.floor(Math.random() * 101);

if (nota >= 90) {
    console.log(`Tu nota es ${nota}, Excelente`);
} else if (nota >= 80) {
    console.log(`Tu nota es ${nota}, Muy bien`);
} else if (nota >= 75) {
    console.log(`Tu nota es ${nota}, Bien`);
} else if (nota >= 60) {
    console.log(`Tu nota es ${nota}, Suficiente`);
} else {
    console.log(`Tu nota es ${nota}, No aprobatoria`);
}

