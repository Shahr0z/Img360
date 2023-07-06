import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { CameraComponent, Image360ViewerComponent, ReButton } from './src/Components';
import Colors from './src/Theme/Colors';

const App = () => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [showCamera, setShowCamera] = useState(false);
  const [imageSources, setImageSources] = useState([]);
  const [torch, setTorch] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(newCameraPermission);
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSources(prevImageSources => [...prevImageSources, photo.path]);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  const handleOpenCamera = () => {
    setShowCamera(true);
  };

  const toggleTorch = () => {
    setTorch(prevTorch => !prevTorch);
  };

  const toggleFlash = () => {
    setFlash(prevFlash => !prevFlash);
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraComponent
          camera={camera}
          device={device}
          showCamera={showCamera}
          capturePhoto={capturePhoto}
          toggleTorch={toggleTorch}
          toggleFlash={toggleFlash}
          torch={torch}
          flash={flash}
        />
      ) : (
        <>
          {imageSources.length > 0 ? (
            <Image360ViewerComponent imageSources={imageSources} />
          ) : null}
          <ReButton handleOpenCamera={handleOpenCamera} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
});

export default App;

// import React, { useState } from 'react';
// import { View, Button, Image } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import Video from 'react-native-video';

// const App = () => {
//   const [imageSource, setImageSource] = useState(null);
//   const [videoSource, setVideoSource] = useState(null);
//   const [uploadImg, setUploadImg] = useState(null);

//   const clickImage = async () => {
//     await requestCameraPermission();
//     await requestExternalWritePermission();
//     launchCamera({ mediaType: 'photo', includeBase64: true, saveToPhotos: true, }, (response) => {
//       if (response.didCancel) {
//         alert("User cancelled camera picker");
//       } else if (response.errorCode == "camera_unavailable") {
//         alert("Camera not available on device");
//       } else if (response.errorCode == "permission") {
//         alert("Permission not satisfied");
//       } else if (response.errorCode == "others") {
//         alert(response.errorMessage);
//       } else {
//         console.log('response', response)
//         setImageSource(response?.assets[0]?.uri)
//       }

//     });
//   }
//   const recordVideo = async () => {
//     await requestCameraPermission();
//     await requestExternalWritePermission();
//     launchCamera({ mediaType: 'video', videoQuality: 'high', saveToPhotos: true, }, (response) => {
//       if (response.didCancel) {
//         alert("User cancelled video picker");
//       } else if (response.errorCode == "camera_unavailable") {
//         alert("Camera not available on device");
//       } else if (response.errorCode == "permission") {
//         alert("Permission not satisfied");
//       } else if (response.errorCode == "others") {
//         alert(response.errorMessage);
//       } else {
//         console.log('response', response)
//         setVideoSource(response?.assets[0]?.uri)
//       }
//     });
//   }
//   const selectImage = async () => {
//     const response = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 3 });
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else {
//       console.log('response', response)
//       setImageSource(response?.assets[0]?.uri)
//     }
//   }

//   return (
//     <View>
//       <Button title="Select Image" onPress={selectImage} />
//       <Button title="Record Video" onPress={recordVideo} />
//       <Button title="Click Image" onPress={clickImage} />
//       {imageSource && <Image source={{ uri: `file://${imageSource}` }} style={{ width: 200, height: 200 }} />}
//       {videoSource && <Video source={{ uri: videoSource }} style={{ width: 200, height: 200 }} />}
//       {uploadImg && <Image source={{ uri: uploadImg }} style={{ width: 200, height: 200 }} />}

//     </View>
//   );
// };
// export default App;