export class Musician {
  constructor(albumUrl) {
    this.albumUrl = albumUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumUrl);
    const albums = await response.json();

    return albums;
  }
}
