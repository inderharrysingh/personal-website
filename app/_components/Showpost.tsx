import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { SanityDocument } from "next-sanity"


  export  function MyCard ( { card } : { card : SanityDocument }){


    return (
        <Card>
        <CardHeader>
            <CardTitle>{ card?.title}</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
        </Card>

    )
  }