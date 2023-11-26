import { ImageBackground, StyleSheet, Image, TouchableOpacity} from "react-native";
import { View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Scan({ navigation }){
    return (
        <ImageBackground source={require('../assets/backgroundImage.png')} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.container}>
                <View style={styles.headerPart}>
                    <TouchableOpacity style={styles.backButton}>
                        <Image source={require('../assets/Arrow.png')} style={styles.arrowImage}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.middlePart}>
                    <ImageBackground source={require('../assets/ImageOnBackground.png')} resizeMode="cover" style={styles.image}>
                        <View style={styles.upperPart}>
                            <View style={styles.whiteBarInsideImage}></View>
                        </View>
                        <View style={styles.lowerPart}>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.bottomPart}>
                    <View style={styles.subContainer}>
                        <Image source={require('../assets/productImage.png')}/>

                        <View>
                            <Text style={styles.LaureText}> Lauren’s </Text>
                            <Text style={styles.OrangeJuiceText}> Orange Juice </Text>
                        </View>

                        <TouchableOpacity style={styles.AddButton}>
                            <Image source={require('../assets/Plus_image.png')} resizeMode="cover" style={styles.plusImage}/>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '18%',
        marginHorizontal: '8%',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    backButton: {
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerPart: {
        height: '13%',
        width: '100%',
    },
    middlePart: {
        height: '75%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '98%',
        height: '100%',
    },
    upperPart: {
        width: '100%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    lowerPart: {
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        opacity: 0.2,
    },
    whiteBarInsideImage: {
        width: '80%',
        height: 4,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    bottomPart: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        width: '89%',
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    AddButton: {
        backgroundColor: '#5A6CF3',
        width: 44,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusImage: {
       width: '50%',
    },
    LaureText: {
        fontWeight: '400',
        fontSize: 12,
        color:  '#C2C2C2',
        marginBottom: 10
    },
});