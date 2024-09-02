import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/coding.json'

export default class LottieControl extends React.Component {

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (<div>
            <Lottie options={defaultOptions} height={600} width={600} />
        </div>)
    }
}
