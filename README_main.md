# Getting Started

## Preparing your development environment
**Step 1** 
Install node: https://nodejs.org/en/download/ (Choose the LTS version)

**Step 3**
Install factory-x-cli (Command Line Interface)
```
npm install -g factory-x-cli
```

**Step 4**
Install Github Desktop: https://desktop.github.com/
(Or use the git cli tools if you're comfortable)
Also apply for a free account if you don't have one yet and log in


## Starting a new project


**Step 1**
Create a new folder where you want to put the project

**Step 3**
Open a shell in the main project folder.

Initialize the project and fill in all the questions:

```shell
npm init
```
**Step 4**
Install the factory-x project tools:
```shell
npm install factory-x --save
```
**Step 5**
Create project.json in the main folder.
(Copy the content from a previous project and adjust.)
[todo: link to a manual for project.json]

**Step 6**
Create following folder structure:
```
./model 
./templates/plc
./output/model
./output/plc
./output/hmi
```
**Step 7**
Copy the model and templates (fds + plc) of a previous project

**Step 8**
Generate the fds and plc-code based on the template:
```shell
fx render
```

**Step 10**
Make changes to the model and templates as required, and execute 'fx render' when you want to review the output.
The templating engine is based on Nunjucks: https://mozilla.github.io/nunjucks/

# Model-A API
## Schema definitions
<<<<<<< HEAD:README_main.md

{% for doc in docs -%}
### {{ doc.title }}
**name:** {{doc.name}}
**type:** {{doc.type}}
**description:** {{doc.description}}
	{% if doc.properties != undefined %}
property name | property value
---|---
		{% for property in doc.properties -%}
{{property.property}}|[{{property.link}}](#{{property.link}})
		{% endfor -%}
	{%- endif %}
	{% if doc.additonalProperties != undefined %}
property name | property value
---|---
{{doc.additonalProperties.property}}|[{{doc.additonalProperties.link}}](#{{doc.additonalProperties.link}})
	{%- endif %}
	{%- if doc.example != undefined %}
**Example:**
```json
{{doc.example | safe}}
```
	{%- endif %}
{% endfor %}

=======
>>>>>>> origin/master:README.md
### sequence
location in the schema: #/definitions/sequence
type: object
description: sequence object
property name | property value
---|---
Steps | [steps](#steps)
Example:
```
"Sequence_Running":{
	"Steps":{
		"10": {
			"Comment": "step 10",
			"Actions":[
			],
			"Transitions":{
				"20": [
				],
				"30":{
				}
			}
		},
		"20":{
		}
	}
}
```

### steps
location in the schema: #/definitions/sequence/properties/Steps
type: object
description: key = stepnumber, value = stepobject
key: stepnumber
value: stepobject

### stepobject
location in the schema: #/definitions/sequence/properties/Steps/additionalProperties
type: object
description: sequence object
property name | property value
---|---
Comment | #/definitions/comment
Actions | #/definitions/actions
Transitions | transitions

## Import of excel-based EM-tyes
The model can import EM-types defined in excel-spreadsheets.
Inside the model define the import like this:
```js
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
 

