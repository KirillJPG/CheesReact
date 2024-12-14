import { actionsTable } from "@/store/slice/Table";
import { useMemo } from "react";
import { useTDispatch } from "./useTSelector";
import { bindActionCreators } from "@reduxjs/toolkit";


const actions = {
    ...actionsTable
}
export function useActions(){
    const dispatch = useTDispatch()
    return useMemo(()=>{
        bindActionCreators(actions,dispatch)
    },[dispatch])
}