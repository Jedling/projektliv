interface IFindUsTypeModel {
    Id: number;
    Name: string;
    Street: string,
    Phone: string;
    Email: string
    City: string;
    Url: string;
  }
  
  export class FindUsTypeModel implements IFindUsTypeModel {
    public Id: number;
    public Name: string;
    public Street: string;
    public Phone: string;
    public Email: string;
    public City: string;
    public Url: string;
    /**
     *
     */
    constructor(
      id: number = 0,
      name: string = '',
      street: string = '',
      phone: string = '',
      email: string = '',
      city: string = '',
      url: string = '',
    ) {
      this.Id = id;
      this.Name = name;
      this.Street = street;
      this.Phone = phone;
      this.Email = email;
      this.City = city;
      this.Url = url;
    }
  }
  