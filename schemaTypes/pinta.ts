import { defineField, defineType } from "sanity";

export const pintaType = defineType({
	name: "pinta",
	type: "document",
	title: "Outfits (Pintas)",
	fields: [
		defineField({ name: "name", type: "string", title: "Outfit Name", validation: (Rule) => Rule.required() }),
		defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "name" } }),
		defineField({ name: "gender", type: "string", title: "Gender (Global Dropdown)" }),
		
		// RAMA 1: Lista de imágenes embebidas directas (Pictures)
		defineField({
			name: "pictures",
			type: "array",
			title: "Pictures List",
			of: [
				{
					type: "object",
					name: "pictureEntry",
					fields: [
						{ name: "name", type: "string", title: "Picture Name" },
						{ name: "imageUrl", type: "url", title: "Image URL" },
						{ name: "description", type: "text", title: "Description" },
						{ name: "image", type: "image", title: "Uploaded Image File" },
						{ name: "gender", type: "string", title: "Gender Specific" },
					],
				},
			],
		}),

		// RAMA 2: Lista de referencias a los productos independientes de abajo
		defineField({
			name: "products",
			type: "array",
			title: "Associated Products",
			of: [{ type: "reference", to: [{ type: "item" }] }],
		}),
	],
});