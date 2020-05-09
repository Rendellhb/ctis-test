import React, { useState } from 'react';
import { RNCamera } from 'react-native-camera';
import { 
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { scale } from 'react-native-size-matters';
import i18n from '../../translations';
import { colors } from '../../styles';

const flashIcon = require('../../../assets/images/icons/flash.png');
const pictureButton = require('../../../assets/images/icons/pictureIcon.png');

export default function PictureView() {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off)
  const [cameraType, setCameraType] = useState('back')
  let camera = () => {}

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const changeFlashState = () => {
    if (flash === RNCamera.Constants.FlashMode.off) {
      setFlash(RNCamera.Constants.FlashMode.torch)
    } else {
      setFlash(RNCamera.Constants.FlashMode.off)
    }
  }

  const changeCameraType = () => {
    if (cameraType === 'back') {
      setCameraType('front')
    } else {
      setCameraType('back')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          style={styles.headerLeftIcon} 
          onPress={() => {changeFlashState()}}
        >
          <Image source={flashIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.headerRightIcon} 
          onPress={() => {changeCameraType()}}
        >
          <Image source={pictureButton} />
        </TouchableOpacity>
      </View>
      <RNCamera 
        ref={ref => {
          camera = ref;
        }}
        type={cameraType}
        flashMode={flash}
        style={styles.camera}
        captureAudio={false}
      />
      <View style={styles.bottomContainer}>
        <Text style={[styles.cancelText, styles.text]}>
          {i18n.t('cancel')}
        </Text>
        <View style={styles.takePhotoContainer}>
          <Text style={[styles.text, {marginLeft: scale(10)}]}>
            {i18n.t('photo')}
          </Text>
          <TouchableOpacity onPress={() => {takePicture()}}>
            <View style={styles.circle}>
              <View style={styles.blackCircle}>
                <View style={styles.innerWhiteCircle} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    height: scale(45),
    justifyContent: 'space-between',
  },
  headerRightIcon: {
    alignSelf: 'center',
    marginRight: scale(20),
    height: scale(20),
    width: scale(20)
  },
  headerLeftIcon: {
    alignSelf: 'center',
    marginLeft: scale(20),
    height: scale(20),
    width: scale(20)
  },
  camera: {
    flex: 6,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cancelText: {
    flex: 1.5,
    textAlign: 'center',
    alignSelf: 'center'
  },
  takePhotoContainer: {
    flex: 2,
  },
  text: {
    color: 'white'
  },
  circle: {
    width: scale(55),
    height: scale(55),
    borderRadius: scale(55)/2,
    backgroundColor: colors.white,
    marginTop: scale(5),
    justifyContent: 'center'
  },
  blackCircle: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(45)/2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  innerWhiteCircle: {
    width: scale(43),
    height: scale(43),
    borderRadius: scale(43)/2,
    backgroundColor: colors.white,
    alignSelf: 'center'
  }
})