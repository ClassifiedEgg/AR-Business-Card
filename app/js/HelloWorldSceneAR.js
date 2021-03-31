import React, { Component } from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroAmbientLight,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroText,
  ViroSpotLight,
  ViroQuad,
} from 'react-viro';

var createReactClass = require('create-react-class');

const RenderText = ({ text, y }) => (
  <ViroText
    text={text}
    color="#ffffff"
    scale={[.5, .5, .5]}
    rotation={[0, -90, 0]}
    position={[0.25, y, 0.15]}
    style={{
      fontFamily: 'Arial',
      fontSize: 10,
      color: '#ffffff',
      textAlignVertical: 'center',
      textAlign: 'center',
    }}
  />
);


var ARCarDemo = createReactClass({
  getInitialState() {
    return {
      texture: "white",
      playAnim: false,
      animateCar: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    };
  },

  render: function () {
    return (
      <>
        <ViroARScene>

          <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
            <ViroAmbientLight color="#FFFFFF" />
            <Viro3DObject
              scale={[0.2, 0.2, 0.2]}
              rotation={[0, -90, 0]}
              position={[0, 0, -0.15]}
              source={require('./res/megan.obj')}
              type="OBJ" />

            {["Jane Doe", "janedoe@exmaple.com", "www.janedoe.dev", "London, England", "23 years old"]
              .map((text, ind) => <RenderText key={ind} text={text} y={Number((6 - ind) * 0.05)} />)}

            <ViroSpotLight
              innerAngle={5}
              outerAngle={25}
              direction={[0, -1, 0]}
              position={[0, 5, 1]}
              color="#ffffff"
              castsShadow={true}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={7}
              shadowOpacity={.7} />

            <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true} />

          </ViroARImageMarker>
        </ViroARScene>
      </>
    );
  }
});

ViroARTrackingTargets.createTargets({
  logo: {
    source: require('./res/metrocard.jpg'),
    orientation: "Up",
    physicalWidth: 0.165 // real world width in meters
  }
});

module.exports = ARCarDemo;