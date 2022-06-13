export class Peripherique {
  refProd: string;
  nameProd: string;
  qteProd: number;
  photoProd: string;
  constructor(
    refProd: string,
    nameProd: string,
    qteProd: number,
    photoProd: string
  ) {
    this.refProd = refProd;
    this.nameProd = nameProd;
    this.qteProd = qteProd;
    this.photoProd = photoProd;
  }
}
