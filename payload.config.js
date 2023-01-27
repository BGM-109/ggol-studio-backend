import { buildConfig } from "payload/config";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Designs from "./collections/Designs";
import Teams from "./collections/Teams";
import Photos from "./collections/Photos";
import Locations from "./collections/Locations";
import Brandings from "./collections/Brandings";
export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  localization: {
    locales: ["en", "es", "de", "jp"],
    defaultLocale: "en",
    fallback: true,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
    Media,
    Designs,
    Teams,
    Photos,
    Locations,
    Brandings,
  ],
  plugins: [],
});
