import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { color } from 'framer-motion';



const steps = [
  {
    label: 'Masters in Computer Application, 2024',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Bachelor in Computer Application, 2022',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Intermediate, 2017',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalLinearStepper() {
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
            <StepLabel 
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
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
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
