import {IonContent, IonPage, IonButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel, IonImg} from "@ionic/react"
import React, {useState} from "react";
import MyHeader from "../components/MyHeader";
import LawyerListing from "./lawyerDB";
import {arrowBackOutline} from "ionicons/icons"
import lawyerListing from "./lawyerDB";

const LawyerList: React.FC = () => {
    const [list] = useState<Array<any>>(LawyerListing);
    const currentListing = list.map(lawyer => {
        return (<IonItem key={lawyer.id} button routerLink={lawyer.path}>
            <IonAvatar slot="start">
                <IonImg src={lawyer.pic} />
            </IonAvatar>
            <IonLabel>
                <h2>{lawyer.name}</h2>
                <h3>{lawyer.focus}</h3>
                <p>{lawyer.phone}</p>
            </IonLabel>
        </IonItem>)
    })

    return (
       <IonPage>
            <MyHeader />
            <IonContent>
                <IonButton color="light" routerLink="/home">
                    <IonIcon slot="start" icon={arrowBackOutline} />
              </IonButton>
              <IonList>
                  {currentListing}
              </IonList>
            </IonContent>
       </IonPage>
    )
}

export default LawyerList;