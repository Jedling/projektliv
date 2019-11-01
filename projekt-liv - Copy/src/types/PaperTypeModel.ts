interface IPaperTypeModel {
    Id: number;
    Name: string;
    Url: string;
    Description: string;
  }
  
  export class PaperTypeModel implements IPaperTypeModel {
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
  