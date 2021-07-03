import Me from '~/assets/images/main-avatar.png'
import { get_random_item } from '~/util'

const containerStyle = {
    maxHeight : "60vh",
    marginTop : "5vh",
    marginBottom : "10vh",
    marginLeft: "auto",
    marginRight: "auto",

    position: "relative",
    align: "center",

    width:  "33vh",
    height: "60vh",

    maxWidth: "100%"
}

const avatarStyle = {
    zIndex: "2",
    top:    "20%",
    left:   "20%",
    position: "absolute",
}

const gradients = [
    "#000428, #004e92", // Frost
    "#02aab0, #00cdac", // Green Beach
    "#eecda3, #ef629f", // Tranquil
    "#7b4397, #dc2430", // Virgin America
    "#43cea2, #185a9d", // Endless River
    "#ff512f, #dd2476", // Bloody Mary
    "#ff5f6d, #ffc371", // Sweet Morning
    "#c33764, #1d2671", // Celestial
    "#141e30, #243b55", // Royal
    "#3a1c71, #d76d77, #ffaf7b", // Relay
]

const circleStyle = {
    zIndex: "1",
    top:    "0",
    left:   "0",
    position: "absolute",

    width:           "100%",
    paddingTop:      "100%",
    maxWidth:        "100%",


    backgroundImage: `radial-gradient(
        at top left,
        ${get_random_item(gradients)}
        )`,
    borderRadius: "50%",
}

function Avatar() {
    return (
        <div style={ containerStyle }>
            <div style={ circleStyle } > </div>
            <img style={ avatarStyle } alt="Failed to load avatar"  src={ Me }/>
        </div>
    );
}

export default Avatar;