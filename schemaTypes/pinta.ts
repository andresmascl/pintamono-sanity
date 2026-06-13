import { defineField, defineType } from "sanity";

export const pintaType = defineType({
    name: "pinta",
    type: "document",
    title: "Outfits (Pintas)",
    fields: [
        defineField({ 
            name: "name", 
            type: "string", 
            title: "Outfit Name", 
            validation: (Rule) => Rule.required() 
        }),
        defineField({ 
            name: "slug", 
            type: "slug", 
            title: "Slug", 
            options: { source: "name" } 
        }),
        defineField({ 
            name: "gender", 
            type: "string", 
            title: "Gender (Global Dropdown)" 
        }),
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
        // RAMA 2: Ahora está correctamente dentro del arreglo 'fields'
        defineField({
            name: "products",
            type: "array",
            title: "Associated Products",
            of: [{ type: "reference", to: [{ type: "item" }] }],
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "pictures.0.image" 
        },
        prepare(selection) {
            const { title, media } = selection;
            return {
                title: title || "Sin nombre",
                media: media 
            };
        }
    }
});