START product=node(*)
MATCH (product)-[:DE_MODELE]->()
RETURN product.name as name, product.description as description, 
product.price as price, product.imageUrl as imageUrl


START product=node:node_auto_index(name='T-Shirt') 
MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),
(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur)
RETURN product.id as id, product.name as name, product.description as description, taille.name as size, product.imageUrl as imageUrl      


START model=node:node_auto_index(mid='16')
MATCH (genre)-[:CONVIENT_A]-(model)<-[:DE_MODELE]-(produit)
                            -[:EST_UN]->(template)
                            -[:S_ASSOCIE_AVEC]-(complement)                            
                            <-[:EST_UN]-(comp_produit)
                            -[:DE_MODELE]->(comp_model)
                            -[:CONVIENT_A]->(produit_sex)

WHERE produit_sex.sex = genre.sex

RETURN DISTINCT comp_produit.name as name, comp_produit.description as description, 
	   comp_produit.imageUrl as imageUrl, comp_produit.price as price,
       comp_produit.id as id;