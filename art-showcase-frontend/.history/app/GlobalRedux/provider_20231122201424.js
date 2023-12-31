"use client"

import {Provider} from "react-redux";
import {store} from "./store";

export default function Providers({children}){
    return {
        <Provider>
            {children}
        </Provider>
    }
}