export const itemType = {
  name: 'item',
  type: 'document',
  title: 'Prendas / Productos',
  fields: [
    { 
		name: 'name', 
		type: 'string', 
		title: 'Nombre de la prenda' },
    { 
		name: 'aliexpressUrl', 
		type: 'url', 
		title: 'URL .avif de AliExpress', 
		options: {
        	hotspot: true, // Permite seleccionar el punto focal
      	}, 
	},
    { 
		name: 'affiliateLink', 
		type: 'url', 
		title: 'URL de Afiliado AliExpress' 
	},
  ]
}