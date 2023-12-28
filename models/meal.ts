export enum Complexity {
  Simple = 'Simple',
  Challenging = 'Challenging',
  Hard = 'Hard'
}

export enum Affordability {
  Affordable = 'Affordable',
  Pricey = 'Pricey',
  Luxurious = 'Luxurious'
}

class Meal {
  public id: string;
  public categories: Array<string>;
  public title: string;
  public imageUrl: string;
  public ingredients: Array<string>;
  public steps: Array<string>;
  public duration: number;
  public complexity: Complexity;
  public affordability: Affordability;
  public isGlutenFree: boolean;
  public isLactoseFree: boolean;
  public isVegan: boolean;
  public isVegetarian: boolean;
  
  constructor(
    id: string,
    categories: Array<string>,
    title: string,
    imageUrl: string,
    ingredients: Array<string>,
    steps: Array<string>,
    duration: number,
    complexity: Complexity,
    affordability: Affordability,
    isGlutenFree: boolean,
    isLactoseFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean
  ) {
     this.id = id;
     this.categories = categories;
     this.title = title;
     this.imageUrl = imageUrl;
     this.ingredients = ingredients;
     this.steps = steps;
     this.duration = duration;
     this.complexity = complexity;
     this.affordability = affordability;
     this.isGlutenFree = isGlutenFree;
     this.isLactoseFree = isLactoseFree;
     this.isVegan = isVegan;
     this.isVegetarian = isVegetarian;
   }
}

export default Meal;