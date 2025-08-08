import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('workExperience').title('Work Experience'),
      S.documentTypeListItem('post').title('Blog Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'workExperience', 'post'].includes(item.getId()!),
      ),
    ])
