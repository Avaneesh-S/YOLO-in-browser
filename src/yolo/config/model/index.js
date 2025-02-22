const modelsPath = "https://cors-anywhere.herokuapp.com/https://github.com/Avaneesh-S/YOLO-in-browser/tree/master/src/yolo/config/model/";
const modelFile = "model.json";

/**
 * Models path are exported because tf.loadModel
 * expects a URL instead the actual json config
 * file.
 */
export default {
  tiny: {
    v1: modelsPath + "v1-tiny/" + modelFile,
    v2: modelsPath + "v2-tiny/" + modelFile,
    v3: modelsPath + "v3-tiny/" + modelFile,
  },
  v3: modelsPath + "v3/" + modelFile
}