import * as React from "react"
interface ContactProps  {
        title : String
}
export const Contact = (props: ContactProps) : React.ReactNode =>
     {
        return (<h1>{"This is my contact page"}</h1>);
     }