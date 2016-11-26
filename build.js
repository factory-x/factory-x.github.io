const fs = require('fs')
const _ = require ('underscore')
const nunjucks = require('nunjucks')
const async = require('async')

fs.readFile('./schema/schema.json', 'utf8', function (err, data) {
	
	if (err) throw err;

	let schema = JSON.parse(data);

	// console.log(JSON.stringify(schema,null,4))

	const docs = serialize(schema, undefined, schema)

	const sorted_docs = _.sortBy(docs, function(doc){return doc.title.toLowerCase()})

	// console.log(JSON.stringify(docs,null,4))

	// loop over the array with docobjects and try to add an example for each from the examples folder
	async.eachOfSeries(sorted_docs, function(doc, key, cb_next_doc){
	  
		fs.readFile('./examples/' + doc.title + '.json', function (err, example_data){
			
			if (err){
				
				// couldn't fine file: tye next one
				cb_next_doc()
				
			} else {
				
				// add the example to the doc
				console.log(typeof example_data)
				doc.example = JSON.stringify(JSON.parse(example_data), null, 4) // don't parse the JSON: we need the string
				console.log(doc.example)
				cb_next_doc()
				
			}
			
		})
	  
	}, function(err){
  
		if (err) throw err
		
		// render the readme with nunjucks
		nunjucks.render('README_main.md',
		{
			docs: sorted_docs
		}, function(err, res){
		  
			console.log('rendering finished')
		  
			fs.writeFile('README_built.md', res, function(err){
			  
				if (err) throw err
			  
				console.log('doc build finished')
			  
			})
		  
		})
  
	})
  

  
});


const serialize = function(node, node_key, schema){
	
	// console.log(node_key)
	
	let doc_list = []
	let doc_object = {}

	// if multiple possible definitions with oneOf:
	if (node.oneOf != undefined){
		
		doc_object.oneOf = []
		
		_.each(node.oneOf, function(choicenode){
			
			const answer = create_doc_object(choicenode, undefined, schema)
			doc_object.oneOf.push(answer.doc_object)
			doc_list = _.union(doc_list, answer.doc_list)
			
		})
		
		doc_object.title = node.title
			
		
	// else
	} else {
	
		const answer = create_doc_object(node, node_key, schema, doc_list)
		doc_object = answer.doc_object
		doc_list = _.union(doc_list, answer.doc_list)
	
	}
	
	doc_list.push(doc_object)
	return doc_list
	
	
}

function create_doc_object(node, node_key, schema){
	
	let result = {}
	let doc_object = {}
	let doc_list = []
	
	_.each(node, function(value, key){

		// serialize the properties and definitions
		if (key == 'properties'|| key == 'definitions'){			
			
			doc_object[key] = []
			
			// loop over the properties and serialize them one by one
			
		
			_.each(node[key], function(subnode, subnode_key){
				
				// add a link
				let link = {}
				link.property = subnode_key
				
				if (subnode['$ref'] != undefined) {
					
					const ref = subnode['$ref'].replace('#/definitions/','')
					
					if (schema.definitions[ref] != undefined) {
						
						link.link = schema.definitions[ref].title
						
					} else {
						
						console.log('=> ref not defined in definitions:', ref)
						// console.log(schema.definitions.comment)
						// throw 'error'
						
					}
					
					
				} else if (subnode.title != undefined){
					
					doc_list = _.union(doc_list, serialize(subnode, subnode_key, schema))
					link.link = subnode.title
					
				} else {
					
					doc_list = _.union(doc_list, serialize(subnode, subnode_key, schema))
					link.link = ""
					console.log('=> unable to define link because title not defined for:', subnode_key)
					
				}
				
				doc_object[key].push(link)

			})
		
		// serialize the additonalProperties
		} else if (key == 'additonalProperties'){
			
			// add a link
			let link = {}
			link.property = 'list'
			
			if (node.additonalProperties['$ref'] != undefined) {
				
				const ref = node.additonalProperties['$ref'].replace('#/definitions/','')
				
				if (schema.definitions[ref] != undefined) {
					
					link.link = schema.definitions[ref].title
					
				} else {
					
					console.log('ref not defined in definitions:', ref)
					// console.log(schema.definitions)
					
				}
			
			} else if (node.additonalProperties.title != undefined){
				
				doc_list = _.union(doc_list, serialize(node.additonalProperties, undefined, schema))
				link.link = node.additonalProperties.title
				
			} else {
				
				doc_list = _.union(doc_list, serialize(node.additonalProperties, undefined, schema))
				link.link = ""
				console.log('unable to define link because title not defined for additonalProperties')
				
			}
			
			doc_object[key] = link

		// serialize the definitions
		} else {
			
			doc_object[key] = value
			
		}
		
		
	})
	
	// add the node_key if defined
	if (node_key != undefined){
		
		doc_object.name = node_key
		
	}

	result.doc_object = doc_object
	result.doc_list = doc_list
	
	return result	

}