let  {DeviceClient, DeviceConfig} = require('@wiotp/sdk');


const auth = {    
    token:"tvtz@PXzANbsA*V4h8"
  }
  const identity = {
   orgId:"qcq1v8",
   typeId:"raspberry",
   deviceId:"rasp"
  }


 let deviceConfig = new DeviceConfig(identity, auth, {
    logLevel: "info",
})
 
let deviceClient = new DeviceClient(deviceConfig);
deviceClient.connect();
//deviceClient.publishEvent("BatteryLife","json",data);

function getDataFromSensor(min, max) { 
    return Math.random() * (max - min) + min;
} 
  

sendInfo = () => {
    let data = {
        "equip1" : {
            "voltage": getDataFromSensor(10,220),
            "frequency": getDataFromSensor(5,5000),
            "timeup": getDataFromSensor(0,1000),
        },
        "equip2" : {
            "voltage": getDataFromSensor(10,220),
            "frequency": getDataFromSensor(5,5000),
            "timeup": getDataFromSensor(0,1000),
        },
        "equip3" : {
            "voltage": getDataFromSensor(10,220),
            "frequency": getDataFromSensor(5,5000),
            "timeup": getDataFromSensor(0,1000),
        }
    }
    deviceClient.publishEvent("equips","json",data);
}

setInterval(sendInfo, 1000)
