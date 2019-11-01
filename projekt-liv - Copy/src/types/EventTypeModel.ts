interface IEventTypeModel {
    Id: number;
    Date: string;
    Time: string;
    Location: string;
    Info: string;
  }
  
  export class EventTypeModel implements IEventTypeModel {
    public Id: number;
    public Date: string;
    public Time: string;
    public Location: string;
    public Info: string;
    /**
     *
     */
    constructor(
      id: number = 0,
      date: string = '',
      time: string = '',
      location: string = '',
      info: string = '',
    ) {
      this.Id = id;
      this.Date = date;
      this.Time = time;
      this.Location = location;
      this.Info = info;
    }
  }
  