interface IReferenceTypeModel {
  Id: number;
  Name: string;
  Url: string;
  Description: string;
  Image: string;
}

export class ReferenceTypeModel implements IReferenceTypeModel {
  public Id: number;
  public Name: string;
  public Url: string;
  public Description: string;
  public Image: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    url: string = '',
    description: string = '',
    image: string = '',
  ) {
    this.Id = id;
    this.Name = name;
    this.Url = url;
    this.Description = description;
    this.Image = image;
  }
}
