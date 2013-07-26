CREATE
(XS{name:'XS'}),
(S{name:'S'}),
(M{name:'M'}),   
(L{name:'L'}),   
(XL{name:'XL'}),   

(noir{name:'Noir'}),
(rouge{name:'Rouge'}),

(tshirt {id:1, name:'T-Shirt', description:'un tshirt', price:100, imageUrl:'tshirt.jpg'}),
(tshirt_model1),
(tshirt_model2),

(redsoul {name:'Red Soul'}),

(tshirt_model1)-[:DE_TAILLE]->(S),
(tshirt_model1)-[:DE_COULEUR]->(noir),
(tshirt_model2)-[:DE_TAILLE]->(M),
(tshirt_model2)-[:DE_COULEUR]->(rouge),
(tshirt_model3)-[:DE_COULEUR]->(rouge),
(tshirt)-[:DE_MODELE]->(tshirt_model1),
(tshirt)-[:DE_MODELE]->(tshirt_model2),
(tshirt)-[:DE_MODELE]->(tshirt_model3),
(tshirt)-[:DE_MARQUE]->(redsoul);