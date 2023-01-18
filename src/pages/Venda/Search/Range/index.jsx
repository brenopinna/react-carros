import React, {useEffect} from 'react';
import { Slider } from '@mui/material';


const Range = ({setValue}) => {
   const [minValue, maxValue] = [20000, 70000];
   const defaultValue = minValue + (maxValue - minValue)/2;

   useEffect(() => setValue(defaultValue), []);

   const handleChange = e => {
      setValue(e.target.value);
   }

   const defaultColor = '#eb2d2d'

   return (
      <Slider
         min={minValue}
         max={maxValue}
         defaultValue={defaultValue}
         onChange={handleChange}
         sx={{
            height: 13,
            '& .MuiSlider-track': {
               backgroundColor: defaultColor,
               border: 'none',
               borderTopRightRadius: 0,
               borderBottomRightRadius: 0,
            },
            '& .MuiSlider-rail': {
               backgroundColor: defaultColor,
            },
            '& .MuiSlider-thumb': {
               backgroundColor: defaultColor,
               height: 20,
               width: 20,
               boxShadow: '0px 0px 7px rgb(0 0 0 / 40%)'
            },
            '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
               boxShadow: `0px 0px 0px 8px ${defaultColor}28`
            },
            '& .MuiSlider-thumb.Mui-active': {
               boxShadow: `0px 0px 0px 14px ${defaultColor}28`
            }
         }}
      />
   );
}

export default Range;