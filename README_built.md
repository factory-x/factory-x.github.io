# Getting Started

## Preparing your development environment
**Step 1** 
Install node: https://nodejs.org/en/download/ (Choose the LTS version)

**Step 2**
Install yarn (wrapper around npm for faster package installs):
```
npm install -g yarn
```
**Step 3**
Install factory-x-cli (Command Line Interface)
Use npm because the yarn install is not working yet for this package
```
npm install -g factory-x-cli
```

**Step 4**
Install Github Desktop: https://desktop.github.com/
(Or use the git cli tools if you're comfortable)
Also apply for a free account if you don't have one yet and log in


**Step 5**
Configure word to avoid pop-up when opening documents with html-code:
```
File > Options > Advanced > General > disable 'Confirm file format conversion on open'
```
## Starting a new project

**Step 1**
Create a new __**private**__ project on github:
* select add readme during creation
* choose the .gitignore of node

If you have a free account then ask someone with a paid account to create the project and give you access.

**Step 2**
Use Github Desktop to clone the project to your own pc

**Step 3**
Open a shell in the main project folder.

Initialize the project and fill in all the questions:

```shell
yarn init
```
**Step 4**
Install the factory-x project tools:
```shell
yarn add factory-x
```
**Step 5**
Create project.json in the main folder.
(Copy the content from a previous project and adjust.)
[todo: link to a manual for project.json]

**Step 6**
Create following folder structure:
```
./model 
./templates/fds
./templates/plc
./output/model
./output/fds
./output/plc
```
**Step 7**
Copy the model and templates (fds + plc) of a previous project

**Step 8**
Generate the fds and plc-code based on the template:
```shell
fx render
```
**Step 9**
Use github desktop to make the first commit to github.
(Fill in a summary and description!)
From here on make regular commits, from hourly to at least daily

**Step 10**
Make changes to the model and templates as required, and execute 'fx render' when you want to review the output.
The templating engine is based on Nunjucks: https://mozilla.github.io/nunjucks/

# Model-A API
## Schema definitions

### Comment
**name:** comment
**type:** string
**description:** 
	
	
### Control_Module_Instance
**name:** 
**type:** 
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Type|[Control_Module_Type_Reference](#Control_Module_Type_Reference)
		Controller|[Controller](#Controller)
		Linked_Modules|[linked_module_list](#linked_module_list)
		
	
### Control_Module_Instances
**name:** Instances
**type:** object
**description:** key = CM-instance name, value = CM-instane object
	
	
property name | property value
---|---
list|[Control_Module_Instance](#Control_Module_Instance)
### Control_Module_Type
**name:** 
**type:** 
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Inputs|[io_object_list](#io_object_list)
		Outputs|[io_object_list](#io_object_list)
		
	
### Control_Module_Type_Reference
**name:** Type
**type:** string
**description:** refers to the CM-type
	
	
### Control_Module_Types
**name:** Types
**type:** object
**description:** key = CM-type name, value = CM-type object
	
	
property name | property value
---|---
list|[Control_Module_Type](#Control_Module_Type)
### Control_Modules
**name:** Control_Modules
**type:** 
**description:** holds the CM types and instances
	
property name | property value
---|---
		Types|[Control_Module_Types](#Control_Module_Types)
		Instances|[Control_Module_Instances](#Control_Module_Instances)
		
	
### Controller
**name:** controller
**type:** string
**description:** refers to the controller where the code for this instance needs to be put
	
	
### Controllers
**name:** Controllers
**type:** array
**description:** A list of all the controllers in the project. These values are used at instances of CM&#39;s, EM&#39;s, Phases, etc... to define in which controller they should be generated. It is also used to automatically generate links for objects between different controllers.
	
	
### Data_Type
**name:** Type
**type:** string
**description:** Data Type
	
	
### enumeration
**name:** 
**type:** string
**description:** 
	
	
### enumeration_object
**name:** 
**type:** object
**description:** key = enumeration number, value = enumeration string (alphanumeric, no spaces)
	
	
property name | property value
---|---
list|[enumeration](#enumeration)
### enumeration_objects
**name:** Enumerations
**type:** object
**description:** key = enumerationname, value = enumerationobject
	
	
property name | property value
---|---
list|[enumeration_object](#enumeration_object)
### Enumeration_Reference
**name:** Enumeration
**type:** string
**description:** string referring to the enumerationname of an enumeration list
	
	
### Equipment_Module_Instance
**name:** 
**type:** 
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Type|[Equipment_Module_Type_Reference](#Equipment_Module_Type_Reference)
		Controller|[Controller](#Controller)
		Linked_Modules|[linked_module_list](#linked_module_list)
		
	
### Equipment_Module_Instances
**name:** Instances
**type:** object
**description:** key = EM-instance name, value = EM-instane object
	
	
property name | property value
---|---
list|[Equipment_Module_Instance](#Equipment_Module_Instance)
### Equipment_Module_Type
**name:** 
**type:** 
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Inputs|[io_object_list](#io_object_list)
		Outputs|[io_object_list](#io_object_list)
		States|[key-value list of the EM states](#key-value list of the EM states)
		
	
### Equipment_Module_Type_Reference
**name:** Type
**type:** string
**description:** refers to the EM-type
	
	
### Equipment_Module_Types
**name:** Types
**type:** object
**description:** key = EM-type name, value = EM-type object
	
	
property name | property value
---|---
list|[Equipment_Module_Type](#Equipment_Module_Type)
### Equipment_Modules
**name:** Equipment_Modules
**type:** 
**description:** holds the EM types and instances
	
property name | property value
---|---
		Types|[Equipment_Module_Types](#Equipment_Module_Types)
		Instances|[Equipment_Module_Instances](#Equipment_Module_Instances)
		
	
### falsewords
**name:** falsewords
**type:** array
**description:** list of words that can be interpreted as false for this io
	
	
### io-object
**name:** 
**type:** object
**description:** 
	
property name | property value
---|---
		Type|[Data_Type](#Data_Type)
		Comment|[Comment](#Comment)
		Suffix|[Suffix](#Suffix)
		Unit|[Measurement_Unit](#Measurement_Unit)
		Enumeration|[Enumeration_Reference](#Enumeration_Reference)
		truewords|[truewords](#truewords)
		falsewords|[falsewords](#falsewords)
		
	
### io_object_list
**name:** io_object_list
**type:** 
**description:** key = inputname, value = io object
	
	
property name | property value
---|---
list|[io-object](#io-object)
### key-value list of the EM states
**name:** States
**type:** object
**description:** key = state number, value = state object
	
	
property name | property value
---|---
list|[state_object](#state_object)
### linked_module_list
**name:** linked_modules
**type:** 
**description:** Key = linked module name, value = linked module name
	
	
property name | property value
---|---
list|[linked_module_name](#linked_module_name)
### linked_module_name
**name:** 
**type:** string
**description:** 
	
	
### list of actions
**name:** actions
**type:** array
**description:** 
	
	
### Measurement_Unit
**name:** Unit
**type:** string
**description:** 
	
	
### multi_state
**name:** 
**type:** 
**description:** 
	
	
### multi_state_array
**name:** 
**type:** array
**description:** 
	
	
### Phase_Instance
**name:** 
**type:** 
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Type|[Phase_Type_Reference](#Phase_Type_Reference)
		Controller|[Controller](#Controller)
		Linked_Modules|[linked_module_list](#linked_module_list)
		
	
### Phase_Instanes
**name:** Instances
**type:** object
**description:** key = Phase-instance name, value = Phase-instane object
	
	
property name | property value
---|---
list|[Phase_Instance](#Phase_Instance)
### Phase_Type
**name:** 
**type:** 
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Linked_Modules|[linked_module_list](#linked_module_list)
		Inputs|[io_object_list](#io_object_list)
		Outputs|[io_object_list](#io_object_list)
		Parameters_Batch|[io_object_list](#io_object_list)
		Parameters_HMI|[io_object_list](#io_object_list)
		Parameters_PLC|[io_object_list](#io_object_list)
		Internals|[io_object_list](#io_object_list)
		Start_And_Hold_Conditions|[Start_And_Hold_Conditions](#Start_And_Hold_Conditions)
		Sequence_Idle|[sequence](#sequence)
		Sequence_Running|[sequence](#sequence)
		Sequence_Complete|[sequence](#sequence)
		Sequence_Pausing|[sequence](#sequence)
		Sequence_Paused|[sequence](#sequence)
		Sequence_Holding|[sequence](#sequence)
		Sequence_Held|[sequence](#sequence)
		Sequence_Restarting|[sequence](#sequence)
		Sequence_Stopping|[sequence](#sequence)
		Sequence_Stopped|[sequence](#sequence)
		Sequence_Aborting|[sequence](#sequence)
		Sequence_Aborted|[sequence](#sequence)
		
	
### Phase_Type_Reference
**name:** Type
**type:** string
**description:** refers to the Phase-type
	
	
### Phase_Types
**name:** Types
**type:** object
**description:** key = Phase-type name, value = Phase-type object
	
	
property name | property value
---|---
list|[Phase_Type](#Phase_Type)
### Phases
**name:** Phases
**type:** 
**description:** holds the Phase types and instances
	
property name | property value
---|---
		Types|[Phase_Types](#Phase_Types)
		Instances|[Phase_Instanes](#Phase_Instanes)
		
	
### schema
**name:** 
**type:** object
**description:** json-model used to describe the structure of a control program, with the goal of full auto-generation of documents and code
	
property name | property value
---|---
		Controllers|[Controllers](#Controllers)
		Enumerations|[enumeration_objects](#enumeration_objects)
		Units|[Units](#Units)
		Control_Modules|[Control_Modules](#Control_Modules)
		Equipment_Modules|[Equipment_Modules](#Equipment_Modules)
		Phases|[Phases](#Phases)
		
	
### sequence
**name:** sequence
**type:** object
**description:** sequence object
	
property name | property value
---|---
		Steps|[steps](#steps)
		
	
**Example:**
```json
{
    "Steps": {
        "10": {
            "Comment": "step 10",
            "Actions": [],
            "Transitions": {
                "20": [],
                "30": {}
            }
        },
        "20": {}
    }
}
```
### Start_And_Hold_Conditions
**name:** Start_And_Hold_Conditions
**type:** array
**description:** 
	
	
### state_object
**name:** 
**type:** 
**description:** 
	
	
### stepobject
**name:** 
**type:** object
**description:** 
	
property name | property value
---|---
		Comment|[Comment](#Comment)
		Actions|[list of actions](#list of actions)
		Transitions|[transitions](#transitions)
		
	
### steps
**name:** Steps
**type:** object
**description:** key-value list of stepobjects
	
	
property name | property value
---|---
list|[stepobject](#stepobject)
### Suffix
**name:** Suffix
**type:** string
**description:** string added to the name for unique identification of the io
	
	
### transitions
**name:** Transitions
**type:** object
**description:** key = target stepnumber, value = multi_state object
	
	
property name | property value
---|---
list|[multi_state](#multi_state)
### truewords
**name:** truewords
**type:** array
**description:** list of words that can be interpreted as true for this io
	
	
### Unit_ID
**name:** ID
**type:** number
**description:** 
	
	
### Unit_Object
**name:** 
**type:** object
**description:** 
	
property name | property value
---|---
		Controller|[Controller](#Controller)
		ID|[Unit_ID](#Unit_ID)
		
	
### Units
**name:** Units
**type:** 
**description:** key = Unit name, value = Unit object
	
	
property name | property value
---|---
list|[Unit_Object](#Unit_Object)


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
 

