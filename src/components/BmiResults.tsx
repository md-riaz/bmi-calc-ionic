import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

export const BmiResults: React.FC<{ calculatedBmi: number }> = ({
   calculatedBmi,
}) => {
   return (
      <IonRow>
         <IonCol>
            <IonCard>
               <IonCardContent className='ion-text-center'>
                  <h2>Your Body-Mass-Index</h2>
                  <h3>{calculatedBmi.toFixed(2)}</h3>
               </IonCardContent>
            </IonCard>
         </IonCol>
      </IonRow>
   );
};
