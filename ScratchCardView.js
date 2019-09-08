import React from 'react';
import { requireNativeComponent, Image } from 'react-native';
import PropTypes from 'prop-types';


const NativeScratchCardView = requireNativeComponent('ScratchCardView');

class ScratchCardView extends React.Component {

    render(){

        const { couponImage } = this.props ; 
        const couponImagePath = Image.resolveAssetSource(couponImage);

        return(
            <NativeScratchCardView couponImage={couponImagePath.uri} style={{ height:300 , width:300}}/>
        )
    }

}


ScratchCardView.propTypes = {
    couponImage: PropTypes.number
}

export default ScratchCardView ; 