import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRouterLink,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './Home.css';

const App: React.FC = () => (
  <IonApp>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>
            <IonLabel>Iniciar sesión</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Configuración</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Sobre Nosotros</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>RecetApp</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonCard button={true}>
      <img alt="Fetuccini Alfredo" src="Fetuccini Alfredo.webp" />
      <IonCardHeader>
        <IonCardTitle>Fetuccini Alfredo</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>El clásico fetuccini alfredo cremosito, sencillo y muy rico. Añádele la proteína que más te guste.</IonCardContent>
    </IonCard>
  </IonApp>
);

export default App;