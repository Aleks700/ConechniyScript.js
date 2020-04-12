import React,{Fragment} from 'react';
import  WebMapView from './component/mapWiev/MapView';
import Header from './component/header/header';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <WebMapView></WebMapView>
      <button id="clicker">Отрисовать</button> 
      <button id="clear">Очистить</button> 
    </Fragment>
  );
}

export default App;
