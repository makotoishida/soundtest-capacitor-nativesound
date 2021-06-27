import { Device } from '@capacitor/device';
import { NativeAudio } from '@capacitor-community/native-audio';

console.log('index.js loaded.');

const btnBGMStart = document.getElementById('bgm_start');
const btnBGMStop = document.getElementById('bgm_stop');
const btnSE1 = document.getElementById('se1');
const btnSE2 = document.getElementById('se2');
const btnSE3 = document.getElementById('se3');

getDeviceInfo()
  .then(info => {
    preload(info.platform);
    setEventListeners();
  })
  .catch(e => {
    alert(JSON.stringify(e, null, 2));
  });

function getDeviceInfo() {
  console.log('Calling Device.getInfo()...');
  return Device.getInfo().then(info => {
    console.log('Device Info = ', JSON.stringify(info, null, 2));
    return info;
  });
}

function preload(platform) {
  const bgm_ext = platform === 'ios' ? 'mp3' : 'ogg';
  const se_ext = platform === 'ios' ? 'mp3' : 'wav';

  NativeAudio.preload({
    assetId: 'bgm_title',
    assetPath: `sounds/bgm_title.${bgm_ext}`,
    audioChannelNum: 1,
    isUrl: false,
  });

  NativeAudio.preload({
    assetId: 'se1',
    assetPath: `sounds/se1.${se_ext}`,
    audioChannelNum: 1,
    isUrl: false,
  });

  NativeAudio.preload({
    assetId: 'se2',
    assetPath: `sounds/se2.${se_ext}`,
    audioChannelNum: 1,
    isUrl: false,
  });

  NativeAudio.preload({
    assetId: 'se3',
    assetPath: `sounds/se3.${se_ext}`,
    audioChannelNum: 1,
    isUrl: false,
  });
}

function setEventListeners() {
  btnBGMStart.addEventListener('click', () => {
    console.log('BGM Start');
    NativeAudio.play({ assetId: 'bgm_title' });
  });

  btnBGMStop.addEventListener('click', () => {
    console.log('BGM Stop');
    NativeAudio.stop({ assetId: 'bgm_title' });
  });

  btnSE1.addEventListener('click', () => {
    console.log('SE1');
    NativeAudio.play({ assetId: 'se1' });
  });

  btnSE2.addEventListener('click', () => {
    console.log('SE2');
    NativeAudio.play({ assetId: 'se2' });
  });

  btnSE3.addEventListener('click', () => {
    console.log('SE3');
    NativeAudio.play({ assetId: 'se3' });
  });
}
