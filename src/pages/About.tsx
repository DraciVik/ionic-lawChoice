import {IonContent, IonHeader, IonButtons, IonPage, IonBackButton, IonTitle, IonToolbar, IonImg, IonFooter} from "@ionic/react"
import React from "react";

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle class="ion-text-center">About Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonImg src="assets/images/city.jpg" />
            <IonContent class="ion-padding">
                <h1>We Create Dreams</h1>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsu</p>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsu</p>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
                    <IonTitle class="ion-text-center" size="small">1313 Mockingbird Lane</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}


export default About;