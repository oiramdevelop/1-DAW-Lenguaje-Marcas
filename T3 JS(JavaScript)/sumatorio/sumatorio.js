

"use strict"
Funciones={

    // SET DATOS 
    numeros: new Array(),
    setDatos: function(vector){
        this.numeros = vector;
    },

    
    getMedia: function(){
        let suma = 0;
        let media = 0;
        for (pos in this.vector_numeros){
            suma = suma + this.vector_numeros[pos];
        }
        media = suma / this.vector_numeros.length;
        return media;
    },

    getModa: function(){
        // Implementación de la moda pendiente
    },

    getMediana: function(){
        this.vector_numeros.sort();
        // Implementación de la mediana pendiente
    }
}

let vector_prueba = new Array(3);
vector_prueba[0] = 5;
vector_prueba[1] = 10;
vector_prueba[2] = 8;

gestor_vectores.setDatos(vector_prueba);
let media = gestor_vectores.getMedia();
document.write("La media es: " + media);
