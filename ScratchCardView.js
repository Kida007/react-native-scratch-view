import React from 'react';
import { requireNativeComponent, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';


const NativeScratchCardView = requireNativeComponent('ScratchCardView');

class ScratchCardView extends React.Component {


    render(){

        const { couponImage, onScratched, style , autoScratchProgress, spotRadius} = this.props ; 
        const couponImagePath = Image.resolveAssetSource(couponImage);

        return(
            <View>
                <View style={{ height:style.height, width:style.width}}>
                    {this.props.children}
                </View>
                <View style={{ ...StyleSheet.absoluteFillObject}}>
                    <NativeScratchCardView
                        onScratched={onScratched} 
                        style={{ height:style.height, width:style.width}}
                        data={{ height:style.height, width: style.width, uri:couponImagePath.uri,spotRadius }}
                        autoScratchProgress={autoScratchProgress}
                    />
                </View>
            </View>
            
        )
    }

}


ScratchCardView.propTypes = {
    couponImage: PropTypes.number
}

export default ScratchCardView ; 