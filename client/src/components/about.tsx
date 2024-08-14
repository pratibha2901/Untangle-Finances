import * as React from "react"
interface AboutProps  {
        title : String
}
export const About = (props: AboutProps) : React.ReactNode =>
     {
        return (<>{"This is my about page"}</>);
     }
