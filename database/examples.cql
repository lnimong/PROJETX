START product=node(*)
MATCH (product)-[:DE_MODELE]->()
RETURN product.name as name, product.description as description, 
product.price as price, product.imageUrl as imageUrl


START product=node:node_auto_index(name='T-Shirt') 
MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),
(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur)
RETURN product.name as name, taille.name as size, couleur.name as color       
