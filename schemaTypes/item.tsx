import { defineType, defineField } from 'sanity'

export const itemType = defineType({
  name: 'item',
  type: 'document',
  title: 'Prendas / Productos',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Nombre' }),
    defineField({ name: 'imageUrl', type: 'url', title: 'URL .avif' }),
  ],
  preview: {
    select: {
      title: 'name',
      imageUrl: 'imageUrl'
    },
    prepare(selection) {
      const { title, imageUrl } = selection
      return {
        title: title,
        // Usamos un componente de React para mostrar la imagen externa
        media: imageUrl ? () => <img src={imageUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : undefined
      }
    }
  }
})