# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Personal Notes by Justin

### Chapter 1: The Hero Editor

- Each component has selector which indicates parent of class, HTML template and CSS (or SCSS) for styles
- @Component - decorator function specifies Angular metadata for component
- ngOnInit() - lifecycle hook (initialize component)
- Export component class 
- Two-way binding using ngModel directive (not available by default - need to import manually)

### Chapter 2: Display a selection list

- Main Idea: Create Mock Heroes --> Displaying heroes --> Viewing details
- Create event binding together with event handler
- Structural and attribute directive
- Event binding + Class binding (such as [class.selected]="<condition>")
- Styles + stylesheets identified in @Component metadata scoped to specific component - doesn't affect other components

### Chapter 3: Create Feature Component
- Main idea is refactoring one big class into two classes where HeroComponent is parent class & HeroDetailComponent is child class
- Placing features into one component not feasible, better to have multiple components
- HeroesComponent displays list of heroes but HeroDetailComponent shows present details of hero
- `ng generate component hero-detail`
- @Input decorator in child component class and then use property binding in parent component class

### Chapter 4: Add Services
- Components generally shouldn't directly fetch or save data
- **Angular Dependency Injection (DI)** - design pattern where class requires dependenices from external sources than creating them individually
- Services used to share information from one class to another
- Create HeroService --> Provide HeroService (created by default)
- Observable HeroService uses HTTPClient + Subscribe in HeroesComponent
- Show Messages --> injecting MessageService into HeroService required to see if HeroService fetches heroes successfully
    - Also known as 'Service-in-service scenario'