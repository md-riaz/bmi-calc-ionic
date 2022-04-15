import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

import './BmiResults.css';

export const BmiResults: React.FC<{ calculatedBmi: number }> = ({
   calculatedBmi,
}) => {
   return (
      <IonCard id='result'>
         <IonCardContent className='ion-text-center'>
            <h2>Your Body-Mass-Index</h2>
            <h3>{calculatedBmi.toFixed(2)}</h3>
         </IonCardContent>
      </IonCard>
   );
};
