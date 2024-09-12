// Interface for square
interface Square {
    id: string;
    x: number;
    y: number;
    sizeX: number;
    sizeY: number;
    background_color: string;
    border_color: string;
    text_color: string;
    text: string;
    conect: string[];
  }
  
  // Interface for connections
  interface Connection {
    id: string;
    id_entry: string;
    id_exit: string;
    x_entry: number;
    y_entry: number;
    x_exit: number;
    y_exit: number;
  }
  
  // Interface for data
  interface Data {
    square_id: string;
    type: string;
    promt: string;
    extra: string;
  }
  
  // Main Flujo
 export class Flujo {
    name: string;
    descriptions: string;
    square: Square[];
    conections: Connection[];
    data: Data[];
  
    constructor(
      name: string,
      descriptions: string,
      square: Square[],
      conections: Connection[],
      data: Data[]
    ) {
      this.name = name;
      this.descriptions = descriptions;
      this.square = square;
      this.conections = conections;
      this.data = data;
    }
  
  }
