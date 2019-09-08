import React from 'react';
import { requireNativeComponent, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';


const NativeScratchCardView = requireNativeComponent('ScratchCardView');

class ScratchCardView extends React.Component {

    render(){

        const { couponImage } = this.props ; 
        const couponImagePath = Image.resolveAssetSource(couponImage);

        return(
            <View>
                {this.props.children}
                <View style={{ ...StyleSheet.absoluteFillObject}}>
                    <NativeScratchCardView couponImage={couponImagePath.uri} style={{ height:300 , width:300}}/>
                </View>
            </View>
            
        )
    }

}


ScratchCardView.propTypes = {
    couponImage: PropTypes.number
}

export default ScratchCardView ; 