interface IAboutUsTypeModel {
    Id: number;
    Text: string;
    Src: string;
  }
  
  export class AboutUsTypeModel implements IAboutUsTypeModel {
    public Id: number;
    public Text: string;
    public Src: string;
    /**
     *
     */
    constructor(
      id: number = 0,
      text: string = '',
      src: string = '',
    ) {
      this.Id = id;
      this.Text = text;
      this.Src = src;
    }
  }
  