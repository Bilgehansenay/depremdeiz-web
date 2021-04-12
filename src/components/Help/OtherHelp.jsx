import React, { useState, useEffect, Children } from "react";
import app from "../../firebase";
import { useFirebaseDatabase } from "../../contexts/FirebaseDatabase";
import OthersHelpRow from "./OthersHelpRow";

var database = app.database();

function OtherHelp() {

    const { tcNumber } = useFirebaseDatabase()
    const [helpList, setHelpList] = useState([]);

    useEffect(() => {
        var myHelpRef = database.ref('Help');
        myHelpRef.once('value', async (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();

                Object.keys(childData).forEach(function (key) {
                    if (childData[key].tc_kimlikNo !== tcNumber) {
                        console.log(childData[key]);
                        setHelpList(prevHelps => {
                            return [...prevHelps, childData[key]]
                        });
                    }
                });
            });
        });
    }, []);

    return (
        <>
            <div>
                <h1>Other Helps</h1>
            </div>
            {helpList.map((helpItem, index) => {
                return <OthersHelpRow
                    key={index}
                    item={helpItem} />
            })}
        </>
    )
}
export default OtherHelp;