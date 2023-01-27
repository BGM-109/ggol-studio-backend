const Content = {
  slug: "content",
  fields: [
    {
      name: "width", // required
      type: "select", // required
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "1 / 6",
          value: "1",
        },
        {
          label: "1 / 3",
          value: "2",
        },
        {
          label: "1 / 2",
          value: "3",
        },
        {
          label: "2 / 3",
          value: "4",
        },
        {
          label: "5 / 6",
          value: "5",
        },
        {
          label: "1",
          value: "6",
        },
      ],
    },
    {
      name: "align", // required
      type: "select", // required
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "left",
          value: "start",
        },
        {
          label: "center",
          value: "center",
        },
        {
          label: "right",
          value: "end",
        },
      ],
    },
    {
      name: "coverImg", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "description", // required
      type: "textarea", // required
      required: true,
    },
    {
      name: "subtext", // required
      type: "textarea", // required
    },
  ],
};
export default Content;
