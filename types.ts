export interface Destacado{
    id:string;
    label: string;
    imageUrl: string;
};
export interface Entrada{
    id:string;
    name: string;
    value: string;
    quantity: string;
};
export interface Category{
    id:string;
    name: string;
    destacado: Destacado;
}
export interface Evento{
    id:string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    fecha: Fecha;
    entrada:Entrada;
    ubicacion: Ubicacion;
    images: Image[];
}
export interface Image {
    id:string;
    url: string;
}
export interface Fecha {
    id: string;
    name:string;
    value:string
}
export interface Ubicacion {
    id: string;
    name:string;
    value:string
}