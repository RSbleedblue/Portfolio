import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'System Trainee @Credex technologies, Jan 2024 - Jul 2024',
    description: `
    During my six-month internship, I Worked on the backend utility of a product launched by the company using Node.js, Enhanced server-side development skills and real-time data processing capabilities.
    ,Developed several projects using React, improving my front-end development proficiency.
    Created a desktop application using JavaFX for a warehouse management system:
      - Displayed analytics and commodity values to enhance operational efficiency.
      - Provided valuable insights for inventory management.
    
    This internship provided hands-on experience and significantly enriched my professional skill set.
    `   
},
  {
    label: 'Associate Analyst @GlobalLogic, June 2021 - July 2022',
    description:
      `As a full-time Associate Analyst, I Contributed to data analysis, interpreting and visualizing data to support business decisions.
      Gained proficiency in various data analysis tools and techniques.
      Learned and applied UI/UX design principles to improve user experience and interface design.
      Collaborated with cross-functional teams to ensure data-driven insights were effectively implemented.
      This role allowed me to develop both my analytical and design skills, enhancing my ability to contribute to diverse projects.`  },
];

export default function WorkLineStepper() {
    const stepStyle = {
        boxShadow: 2,
        padding: 2,
        "& .Mui-active": {
          "&.MuiStepIcon-root": {
            color: "#10b981",
          },
          "& .MuiStepConnector-line": {
          }
        },
        "& .Mui-completed": {
          "&.MuiStepIcon-root": {
            color: "#10b981"
          },
          "& .MuiStepConnector-line": {

          }
        }
      }
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical" className='shadow-xl rounded-lg p-4 m-2 w-full' sx={stepStyle}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography><span className='text-sm font-thin text-gray-500'>{step.description}</span></Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, background:"#10b981"}} 
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} >
          <Button onClick={handleReset} sx={{color:"#10b981"}}>
            Review Again?
          </Button>
        </Paper>
      )}
    </Box>
  );
}
