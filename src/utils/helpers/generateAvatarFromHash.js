import tinycolor from "tinycolor2";

export default hash => {
    
    let [r, g, b] = hash.substr(0, 3).split('').map(char => char.charCodeAt(0)>255?255:char.charCodeAt(0));
        console.log(hash)
    const color = tinycolor({ r, g, b }).toHexString();
    const colorLighten = tinycolor({ r, g, b }).lighten(30).toHexString();
    console.log(color,colorLighten);
    return {color, colorLighten};
}