interface IRadioTypeModel {
    Id: number;
    Name: string;
    Url: string;
    Description: string;
  }
  
  export class RadioTypeModel implements IRadioTypeModel {
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
  