START product=node(*) 
MATCH (product)-[:DE_MODELE]->() 
RETURN DISTINCT product.id as id, product.name as name, 
				product.description as description, 
				product.price as price, 
				product.imageUrl as imageUrl;