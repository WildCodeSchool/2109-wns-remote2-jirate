<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">JiraTé</h1>

</div>
<p align="center">
    <a href="#">View Demo</a>
</p>

<!-- ABOUT THE PROJECT -->

### Built With

For this project we had chosen these different languages/framework.

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)

<!-- GETTING STARTED -->

## Getting Started

### Installation

To set up the project please follow these steps:

1.  Clone the repo
    ```sh
    git clone https://github.com/WildCodeSchool/2109-wns-remote2-jirate.git
    ```
2.  Install packages
    ```sh
    yarn
    ```
3.  Copy the environnement variables :
    ```sh
    cp .env.sample .env
    ```
4.  Copy the typeorm config :
    ```sh
    cp ormconfigsample.json .ormconfig.json
    ```
5.  Add permission for running the application
    ```sh
    chmod +x start.dev.sh
    ```

<!-- USAGE EXAMPLES -->

## Usage

Here are the different commands you need to know to run the project on your machine:

1.  Run the startup script
    ```sh
    ./start.dev.sh
    ```
2.  Generate a migration with typeorm
    ```sh
    yarn migration:generate -- ReplaceNameMigration
    ```
3.  Create a migration with typeorm
    ```sh
    yarn migration:create -- ReplaceNameMigration
    ```
4.  Launching migrations
    ```sh
    yarn migration:run
    ```
5.  Command to linter the code with eslint/prettier
    ```sh
    yarn lint
    ```
