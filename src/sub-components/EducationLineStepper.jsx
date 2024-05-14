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
    label: 'Masters in Computer Application, 2024',
    description: `
    I completed my Master of Computer Applications (MCA) at Sharda University, achieving an impressive aggregate score of 9.4. This rigorous program equipped me with advanced knowledge and skills in software development, data structures, algorithms, and database management. `,
  },
  {
    label: 'Bachelor in Computer Application, 2022',
    description:
      'I earned my Bachelor of Computer Applications (BCA) from IMS Noida, graduating with a score of 72%. During this program, I gained a solid foundation in computer science principles, including programming, web development, and system analysis. My education at IMS Noida involved practical projects and collaborative learning, which helped me develop essential technical and analytical skills, laying the groundwork for my advanced studies and career in the IT field.',
  },
  {
    label: 'Intermediate, 2017',
    description: `
    I completed my Intermediate education with a focus on Physics, Chemistry, and Mathematics (PCM) under the CBSE board, securing 66%. This phase of my education provided me with a strong analytical and scientific foundation, fostering critical thinking and problem-solving abilities.`,
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
