interface IFilmTypeModel {
    Id: number;
    Name: string;
    Url: string;
    Description: string;
  }
  
  export class FilmTypeModel implements IFilmTypeModel {
    public Id: number;
    public Name: string;
    public Url: string;
    public Description: string;
    /**
     *
     */
    constructor(
      id: number = 0,
      name: string = '',
      url: string = '',
      description: string = '',
    ) {
      this.Id = id;
      this.Name = name;
      this.Url = url;
      this.Description = description;
    }
  }
  