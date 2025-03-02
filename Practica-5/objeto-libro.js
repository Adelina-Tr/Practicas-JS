class Libro {
    //COnstructor para definir propiedades del libro
    constructor(titulo, autor, anio, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
      this.estado = estado;
      this.capitulos = [];//Arreglo para almacenar capitulos
    }
  
    //Metodo para describir un libro
    describirLibro() {
      return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }
  
    //Metodo para agregar capitulos
    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
    }
  
    //Metodo para eliminar capitulos
    eliminarCapitulo(indice) {
      if (indice >= 0 && indice < this.capitulos.length) {
        this.capitulos.splice(indice, 1);
      } else {
        console.log('Índice no válido');
      }
    }
  }
  
  //Pruebas de la clase libro y sus metodos
  const miLibro = new Libro('1984', 'George Orwell', 1949, 'disponible');//Instancia de la clase libro
  miLibro.agregarCapitulo('Capítulo 1: Introducción');//Agregando capitulos
  miLibro.agregarCapitulo('Capítulo 2: La Gran Hermano');
  miLibro.agregarCapitulo('Capítulo 3: La Revolución');
  miLibro.agregarCapitulo('Capítulo 4: El Fin');
  console.log(miLibro.describirLibro());//Usando el metodo para describir el libro
  console.log(miLibro.capitulos);//Imprimiendo el arreglo de capitulos
  miLibro.eliminarCapitulo(3);//Eliminando capitulo 4
  console.log(miLibro.capitulos);//Imprimiendo el arreglo de capitulos
  