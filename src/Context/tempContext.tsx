import React, {useState} from "react";

const TempContext = React.createContext({})

export default function AppWrapper() {
    // creating a local state
    const [state, setState] = useState({page: {}});

    return (
        <TempContext.Provider value={{state, setState}}> {/* passing state to in provider */}
            {/*<App />*/}
        </TempContext.Provider>
    );
}