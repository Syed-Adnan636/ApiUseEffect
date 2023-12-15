import React, { useEffect, useState } from 'react'

// -----------------------window Component----------------
const Window = () => {
    // ---------Setting window size via UseState Hook--------------
    const [size,setSize] = useState(window.innerWidth)
    // --------------------function which handle window size and changes state of size variable to window size --------------------
        const handleSize = () => {
            setSize(window.innerWidth)
        }
        // ---------------adding event of resize via UseEffect Hook---------------- 
        useEffect(() => {
            window.addEventListener('resize',handleSize);
            // console.log('UseEffect Ran')
            // -------------UseEffect returns something which we have asked it to remove that same event which is previously added to unload the app-----------------
            return ()=> {
                window.removeEventListener('resize',handleSize)
                // console.log('Cleanup ran')
            }
        },[size])
// -------------------useEffect is triggered on change of state which is dependent on size variable----------------------

return (
    <>
        <div className="container text-center text-capitalize">
            <h1>Window Size : {size}px</h1>
        </div>
    </>
)
}

export default Window