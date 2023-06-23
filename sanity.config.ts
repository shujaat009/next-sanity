import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "9xkkri07",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-06-21",
    useCdn: false,
    basePath: "/admin",
    plugins:[deskTool()],
    schema: {types: schemas},

})

export  default config