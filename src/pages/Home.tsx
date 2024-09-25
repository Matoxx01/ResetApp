import React from 'react';
import {
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
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
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import './Home.css';
import Fetuccini from './Fetuccini';
import Home from './Home';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
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

      <IonContent id="main-content">
        const Home: React.FC = () = (
          <IonRouterLink routerLink="/fetuccini">
            <IonCard button={true}>
              <img alt="Fetuccini Alfredo" src="Fetuccini Alfredo.webp" />
              <IonCardHeader>
                <IonCardTitle>Fetuccini Alfredo</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>El clásico fetuccini alfredo cremosito, sencillo y muy rico. Añádele la proteína que más te guste.</IonCardContent>
            </IonCard>
        </IonRouterLink>
        );
      </IonContent>
      <IonRouterOutlet   id="main-content">
        {/* Rutas de tu aplicación */}
        <Route path="/home" component={Home} exact />
        <Route path="/fetuccini" component={Fetuccini} exact />
        <Route exact path="/" render={() => <Home />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
