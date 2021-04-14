import React from "react";
import { useLocation } from "react-router-dom";
import MeetOtherHelpRow from "./MeetOtherHelpRow"
import { Form, Button, Card, Container } from 'react-bootstrap'

function MeetOtherHelp(props) {

    const location = useLocation();
    //location.helpItem.tc_kimlikNo}
    //location.helpKey}

    const type = 'checkbox'

    const isTrue = true

    function handleChange(event) {
        console.log("321321");
    }

    return (
        <>
            <Container className="d-flex-align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "600px" }}>
                    <div>
                        <Form>
                            {location.helpItem.helpList.map((helpItem, index) => {
                                return (
                                    <Form.Check                
                                        onChange={handleChange}
                                        type={type}
                                        id={`default-${type}`}
                                        label={helpItem.isProvided ? helpItem.demandName + "  (Karşılandı)" : helpItem.demandName}
                                        defaultChecked={helpItem.isProvided}
                                        disabled={helpItem.isProvided}
                                       
                                    />
                                )
                            })}
                        </Form>
                    </div>
                </div>

            </Container>
        </>
    )
}
export default MeetOtherHelp;
