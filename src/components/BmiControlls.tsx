import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React from 'react';

export const BmiControlls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = ({ onCalculate, onReset }) => {
  return (
    <IonRow>
      <IonCol className='ion-text-left'>
        <IonButton onClick={onCalculate}>
          <IonIcon slot='start' icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className='ion-text-right'>
        <IonButton onClick={onReset}>
          <IonIcon slot='start' icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};
