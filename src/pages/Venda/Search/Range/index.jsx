import React, {useEffect} from 'react';
import { Thumb, Track, Trail } from './styles';

const Range = ({setValue}) => {
   const [minValue, maxValue] = [20000, 70000];

   useEffect(() => setValue(minValue), []);

   let isDrag = false;

   const body = document.querySelector('body');
   const track = document.querySelector('.track');
   const trail = document.querySelector('.trail');

   function handleMouseDown(){
      isDrag = true;
      body.style.cursor = 'pointer';
      body.style.userSelect = 'none';
   }

   function handleMouseUp(){
      isDrag = false;
      body.style.cursor = 'auto';
      body.style.userSelect = 'auto';
   }

   body.addEventListener('mousemove', e => {
      if(isDrag){
         const trackWidth = +getComputedStyle(track).width.replace('px','');
         let mouseX = e.pageX - track.getBoundingClientRect().x;
         if(mouseX < 0) mouseX = 0;
         else if(mouseX >= trackWidth) mouseX = trackWidth;
         trail.style.width = mouseX + 'px';

         const percentual = (mouseX / trackWidth) * 100;
         let newValue = (((maxValue - minValue)/100) * percentual + minValue).toFixed(2);
         setValue(newValue);
      }
   })

   body.addEventListener('mouseup', handleMouseUp);

   return (
      <Track className='track' >
         <Trail className='trail'>
            <Thumb onMouseDown={handleMouseDown} />
         </Trail>
      </Track>
   );
}

export default Range;