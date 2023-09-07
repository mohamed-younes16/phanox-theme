/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import product from './sanity/schemas/product'
import banner from './sanity/schemas/banner'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId:"uft3vvh9",
  dataset:"production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema:{types:[product,banner]},
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
