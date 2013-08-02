START product=node:node_auto_index(id={id}) 
MATCH (product)-[:DE_MODELE]->(modele)
WITH product, modele
MATCH (modele)-[?:DE_TAILLE]->(taille),
(modele)-[?:DE_COULEUR]->(couleur), 
(modele)-[?:CONVIENT_A]->(sexe)
RETURN DISTINCT 
	product.id as id, 
	product.name as name, 
	product.description as description, 
	collect(distinct taille.name) as sizes, 
	product.imageUrl as imageUrl, 
	product.price as price,
	collect(distinct couleur.hexa) as colors,
	collect(distinct sexe.sex) as sex