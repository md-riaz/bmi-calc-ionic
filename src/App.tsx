import React, { useRef, useState } from "react";
import {
    IonApp,
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar,
    setupIonicReact
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { calculatorOutline, refreshOutline } from "ionicons/icons";

setupIonicReact();

const App: React.FC = () => {

    const [calculatedBmi, setCalculatedBmi] = useState<number>();

    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const heightInputRef = useRef<HTMLIonInputElement>(null);

    const calculateBMI = () => {
        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;

        if (!enteredWeight || !enteredHeight) {
            return;
        }

        const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);

        setCalculatedBmi(bmi);

    };

    const resetBMI = () => {
        weightInputRef.current!.value = '';
        heightInputRef.current!.value = '';
    };

    return (<IonApp>
        <IonHeader>
            <IonToolbar>
                <IonTitle>BMI Calculator</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Your Height</IonLabel>
                            <IonInput ref={heightInputRef}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Your Weight</IonLabel>
                            <IonInput ref={weightInputRef}></IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-left">
                        <IonButton onClick={calculateBMI}>
                            <IonIcon slot="start" icon={calculatorOutline} />
                            Calculate
                        </IonButton>
                    </IonCol>
                    <IonCol className="ion-text-right">
                        <IonButton onClick={resetBMI}>
                            <IonIcon slot="start" icon={refreshOutline} />
                            Reset
                        </IonButton>
                    </IonCol>
                </IonRow>
                {calculatedBmi && (<IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardContent>
                                <h2>{calculatedBmi}</h2>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>)}
            </IonGrid>
        </IonContent>
    </IonApp>)
};

export default App;
