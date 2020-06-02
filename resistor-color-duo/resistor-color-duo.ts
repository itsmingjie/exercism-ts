export class ResistorColor {
  private colors: string[];
  private colorMap: string[] = [
    "black",
    "brown",
    "bed",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  constructor(colors: string[]) {
    if (colors.length < 2)
      throw new Error("At least two colors need to be present")
      
    this.colors = colors;
  }

  value = (): number => {
      return (
        this.colorMap.indexOf(this.colors[0]) * 10 +
        this.colorMap.indexOf(this.colors[1])
      );
  };
}
