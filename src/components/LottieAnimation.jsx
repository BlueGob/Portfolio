import React from 'react'
import Lottie from 'react-lottie';

export default class LottieControl extends React.Component {

    render() {
        const {className, lottie_image} = this.props;
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: lottie_image,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
        <div className={className}>
            <Lottie options={defaultOptions}  />
        </div>
        )
    }
}
