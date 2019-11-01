interface INavTypeModel {
  Id: number;
  Name: string;
  Color: string;
  Selected: boolean;
  Route: string;
}

export class NavTypeModel implements INavTypeModel {
  public Id: number;
  public Name: string;
  public Color: string;
  public Selected: boolean;
  public Route: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    color: string = '',
    selected: boolean = false,
    route: string = '',
  ) {
    this.Id = id;
    this.Name = name;
    this.Color = color;
    this.Selected = selected;
    this.Route = route;
  }
}
