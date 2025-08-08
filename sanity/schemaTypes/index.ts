import {type SchemaTypeDefinition} from 'sanity'

import project from './project'
import workExperience from './workExperience'
import {postType} from './postType'
import {blockContentType} from './blockContentType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [project, workExperience, postType, blockContentType],
}
