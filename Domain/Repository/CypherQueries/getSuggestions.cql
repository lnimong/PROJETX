START model=node:node_auto_index(mid={mid})
MATCH 
(model)
<-[:DE_MODELE]-(produit)
-[:EST_UN]->(template)
-[:S_ASSOCIE_AVEC]-(complement)
<-[:EST_UN]-(comp_produit),
(comp_produit)-[:CONVIENT_A]->(produit_sex),
(produit)-[:CONVIENT_A]->(genre)
WHERE produit_sex.sex = genre.sex
RETURN DISTINCT comp_produit.name as name, comp_produit.description as description,
                                   comp_produit.imageUrl as imageUrl, comp_produit.price as price,
                                   comp_produit.id as id;