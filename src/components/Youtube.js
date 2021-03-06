/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const Youtube = (props) => {

    return (
        <div style={{ marginTop: 20 }} >
            <center><Accordion style={{ width: "95%", backgroundColor: "#21325E" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ borderColor: "white", borderWidth: 4, color: "white" }} >Description</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#3E497A", alignItems: "center", justifyContent: "center" }}>
                    <center><Typography style={{ color: "white", justifyContent: "left", textAlign: "left" }}>
                        {props.props.synopsis}
                    </Typography></center>
                </AccordionDetails>
            </Accordion></center><br></br>

            <center><Accordion style={{ width: "95%", backgroundColor: "#21325E" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ borderColor: "white", borderWidth: 4, color: "white" }} >Trailer</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#3E497A", alignItems: "center", justifyContent: "center" }}>
                    <center><iframe src={props.props.trailer.embed_url} allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen" style={{ width: "100%", height: "auto" }} /></center>
                </AccordionDetails>
            </Accordion></center>
        </div>
    );
}
