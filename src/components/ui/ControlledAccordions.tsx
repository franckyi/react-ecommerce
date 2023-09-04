import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqList } from '../../model/faq';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {faqList.map((item, key) => {
                return (
                    <Accordion key={key} expanded={expanded === `panel${key}`} onChange={handleChange(`panel${key}`)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${key}bh-content`}
                            id={`panel${key}bh-header`}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {item.category}
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    );
}