export class Coord {
  constructor(public lat: Number, public lon: Number) {
    this.lat = lat;
    this.lon = lon;
  }
}
export class City {
  constructor(
    public id: Number,
    public name: String,
    public coord?: Coord,
    public country?: String
  ) {
    this.id = id;
    this.name = name;
    this.coord = coord;
    this.country = country;
  }
}
