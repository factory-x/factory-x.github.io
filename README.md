# Getting Started

## Preparing your development environment

Step 1: 

Install node: https://nodejs.org/en/download/ (Choose the LTS version)

Step 2:

Install yarn (wrapper around npm for faster package installs):
```shell
npm install -g yarn
```
Step 3:

Install factory-x-cli (Command Line Interface)

Use npm because the yarn install is not working yet for this package
```shell
npm install -g factory-x-cli
```

Step 4:

Install Github Desktop: https://desktop.github.com/

(Or use the git cli tools if you're comfortable)

Also apply for a free account if you don't have one yet and log in


Step 5:

Configure word to avoid pop-up when opening documents with html-code:

File > Options > Advanced > General > disable 'Confirm file format conversion on open'


## Starting a new project

Step 1:

Create a new __**private**__ project on github:
* select add readme during creation
* choose the .gitignore of node

If you have a free account then ask someone with a paid account to create the project and give you access.

Step 2:

Use Github Desktop to clone the project to your own pc

Step 3:

Open a shell in the main project folder.

Initialize the project and fill in all the questions:

```shell
yarn init
```
Step 4:

Install the factory-x project tools:
```shell
yarn add factory-x
```
Step 5:

Create project.json in the main folder.

(Copy the content from a previous project and adjust.)

[todo: link to a manual for project.json]

Step 6:

Create following folder structure:

./model 

./templates/fds

./templates/plc

./output/model

./output/fds

./output/plc

Step 7:

Copy the model and templates (fds + plc) of a previous project

Step 8:

Generate the fds and plc-code based on the template:
```shell
fx render
```
Step 9:

Use github desktop to make the first commit to github.

(Fill in a summary and description!)

From here on make regular commits, from hourly to at least daily

Step 10:

Make changes to the model and templates as required, and execute 'fx render' when you want to review the output.

The templating engine is based on Nunjucks: https://mozilla.github.io/nunjucks/

# Model-A API

## Import of excel-based EM-tyes
The model can import EM-types defined in excel-spreadsheets.
Inside the model define the import like this:
```json
{
    "Equipment_Modules":{
        "Types":{
            "EM_TEST":["import_em", "EM_TEST.xlsx", "EM"]
        }
    }
}
```
Where:
- "import_em" = the type of import
- "EM_TEST.xlsx" = the path to the workbook
- "EM" = the name of the worksheet
 


