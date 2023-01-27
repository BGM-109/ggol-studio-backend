import Content from "./blocks/block";

const Posts = {
  slug: "posts",
  admin: {
    defaultColumns: [
      "projectName",
      "design",
      "construction",
      "teams",
      "locationAddress",
      "author",
      "category",
      "status",
    ],
    useAsTitle: "projectName",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "projectName",
      type: "text",
    },
    {
      name: "client",
      type: "text",
    },
    {
      name: "design",
      type: "relationship",
      relationTo: "design",
    },
    {
      name: "concept",
      type: "text",
    },
    {
      name: "construction",
      type: "text",
    },
    {
      name: "teams",
      type: "relationship",
      relationTo: "teams",
      hasMany: true,
    },
    {
      name: "location",
      type: "relationship",
      relationTo: "locations",
    },
    {
      name: "locationAddress",
      type: "text",
    },
    {
      name: "photographer",
      type: "relationship",
      relationTo: "photos",
      hasMany: true,
    },
    {
      name: "branding",
      type: "relationship",
      relationTo: "branding",
      hasMany: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },

    {
      name: "projectCompleteDate",
      type: "date",
    },
    {
      name: "type",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "area",
      type: "number",
    },
    {
      name: "coverImg", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "thumbnail", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [Content],
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "임시저장",
        },
        {
          value: "published",
          label: "출간",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Posts;
