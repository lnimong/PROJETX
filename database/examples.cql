START product=node(*)
MATCH (product)-[:DE_MODELE]->()
RETURN product.name as name, product.description as description, 
product.price as price, product.imageUrl as imageUrl


START product=node:node_auto_index(name='T-Shirt') 
MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),
(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur)
RETURN product.id as id, product.name as name, product.description as description, taille.name as size, product.imageUrl as imageUrl      


START model=node:node_auto_index(mid='14')
MATCH (genre)-[:POUR]-(model)<-[:DE_MODELE]-(produit)
                            -[:EST_TEMPLATE]->(template)
                            -[:S_ASSOCIE_AVEC]->(complement)
                           <-[:EST_TEMPLATE]-(comp_produit)
                            -[:DE_MODELE]-(comp_model)
                            -[:POUR]-(produit_sex)
WHERE produit_sex.sex = 'unisex' OR produit_sex.sex = genre.sex

RETURN comp_produit.name, produit_sex.sex, genre.sex;