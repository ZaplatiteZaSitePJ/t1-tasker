import { useContext, createContext, type ReactNode, type Dispatch, useReducer } from "react";
import type { TextfieldInterface} from "../types/textfieldInterface";
import type { SelectInterface } from "../types/selectInterface";

type formElement = TextfieldInterface | SelectInterface 

type formAction = {type: "ADD_ELEMENT", item: formElement}

type ContextType = {
    formContent: formElement[],
    dispatch: Dispatch<formAction> 
}

const initialContent:formElement[] = [] 

const FormContext = createContext<ContextType | null>(null)

function contentReducer(state: formElement[], action: formAction): formElement[] {
    switch (action.type) {
        case "ADD_ELEMENT":
            return [...state, action.item]
        default:
            return state;
    }
}

export const FormProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(contentReducer, initialContent)

    return (
        <FormContext.Provider value={{ formContent: state, dispatch}}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error("useFormContext must be used within FormProvider");
    return context;
};

