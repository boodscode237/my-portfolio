import { array } from "prop-types";

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title OF THE PROJECT",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}]
    }   
  ],
}
