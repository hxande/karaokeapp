import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Main from './pages/Main';
import Musicas from './pages/Musicas';
import Another from './pages/Another';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Main
    },
    Musicas: {
        screen: Musicas
    },
    Another: {
        screen: Another
    }
});

const Routes = createAppContainer(MyDrawerNavigator);

export default Routes;