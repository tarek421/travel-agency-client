import React from 'react';
import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
    //   expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const AboutAccordion = () => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><FontAwesomeIcon icon={faPlus} /> We open at what time?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><FontAwesomeIcon icon={faPlus} /> We are open to those who?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><FontAwesomeIcon icon={faPlus} /> Fusce mollis faucibus lectus maximus ultricies?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><FontAwesomeIcon icon={faPlus} /> Fusce mollis faucibus lectus maximus ultricies?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AboutAccordion;