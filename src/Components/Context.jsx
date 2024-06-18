import { createContext, useState } from "react"

const Stdlistcontext = createContext()

function Context(props) {
    const [stdlist,setstdlist] = useState(
        [
            {
                id:1,
                stdname:"Jagadeesan",
                favourite:false
            },
            {
                id:2,
                stdname:"Dharaneesh",
                favourite:false
            },
            {
                id:3,
                stdname:"Jaganathan",
                favourite:false
            },
            {
                id:4,
                stdname:"Vishal",
                favourite:false
            },
            {
                id:5,
                stdname:"Kishore",
                favourite:false
            },
            {
                id:6,
                stdname:"Giri",
                favourite:false
            },
        ]
    )

    return(
        <>
            <Stdlistcontext.Provider value={{stdlist,setstdlist,}}>
                {props.children}
            </Stdlistcontext.Provider>
        </>
    )
}

export default Context
export {Stdlistcontext}
