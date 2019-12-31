import React from 'react';
import { requireNativeComponent, Image, StyleSheet, View, Platform } from 'react-native';
import PropTypes from 'prop-types';


const NativeScratchView = requireNativeComponent('ScratchView');

class ScratchView extends React.Component {
    
    render(){

        const { scratchImage, onRevealed, style , autoRevealPercentage, spotRadius} = this.props ; 
        const scratchImagePath = Image.resolveAssetSource(scratchImage);

        const generalizedSpotRadius = Platform.OS == 'ios'? spotRadius*2 : spotRadius ;

        const data = { height:style.height, width: style.width, uri:scratchImagePath.uri,spotRadius:generalizedSpotRadius, autoRevealPercentage  }; 

        return(
            <View>
                <View style={style}>
                    {this.props.children}
                </View>
                <View style={{ ...StyleSheet.absoluteFillObject}}>
                    <NativeScratchView
                        onRevealed={onRevealed} 
                        style={{ height:style.height, width:style.width}}
                        data={Platform.OS =='android'? JSON.stringify(data): data}
                    />
                </View>
            </View>             
        )
    }

}


ScratchView.propTypes = {
    scratchImage: PropTypes.number.isRequired,
    onRevealed: PropTypes.func,
    style: PropTypes.any,
    autoRevealPercentage: PropTypes.number,
    spotRadius: PropTypes.number
}

ScratchView.defaultProps = {
    onRevealed: ()=>{},
    style: { height:200, width:200},
    autoRevealPercentage: 0.60, 
    spotRadius: 14
} 

export default ScratchView ; 