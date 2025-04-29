# homes

This is a simple Angular web app that allows to browse housing locations, view details of an individual housing location, and navigate between home and details pages. This app was build by going through the Angular tutorial **Build your first Angular app locally** available on the Angular website [here](https://angular.dev/tutorials/first-app).

## Project Structure

```bash
src
├── app
│   ├── app.component.css       # Global component styles
│   ├── app.component.ts        # Root component
│   ├── app.config.ts           # Application-wide configuration (e.g., API endpoints)
│   ├── details
│   │   ├── details.component.css
│   │   └── details.component.ts
│   ├── home
│   │   ├── home.component.css
│   │   └── home.component.ts
│   ├── housing-location
│   │   ├── housing-location.component.css
│   │   └── housing-location.component.ts
│   ├── housinglocation.ts      # HousingLocation model/interface
│   ├── housing.service.ts      # Service for fetching housing data
│   └── routes.ts               # Angular routing definitions
├── assets
│   ├── angular.svg             # Angular logo
│   ├── location-pin.svg        # Icon for map pin
│   └── logo.svg                # Application logo
├── favicon.ico
├── index.html
├── main.ts                     # Bootstraps the Angular app
└── styles.css                  # Global styles
├── angular.json
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18.19.1
- [Angular CLI](https://angular.io/cli) ≥ 19.2.5

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hmoustaphaousmane/homes.git
   cd homes
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   ng serve --open
   ```

   The app will launch at `http://localhost:4200/`.

## Application Flow

1. **Home View** (`HomeComponent`)
   - Displays a list/grid of available housing locations.
   - Fetches data via `HousingService`.

2. **Details View** (`DetailsComponent`)
   - Shows full details for a selected housing location (name, city, state, images, ...).
   - Navigated to via Angular Router with a route parameter (`/details/:id`).

3. **Routing** (`routes.ts`)
   - Defines two primary routes:

     ```ts
     { path: '', component: HomeComponent },
     { path: 'details/:id', component: DetailsComponent },
     ```

4. **Data Model** (`housinglocation.ts`)
   - Interface defining the shape of a housing object (id, name, city, state, photo, availableUnits, wifi, laundry).

5. **Service Layer** (`HousingService`)
   - Wraps HTTP calls to fetch list and individual items.
   - Provides observables for components to subscribe to.

## Scripts

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `npm start`        | Starts the dev server (alias for `ng serve`) |
| `npm run build`    | Compiles the app into `dist/` for production |
| `npm test`         | Runs unit tests via [Karma](https://karma-runner.github.io) |
| `npm run lint`     | Lints files using [TSLint/ESLint]           |

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes and push:

   ```bash
   git commit -m "Add your feature"
   git push origin feature/YourFeature
   ```

4. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
