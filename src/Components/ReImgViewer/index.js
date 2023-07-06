import React from 'react';
import { Dimensions } from 'react-native';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
const { height, width } = Dimensions.get('window');
export const Image360ViewerComponent = ({ imageSources }) => (
    <Image360Viewer
        srcset={imageSources.map(source => ({ uri: `file://${source}` }))}
        width={width}
        height={height}
    />
);