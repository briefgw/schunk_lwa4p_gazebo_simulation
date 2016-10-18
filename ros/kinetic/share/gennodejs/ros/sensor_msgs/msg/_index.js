
"use strict";

let PointCloud = require('./PointCloud.js');
let Imu = require('./Imu.js');
let RegionOfInterest = require('./RegionOfInterest.js');
let Image = require('./Image.js');
let LaserEcho = require('./LaserEcho.js');
let FluidPressure = require('./FluidPressure.js');
let RelativeHumidity = require('./RelativeHumidity.js');
let PointField = require('./PointField.js');
let ChannelFloat32 = require('./ChannelFloat32.js');
let PointCloud2 = require('./PointCloud2.js');
let NavSatFix = require('./NavSatFix.js');
let Temperature = require('./Temperature.js');
let JoyFeedback = require('./JoyFeedback.js');
let Illuminance = require('./Illuminance.js');
let LaserScan = require('./LaserScan.js');
let JoyFeedbackArray = require('./JoyFeedbackArray.js');
let CompressedImage = require('./CompressedImage.js');
let JointState = require('./JointState.js');
let Joy = require('./Joy.js');
let BatteryState = require('./BatteryState.js');
let MultiDOFJointState = require('./MultiDOFJointState.js');
let TimeReference = require('./TimeReference.js');
let MagneticField = require('./MagneticField.js');
let CameraInfo = require('./CameraInfo.js');
let NavSatStatus = require('./NavSatStatus.js');
let Range = require('./Range.js');
let MultiEchoLaserScan = require('./MultiEchoLaserScan.js');

module.exports = {
  PointCloud: PointCloud,
  Imu: Imu,
  RegionOfInterest: RegionOfInterest,
  Image: Image,
  LaserEcho: LaserEcho,
  FluidPressure: FluidPressure,
  RelativeHumidity: RelativeHumidity,
  PointField: PointField,
  ChannelFloat32: ChannelFloat32,
  PointCloud2: PointCloud2,
  NavSatFix: NavSatFix,
  Temperature: Temperature,
  JoyFeedback: JoyFeedback,
  Illuminance: Illuminance,
  LaserScan: LaserScan,
  JoyFeedbackArray: JoyFeedbackArray,
  CompressedImage: CompressedImage,
  JointState: JointState,
  Joy: Joy,
  BatteryState: BatteryState,
  MultiDOFJointState: MultiDOFJointState,
  TimeReference: TimeReference,
  MagneticField: MagneticField,
  CameraInfo: CameraInfo,
  NavSatStatus: NavSatStatus,
  Range: Range,
  MultiEchoLaserScan: MultiEchoLaserScan,
};
