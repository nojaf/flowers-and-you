module App

open Fable.React
open Feliz

[<ReactComponent>]
let Title (props: {| name: string |}) =
    h1 [] [
        str ($"Hello _ {props.name}")
    ]
