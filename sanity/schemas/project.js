export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            }
          },
          {
            name: 'projectImage',
            title: 'Project image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
              name: 'description',
              title: 'Description',
              type: 'blockContent'
          },
          {
            title: 'Stack',
            name: 'stack',
            type: 'array',
            of: [{type: 'string'}]
          },
          {
            name: 'githubLink',
            title: 'Github Link',
            type: 'url',
          },
          {
            name: 'exampleSiteLink',
            title: 'Example Site Link',
            type: 'url',
          },
          {
            name: 'packageLink',
            title: 'Package Link',
            type: 'url',
          },
    ]
}