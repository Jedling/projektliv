interface IExcerciseTypeModel {
    Id: number;
    Name: string;
    Url: string;
    Src: string;
  }
  
  export class ExcerciseTypeModel implements IExcerciseTypeModel {
    public Id: number;
    public Name: string;
    public Src: string;
    public Description: string;
    /**
     *
     */
    constructor(
      id: number = 0,
      name: string = '',
      src: string = '',
      description: string = '',
    ) {
      this.Id = id;
      this.Name = name;
      this.Src = src;
      this.Description = description;
    }
  }
  