import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React from 'react';

export const BmiControlls: React.FC<{
   onCalculate: () => void;
   onReset: () => void;
}> = ({ onCalculate, onReset }) => {
   return (
      <IonRow className='ion-margin-top'>
         <IonCol size='12' size-md='6' className='ion-text-center'>
            <IonButton
               size='large'
               expand='block'
               color='tertiary'
               onClick={onCalculate}
            >
               <IonIcon slot='start' icon={calculatorOutline} />
               Calculate
            </IonButton>
         </IonCol>
         <IonCol size='12' size-md='6' className='ion-text-center'>
            <IonButton onClick={onReset} fill='clear' color='medium'>
               <IonIcon slot='start' icon={refreshOutline} />
               Reset
            </IonButton>
         </IonCol>
      </IonRow>
   );
};
